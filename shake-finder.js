// Initialize map
let map;
let markers = [];
let userLocation = null;
let earthquakeData = [];

// Initialize the map when the page loads
document.addEventListener('DOMContentLoaded', () => {
    // Initialize map centered on Myanmar
    map = L.map('earthquake-map').setView([21.9162, 95.9560], 6);
    
    // Add OpenStreetMap tiles
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors'
    }).addTo(map);

    // Initialize event listeners
    initializeEventListeners();
    
    // Load initial earthquake data
    loadEarthquakeData();
});

// Initialize all event listeners
function initializeEventListeners() {
    // Location input search
    const locationInput = document.getElementById('location-input');
    locationInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            searchLocation(locationInput.value);
        }
    });

    // Current location button
    document.getElementById('current-location-btn').addEventListener('click', getCurrentLocation);

    // Filter changes
    document.getElementById('magnitude-filter').addEventListener('change', updateEarthquakeList);
    document.getElementById('time-filter').addEventListener('change', loadEarthquakeData);
}

// Get user's current location
function getCurrentLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                userLocation = {
                    lat: position.coords.latitude,
                    lng: position.coords.longitude
                };
                map.setView([userLocation.lat, userLocation.lng], 8);
                addUserMarker();
                loadEarthquakeData();
            },
            (error) => {
                console.error('Error getting location:', error);
                alert('Unable to get your location. Please enter it manually.');
            }
        );
    } else {
        alert('Geolocation is not supported by your browser. Please enter your location manually.');
    }
}

// Search for a location
function searchLocation(query) {
    // Use OpenStreetMap Nominatim API for geocoding
    fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(query)}`)
        .then(response => response.json())
        .then(data => {
            if (data.length > 0) {
                userLocation = {
                    lat: parseFloat(data[0].lat),
                    lng: parseFloat(data[0].lon)
                };
                map.setView([userLocation.lat, userLocation.lng], 8);
                addUserMarker();
                loadEarthquakeData();
            } else {
                alert('Location not found. Please try a different search term.');
            }
        })
        .catch(error => {
            console.error('Error searching location:', error);
            alert('Error searching location. Please try again.');
        });
}

// Add user location marker to map
function addUserMarker() {
    // Remove existing user marker if any
    map.eachLayer((layer) => {
        if (layer instanceof L.Marker && layer.options.isUserLocation) {
            map.removeLayer(layer);
        }
    });

    // Add new user marker
    const userMarker = L.marker([userLocation.lat, userLocation.lng], {
        isUserLocation: true
    }).addTo(map);
    
    userMarker.bindPopup('Your Location').openPopup();
}

// Load earthquake data from USGS API
function loadEarthquakeData() {
    const timeFilter = document.getElementById('time-filter').value;
    const magnitudeFilter = document.getElementById('magnitude-filter').value;
    
    // Calculate time range based on filter
    const endTime = new Date().toISOString();
    let startTime = new Date();
    switch (timeFilter) {
        case 'hour':
            startTime.setHours(startTime.getHours() - 1);
            break;
        case 'day':
            startTime.setDate(startTime.getDate() - 1);
            break;
        case 'week':
            startTime.setDate(startTime.getDate() - 7);
            break;
        case 'month':
            startTime.setMonth(startTime.getMonth() - 1);
            break;
    }

    // Build API URL
    let url = `https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=${startTime.toISOString()}&endtime=${endTime}`;
    
    // Add magnitude filter if specified
    if (magnitudeFilter !== 'all') {
        url += `&minmagnitude=${magnitudeFilter}`;
    }

    // Add location filter if user location is set
    if (userLocation) {
        // Search within 1000km radius
        url += `&latitude=${userLocation.lat}&longitude=${userLocation.lng}&maxradiuskm=1000`;
    }

    // Fetch earthquake data
    fetch(url)
        .then(response => response.json())
        .then(data => {
            earthquakeData = data.features;
            updateMap();
            updateEarthquakeList();
        })
        .catch(error => {
            console.error('Error loading earthquake data:', error);
            alert('Error loading earthquake data. Please try again later.');
        });
}

// Update map with earthquake markers
function updateMap() {
    // Clear existing markers
    markers.forEach(marker => map.removeLayer(marker));
    markers = [];

    // Add new markers
    earthquakeData.forEach(earthquake => {
        const { coordinates } = earthquake.geometry;
        const magnitude = earthquake.properties.mag;
        const place = earthquake.properties.place;
        const time = new Date(earthquake.properties.time);

        // Create marker with custom icon based on magnitude
        const marker = L.circleMarker([coordinates[1], coordinates[0]], {
            radius: getMarkerRadius(magnitude),
            fillColor: getMarkerColor(magnitude),
            color: '#fff',
            weight: 1,
            opacity: 1,
            fillOpacity: 0.8
        }).addTo(map);

        // Add popup with earthquake information
        marker.bindPopup(`
            <strong>Magnitude: ${magnitude}</strong><br>
            Location: ${place}<br>
            Time: ${time.toLocaleString()}
        `);

        markers.push(marker);
    });
}

// Update earthquake list
function updateEarthquakeList() {
    const container = document.getElementById('earthquake-list-container');
    const magnitudeFilter = parseFloat(document.getElementById('magnitude-filter').value) || 0;
    
    // Filter earthquakes by magnitude
    const filteredEarthquakes = earthquakeData.filter(eq => eq.properties.mag >= magnitudeFilter);
    
    // Sort by magnitude (largest first)
    filteredEarthquakes.sort((a, b) => b.properties.mag - a.properties.mag);

    // Generate HTML for earthquake list
    container.innerHTML = filteredEarthquakes.map(earthquake => {
        const { coordinates } = earthquake.geometry;
        const magnitude = earthquake.properties.mag;
        const place = earthquake.properties.place;
        const time = new Date(earthquake.properties.time);
        
        // Calculate distance if user location is set
        let distance = '';
        if (userLocation) {
            const distanceKm = calculateDistance(
                userLocation.lat,
                userLocation.lng,
                coordinates[1],
                coordinates[0]
            );
            distance = `${distanceKm.toFixed(1)} km away`;
        }

        return `
            <div class="earthquake-item">
                <div class="earthquake-info">
                    <div class="earthquake-magnitude">M${magnitude.toFixed(1)}</div>
                    <div class="earthquake-location">${place}</div>
                    <div class="earthquake-time">${time.toLocaleString()}</div>
                </div>
                ${distance ? `<div class="earthquake-distance">${distance}</div>` : ''}
            </div>
        `;
    }).join('');
}

// Helper function to calculate distance between two points
function calculateDistance(lat1, lon1, lat2, lon2) {
    const R = 6371; // Earth's radius in km
    const dLat = toRad(lat2 - lat1);
    const dLon = toRad(lon2 - lon1);
    const a = Math.sin(dLat/2) * Math.sin(dLat/2) +
              Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) * 
              Math.sin(dLon/2) * Math.sin(dLon/2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    return R * c;
}

// Helper function to convert degrees to radians
function toRad(degrees) {
    return degrees * (Math.PI/180);
}

// Helper function to get marker radius based on magnitude
function getMarkerRadius(magnitude) {
    return Math.max(4, Math.min(10, magnitude * 2));
}

// Helper function to get marker color based on magnitude
function getMarkerColor(magnitude) {
    if (magnitude >= 6) return '#b20101';
    if (magnitude >= 5) return '#ff4500';
    if (magnitude >= 4) return '#ffa500';
    return '#ffd700';
} 