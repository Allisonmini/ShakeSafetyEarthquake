const translations = {
    en: {
        // Navigation
        'home': 'Home',
        'about': 'About',
        'menu': 'Menu',
        'what-is-earthquake': 'What is an Earthquake?',
        'types-of-earthquakes': 'Types of Earthquakes',
        'history': 'History of Major Earthquakes',
        'safety-tips': 'Safety Tips & Preparations',
        'preparations': 'Preparations',
        'before': 'Before',
        'during': 'During',
        'after': 'After',
        'shake-finder': 'Shake Finder',

        // Shake Finder Page
        'shake-finder-title': 'Shake Finder',
        'shake-finder-desc': 'Find real-time earthquakes near your location',
        'location-placeholder': 'Enter your location or use current location',
        'use-current-location': 'Use Current Location',
        'recent-earthquakes': 'Recent Earthquakes',
        'all-magnitudes': 'All Magnitudes',
        'magnitude-4-plus': '4.0+',
        'magnitude-5-plus': '5.0+',
        'magnitude-6-plus': '6.0+',
        'last-hour': 'Last Hour',
        'last-24-hours': 'Last 24 Hours',
        'last-7-days': 'Last 7 Days',
        'last-30-days': 'Last 30 Days'
    },
    my: {
        // Navigation
        'home': 'မူလစာမျက်နှာ',
        'about': 'အကြောင်းအရာ',
        'menu': 'မီနူး',
        'what-is-earthquake': 'ငလျင်ဆိုတာ ဘာလဲ',
        'types-of-earthquakes': 'ငလျင်အမျိုးအစားများ',
        'history': 'အရေးကြီးငလျင်များ၏ သမိုင်း',
        'safety-tips': 'ဘေးအန္တရာယ် ကင်းရှင်းရေး အကြံပြုချက်များ',
        'preparations': 'ကြိုတင်ပြင်ဆင်မှုများ',
        'before': 'မတိုင်မီ',
        'during': 'ဖြစ်ပွားနေစဉ်',
        'after': 'ဖြစ်ပွားပြီးနောက်',
        'shake-finder': 'ငလျင်ရှာဖွေရေး',

        // Shake Finder Page
        'shake-finder-title': 'ငလျင်ရှာဖွေရေး',
        'shake-finder-desc': 'သင့်နေရာနှင့် အနီးအနားရှိ လက်ရှိငလျင်များကို ရှာဖွေပါ',
        'location-placeholder': 'သင့်နေရာကို ထည့်သွင်းပါ သို့မဟုတ် လက်ရှိနေရာကို အသုံးပြုပါ',
        'use-current-location': 'လက်ရှိနေရာကို အသုံးပြုပါ',
        'recent-earthquakes': 'မကြာသေးမီက ငလျင်များ',
        'all-magnitudes': 'ငလျင်ပြင်းအားအားလုံး',
        'magnitude-4-plus': '၄.၀ အထက်',
        'magnitude-5-plus': '၅.၀ အထက်',
        'magnitude-6-plus': '၆.၀ အထက်',
        'last-hour': 'နောက်ဆုံး ၁ နာရီ',
        'last-24-hours': 'နောက်ဆုံး ၂၄ နာရီ',
        'last-7-days': 'နောက်ဆုံး ၇ ရက်',
        'last-30-days': 'နောက်ဆုံး ၃၀ ရက်'
    }
};

// Function to change language
function changeLanguage(lang) {
    // Set the HTML lang attribute
    document.documentElement.lang = lang;

    // Update all elements with data-translate attribute
    document.querySelectorAll('[data-translate]').forEach(element => {
        const key = element.getAttribute('data-translate');
        if (translations[lang] && translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });

    // Update all elements with data-translate-placeholder attribute
    document.querySelectorAll('[data-translate-placeholder]').forEach(element => {
        const key = element.getAttribute('data-translate-placeholder');
        if (translations[lang] && translations[lang][key]) {
            element.placeholder = translations[lang][key];
        }
    });

    // Update active language tab
    document.querySelectorAll('.lang-tab').forEach(tab => {
        tab.classList.remove('active');
    });
    document.querySelector(`.lang-tab[onclick="changeLanguage('${lang}')"]`).classList.add('active');

    // Store the selected language
    localStorage.setItem('selectedLanguage', lang);
}

// Initialize language on page load
document.addEventListener('DOMContentLoaded', () => {
    const savedLanguage = localStorage.getItem('selectedLanguage') || 'en';
    changeLanguage(savedLanguage);
}); 
