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

        // Menu Page
        'menu-title': 'You know what...',
        'what-is-earthquake-desc': 'Essential guidelines for earthquake safety',
        'types-of-earthquakes-desc': 'Create and manage your emergency response plan',
        'history-desc': 'Helpful tools and information',
        'safety-tips-desc': 'Connect with others and share experiences',

        // What is Earthquake Page
        'earthquake-definition': 'An earthquake is the sudden, rapid shaking of the ground caused by the movement of the Earth\'s outer layer — the crust. This shaking happens when built-up energy inside the Earth is suddenly released. Earthquakes can be minor, where you may feel only a slight tremor, or they can be massive, leading to serious destruction, collapsing buildings, broken roads, fires, landslides, or even tsunamis in coastal areas.',
        'earthquake-frequency': 'Earthquakes are natural events that occur around the world every day — many too small to notice. However, large earthquakes can result in tragic loss of life and damage to homes, schools, hospitals, and infrastructure. That\'s why it\'s so important to understand what earthquakes are and how we can stay prepared.',
        'earthquake-measurement': 'One of the key ways we measure earthquakes is with a tool called a seismograph, and the energy release is recorded on a scale called the Richter Scale or more modernly, the Moment Magnitude Scale. The bigger the number, the stronger the earthquake.',
        'how-earthquakes-occur': 'How do Earthquakes Occur?',
        'earthquake-intro': 'To understand how earthquakes happen, we need to look beneath our feet.',
        'tectonic-plates': 'The surface of the Earth is not one solid piece — it is made up of massive slabs of rock called tectonic plates. These plates slowly move, like puzzle pieces floating on a sea of molten rock. They may:',
        'convergent-boundary': 'Push into each other (convergent boundary)',
        'transform-boundary': 'Slide past one another (transform boundary)',
        'divergent-boundary': 'Pull apart from each other (divergent boundary)',
        'earthquake-mechanism': 'Over time, stress builds up along the edges of these plates, especially where they grind or push against one another. Eventually, this pressure becomes too much. When the rock finally breaks or slips, it releases a sudden burst of energy. That energy travels in waves through the ground — and that\'s what we feel as an earthquake.',
        'focus-epicenter': 'The place where the break starts, deep under the Earth, is called the focus (or hypocenter), and the point directly above it on the surface is called the epicenter. The closer you are to the epicenter, the stronger the shaking usually feels.',
        'san-andreas': 'In many places, this plate movement is constant. For example, California lies along the San Andreas Fault, one of the most famous transform boundaries where two plates slide past each other, frequently causing earthquakes.',
        'other-causes': 'Sometimes, earthquakes can also be triggered by volcanic activity, the collapse of large underground caves, or even human activities like mining and reservoir construction.',
        'helpful-resources': 'Helpful Resources to Learn More',
        'usgs-link': 'USGS Earthquake Science',
        'ready-gov-link': 'Ready.gov Earthquake Information',
        'redcross-link': 'Red Cross Earthquake Safety',
        'fema-link': 'FEMA Earthquake Resources',

        // Hero Section
        'hero-title': 'Shake Safety',
        'hero-description': 'Your trusted source for learning how to stay safe before, during, and after an earthquake. Earthquakes can strike without warning, causing severe damage and loss of life. But with the right knowledge and preparation, you can reduce the risks and protect yourself and your loved ones. This site provides essential information, safety tips, emergency plans, and recovery resources to help individuals and communities become more resilient. Start learning today because safety begins with awareness.',
        'get-started': 'Get Started',

        // About Section
        'about-title': 'About Us',
        'about-content': 'We are dedicated to providing comprehensive earthquake safety information and resources to help communities prepare for and respond to seismic events.',

        // Types of Earthquakes Page
        'types-intro': 'Earthquakes are one of the most powerful natural forces on Earth, capable of reshaping landscapes, destroying cities, and changing lives in just moments. While many people think of earthquakes as sudden and mysterious, they are actually the result of specific physical processes happening deep beneath the Earth\'s surface.',
        'types-intro-2': 'The most common cause of earthquakes is tectonic activity, where massive slabs of Earth\'s crust (called tectonic plates) move, collide, or slide past one another. However, not all earthquakes are caused by tectonic forces. In fact, there are several distinct types of earthquakes, each triggered by different natural or human-induced processes. These include the movement of magma beneath volcanoes, the collapse of underground caves, and even explosions from nuclear tests or industrial activities.',
        'types-intro-3': 'Understanding the different types of earthquakes is crucial for scientists, engineers, and the general public. Each type can vary in intensity, location, warning signs, and potential damage. By learning about the causes and characteristics of these earthquakes, we can better prepare for them and reduce their impact on human life and the environment.',
        'types-intro-4': 'In the sections below, we\'ll explore the main categories of earthquakes in detail — from the powerful tectonic quakes that shake entire regions to the subtle tremors triggered by human activity. Each type is explained with real-world examples to help you visualize where and how they occur.',
        'tectonic-title': 'Tectonic Earthquakes',
        'tectonic-definition': 'Tectonic earthquakes are the most common type, occurring when the Earth\'s tectonic plates move and interact with each other. These earthquakes can be further classified based on the type of plate boundary where they occur.',
        'convergent-title': 'Convergent Boundary Earthquakes',
        'convergent-definition': 'These occur where plates collide, often creating mountain ranges and deep ocean trenches. The 2011 Tohoku earthquake in Japan is a famous example, which also triggered a devastating tsunami.',
        'divergent-title': 'Divergent Boundary Earthquakes',
        'divergent-definition': 'These happen where plates move apart, typically along mid-ocean ridges. While these earthquakes are usually less powerful, they can still cause significant damage to nearby structures.',
        'transform-title': 'Transform Boundary Earthquakes',
        'transform-definition': 'These occur where plates slide past each other horizontally. The San Andreas Fault in California is a well-known example of a transform boundary, responsible for many significant earthquakes.',
        'volcanic-title': 'Volcanic Earthquakes',
        'volcanic-definition': 'Volcanic earthquakes are associated with volcanic activity and magma movement. They can serve as warning signs of potential volcanic eruptions.',
        'volcanic-types': 'There are two main types of volcanic earthquakes:',
        'volcanic-long-period': 'Long-period earthquakes: Caused by magma movement and pressure changes in the volcano',
        'volcanic-harmonic': 'Harmonic tremors: Continuous, low-frequency vibrations indicating magma movement',
        'induced-title': 'Induced Earthquakes',
        'induced-definition': 'These are earthquakes caused by human activities, such as:',
        'induced-mining': 'Mining operations that remove large amounts of material',
        'induced-reservoir': 'Reservoir-induced seismicity from large dams',
        'induced-fracking': 'Hydraulic fracturing (fracking) for oil and gas extraction',
        'induced-wastewater': 'Wastewater injection from oil and gas operations',
        'forces-title': 'Earthquake Forces',
        'forces-intro': 'Earthquakes generate different types of forces that affect structures and the ground:',
        'primary-forces': 'Primary (P) Waves',
        'primary-definition': 'The fastest seismic waves that compress and expand the ground in the direction of wave travel. They can travel through both solid and liquid materials.',
        'secondary-forces': 'Secondary (S) Waves',
        'secondary-definition': 'Slower than P waves, these waves move the ground up and down or side to side. They can only travel through solid materials.',
        'surface-forces': 'Surface Waves',
        'surface-definition': 'The slowest but most destructive waves that travel along the Earth\'s surface. They cause the most damage to buildings and structures.',
        'usgs-types-link': 'USGS Types of Earthquakes',
        'britannica-link': 'Britannica Earthquake Types',
        'iris-link': 'IRIS Earthquake Animations',

        // History of Earthquakes Page
        'history-title': 'History of Major Earthquakes',
        'history-intro': 'Throughout history, major earthquakes have shaped our understanding of these powerful natural phenomena. Here are some of the most significant earthquakes that have occurred around the world.',
        'tohoku-title': 'Tohoku Earthquake',
        'tohoku-location': 'Japan',
        'tohoku-description': 'The most powerful earthquake ever recorded in Japan, triggering a devastating tsunami that caused the Fukushima nuclear disaster.',
        'sumatra-title': 'Sumatra Earthquake',
        'sumatra-location': 'Indonesia',
        'sumatra-description': 'One of the deadliest natural disasters in recorded history, causing a massive tsunami that affected 14 countries.',
        'haiti-title': 'Haiti Earthquake',
        'haiti-location': 'Haiti',
        'haiti-description': 'A devastating earthquake that caused massive destruction in Port-au-Prince and surrounding areas.',
        'nepal-title': 'Nepal Earthquake',
        'nepal-location': 'Nepal',
        'nepal-description': 'A major earthquake that caused widespread damage in Nepal and triggered avalanches on Mount Everest.',
        'chile-title': 'Chile Earthquake',
        'chile-location': 'Chile',
        'chile-description': 'One of the strongest earthquakes ever recorded, causing significant damage and triggering a tsunami.',
        'sichuan-title': 'Sichuan Earthquake',
        'sichuan-location': 'China',
        'sichuan-description': 'A devastating earthquake that caused massive destruction in Sichuan province and surrounding areas.',
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
        'preparations': 'ပြင်ဆင်မှုများ',
        'before': 'မတိုင်မီ',
        'during': 'ဖြစ်ပွားနေစဉ်',
        'after': 'ဖြစ်ပွားပြီးနောက်',
        'shake-finder': 'ငလျင်ရှာဖွေရေး',

        // Menu Page
        'menu-title': 'သင်သိပါသလား...',
        'what-is-earthquake-desc': 'ငလျင်ဘေးအန္တရာယ် ကင်းရှင်းရေး လမ်းညွှန်ချက်များ',
        'types-of-earthquakes-desc': 'အရေးပေါ်တုံ့ပြန်ရေး အစီအစဉ်ကို ဖန်တီးပြီး စီမံခန့်ခွဲပါ',
        'history-desc': 'အထောက်အကူပြု ကိရိယာများနှင့် အချက်အလက်များ',
        'safety-tips-desc': 'အခြားသူများနှင့် ချိတ်ဆက်ပြီး အတွေ့အကြုံများကို မျှဝေပါ',

        // What is Earthquake Page
        'earthquake-definition': 'ငလျင်ဆိုသည်မှာ ကမ္ဘာ့မျက်နှာပြင်အလွှာ - ကမ္ဘာ့အပေါ်ယံအလွှာတို့၏ လှုပ်ရှားမှုကြောင့် ရုတ်တရက်၊ အလျင်အမြန် တုန်ခါခြင်းဖြစ်သည်။ ကမ္ဘာ့အတွင်းပိုင်းတွင် စုပုံနေသော စွမ်းအင်များ ရုတ်တရက် ထွက်ပေါ်လာသောအခါ ဤတုန်ခါမှုများ ဖြစ်ပေါ်လာသည်။ ငလျင်များသည် အနည်းငယ်သာ တုန်ခါမှုကို ခံစားရသော သေးငယ်သည့် ငလျင်များဖြစ်နိုင်သလို၊ အဆောက်အဦများ ပြိုကျခြင်း၊ လမ်းများ ပျက်စီးခြင်း၊ မီးလောင်ခြင်း၊ မြေပြိုခြင်းများ သို့မဟုတ် ကမ်းရိုးတန်းဒေသများတွင် ဆူနာမီများပင် ဖြစ်ပေါ်စေနိုင်သည့် ကြီးမားသော ငလျင်များလည်း ဖြစ်နိုင်သည်။',
        'earthquake-frequency': 'ငလျင်များသည် ကမ္ဘာတစ်ဝှမ်းတွင် နေ့စဉ်ဖြစ်ပေါ်နေသော သဘာဝဖြစ်စဉ်များဖြစ်သည် - အများစုမှာ သတိပြုမိရန် သေးငယ်လွန်းသည်။ သို့သော် ကြီးမားသော ငလျင်များသည် လူအသက်ဆုံးရှုံးမှုနှင့် အိမ်များ၊ ကျောင်းများ၊ ဆေးရုံများနှင့် အခြေခံအဆောက်အဦများ ပျက်စီးမှုကို ဖြစ်ပေါ်စေနိုင်သည်။ ထို့ကြောင့် ငလျင်ဆိုတာ ဘာလဲဆိုတာနဲ့ ဘယ်လို ကြိုတင်ပြင်ဆင်ထားရမလဲဆိုတာကို နားလည်ဖို့ အရမ်းအရေးကြီးပါတယ်။',
        'earthquake-measurement': 'ငလျင်များကို တိုင်းတာရန် အဓိက နည်းလမ်းတစ်ခုမှာ ဆိုင်စမိုဂရပ်ဟုခေါ်သော ကိရိယာကို အသုံးပြုခြင်းဖြစ်ပြီး၊ ထုတ်လွှတ်သော စွမ်းအင်ကို ရစ်ချ်တာစကေးသို့မဟုတ် ခေတ်သစ်တွင် မိုမွန်းတူဒီစကေးဖြင့် မှတ်တမ်းတင်သည်။ ဂဏန်းကြီးလေလေ ငလျင်ပြင်းအားမြင့်လေလေ ဖြစ်သည်။',
        'how-earthquakes-occur': 'ငလျင်များ ဘယ်လိုဖြစ်ပေါ်လာသလဲ',
        'earthquake-intro': 'ငလျင်များ ဘယ်လိုဖြစ်ပေါ်လာသလဲဆိုတာ နားလည်ဖို့ ကျွန်ုပ်တို့အောက်ကို ကြည့်ဖို့လိုပါတယ်။',
        'tectonic-plates': 'ကမ္ဘာ့မျက်နှာပြင်သည် အစိုင်အခဲတစ်ခုတည်းမဟုတ်ပါ - ၎င်းသည် တက်တွန်းနစ်ပလိတ်များဟုခေါ်သော ကျောက်တုံးကြီးများဖြင့် ဖွဲ့စည်းထားသည်။ ဤပလိတ်များသည် အရည်ပျော်နေသော ကျောက်များပေါ်တွင် ပဟေဠိအစိတ်အပိုင်းများကဲ့သို့ ဖြည်းညင်းစွာ ရွေ့လျားနေကြသည်။ ၎င်းတို့သည် -',
        'convergent-boundary': 'တစ်ခုနှင့်တစ်ခု တွန်းကန်ခြင်း (အနီးကပ်နယ်နိမိတ်)',
        'transform-boundary': 'တစ်ခုနှင့်တစ်ခု ဘေးဘက်သို့ ရွေ့လျားခြင်း (ပြောင်းလဲနယ်နိမိတ်)',
        'divergent-boundary': 'တစ်ခုနှင့်တစ်ခု ဝေးရာသို့ ရွေ့လျားခြင်း (ခွဲထွက်နယ်နိမိတ်)',
        'earthquake-mechanism': 'အချိန်ကြာလာသည်နှင့်အမျှ ဤပလိတ်များ၏ အစွန်းများတွင် ဖိအားများ တဖြည်းဖြည်း တိုးပွားလာပြီး၊ အထူးသဖြင့် ၎င်းတို့ တစ်ခုနှင့်တစ်ခု ပွတ်တိုက်သော သို့မဟုတ် တွန်းကန်သော နေရာများတွင် ဖြစ်သည်။ နောက်ဆုံးတွင် ဤဖိအားသည် အလွန်များပြားလာပြီး ကျောက်များ ကျိုးပဲ့သော သို့မဟုတ် ချော်ထွက်သောအခါ ရုတ်တရက် စွမ်းအင်တစ်ခု ထွက်ပေါ်လာသည်။ ထိုစွမ်းအင်သည် မြေကြီးအတွင်းမှ လှိုင်းများအဖြစ် ပျံ့နှံ့သွားပြီး - ထိုအရာကို ကျွန်ုပ်တို့ ငလျင်ဟု ခံစားရသည်။',
        'focus-epicenter': 'ကျောက်များ ကျိုးပဲ့ခြင်း စတင်ရာ ကမ္ဘာ့အတွင်းပိုင်း နက်ရှိုင်းသော နေရာကို ဖိုးကတ်စ် (သို့မဟုတ် ဟိုက်ပိုစင်တာ) ဟုခေါ်ပြီး၊ မျက်နှာပြင်ပေါ်ရှိ ၎င်း၏ တည့်တည့်အထက်ရှိ အမှတ်ကို အပီစင်တာ ဟုခေါ်သည်။ အပီစင်တာနှင့် နီးလေလေ တုန်ခါမှု ပိုပြင်းထန်လေလေ ဖြစ်သည်။',
        'san-andreas': 'နေရာများစွာတွင် ဤပလိတ်ရွေ့လျားမှုသည် မပြတ်ဖြစ်ပေါ်နေသည်။ ဥပမာအားဖြင့် ကယ်လီဖိုးနီးယားသည် ဆန်အန်ဒရီးယားး ဖော့လ်တ်တွင် တည်ရှိပြီး၊ ပလိတ်နှစ်ခု တစ်ခုနှင့်တစ်ခု ဘေးဘက်သို့ ရွေ့လျားသော အကျော်ကြားဆုံး ပြောင်းလဲနယ်နိမိတ်များထဲမှ တစ်ခုဖြစ်ကာ မကြာခဏ ငလျင်များ ဖြစ်ပေါ်စေသည်။',
        'other-causes': 'တစ်ခါတစ်ရံတွင် ငလျင်များသည် မီးတောင်လှုပ်ရှားမှု၊ ကြီးမားသော မြေအောက်လိုဏ်ဂူများ ပြိုကျခြင်း သို့မဟုတ် သတ္တုတူးဖော်ခြင်းနှင့် ရေလှောင်တမံ တည်ဆောက်ခြင်းကဲ့သို့ လူသားလုပ်ဆောင်ချက်များကြောင့်လည်း ဖြစ်ပေါ်နိုင်သည်။',
        'helpful-resources': 'ပိုမိုလေ့လာရန် အထောက်အကူပြု အရင်းအမြစ်များ',
        'usgs-link': 'USGS ငလျင်သိပ္ပံ',
        'ready-gov-link': 'Ready.gov ငလျင်အချက်အလက်များ',
        'redcross-link': 'ကြက်ခြေနီအသင်း ငလျင်ဘေးအန္တရာယ် ကင်းရှင်းရေး',
        'fema-link': 'FEMA ငလျင်အရင်းအမြစ်များ',

        // Hero Section
        'hero-title': 'ငလျင်ဘေးအန္တရာယ် ကင်းရှင်းရေး',
        'hero-description': 'ငလျင်မတိုင်မီ၊ ဖြစ်ပွားနေစဉ်နှင့် ဖြစ်ပွားပြီးနောက် ဘေးကင်းလုံခြုံစွာ နေထိုင်နည်းကို လေ့လာရန် သင့်အား ယုံကြည်စိတ်ချရသော အရင်းအမြစ်ဖြစ်သည်။ ငလျင်များသည် သတိပေးချက်မရှိဘဲ ဖြစ်ပေါ်နိုင်ပြီး၊ ပြင်းထန်သော ပျက်စီးမှုများနှင့် အသက်ဆုံးရှုံးမှုများကို ဖြစ်ပေါ်စေနိုင်သည်။ သို့သော် မှန်ကန်သော အသိပညာနှင့် ပြင်ဆင်မှုများဖြင့် အန္တရာယ်များကို လျှော့ချနိုင်ပြီး သင့်ကိုယ်တိုင်နှင့် သင့်ချစ်ရသူများကို ကာကွယ်နိုင်သည်။ ဤဝဘ်ဆိုဒ်သည် လူတစ်ဦးချင်းနှင့် လူမှုအသိုင်းအဝိုင်းများ ပိုမိုခိုင်မာလာစေရန် အရေးကြီးသော အချက်အလက်များ၊ ဘေးအန္တရာယ် ကင်းရှင်းရေး အကြံပြုချက်များ၊ အရေးပေါ်အစီအစဉ်များနှင့် ပြန်လည်ထူထောင်ရေး အရင်းအမြစ်များကို ပံ့ပိုးပေးသည်။ ဘေးကင်းလုံခြုံမှုသည် အသိပညာဖြင့် စတင်သောကြောင့် ယနေ့ပင် စတင်လေ့လာပါ။',
        'get-started': 'စတင်ရန်',

        // About Section
        'about-title': 'ကျွန်ုပ်တို့အကြောင်း',
        'about-content': 'လူမှုအသိုင်းအဝိုင်းများ ငလျင်ဘေးအန္တရာယ်များအတွက် ပြင်ဆင်နိုင်ရန်နှင့် တုံ့ပြန်နိုင်ရန် ကူညီရန် ကျွန်ုပ်တို့သည် နည်းလမ်းစုံပါဝင်သော ငလျင်ဘေးအန္တရာယ် ကင်းရှင်းရေး အချက်အလက်များနှင့် အရင်းအမြစ်များကို ပံ့ပိုးပေးရန် ရည်ရွယ်ထားပါသည်။',

        // Types of Earthquakes Page
        'types-intro': 'ငလျင်များသည် ကမ္ဘာပေါ်ရှိ အစွမ်းထက်ဆုံး သဘာဝအားများထဲမှ တစ်ခုဖြစ်ပြီး၊ ရှုခင်းများကို ပြောင်းလဲစေခြင်း၊ မြို့ကြီးများကို ဖျက်ဆီးခြင်းနှင့် လူ့ဘဝများကို မိနစ်ပိုင်းအတွင်း ပြောင်းလဲစေနိုင်သည်။ လူများစွာက ငလျင်များကို ရုတ်တရက်နှင့် ဆန်းကြယ်သော ဖြစ်စဉ်များဟု ထင်မြင်ကြသော်လည်း၊ အမှန်တကယ်တွင် ၎င်းတို့သည် ကမ္ဘာ့မျက်နှာပြင်အောက် နက်ရှိုင်းစွာတွင် ဖြစ်ပေါ်နေသော ရုပ်ပိုင်းဆိုင်ရာ လုပ်ငန်းစဉ်များ၏ ရလဒ်များဖြစ်သည်။',
        'types-intro-2': 'ငလျင်များ၏ အဖြစ်များဆုံး အကြောင်းရင်းမှာ ကျောက်လွှာလှုပ်ရှားမှုဖြစ်ပြီး၊ ကမ္ဘာ့အပေါ်ယံအလွှာ၏ ကြီးမားသော ကျောက်ပြားများ (ကျောက်လွှာများဟုခေါ်သည်) ရွေ့လျားခြင်း၊ တိုက်မိခြင်းသို့မဟုတ် တစ်ခုနှင့်တစ်ခု ဘေးဘက်သို့ ရွေ့လျားခြင်းတို့ကြောင့် ဖြစ်ပေါ်သည်။ သို့သော် ငလျင်အားလုံးသည် ကျောက်လွှာလှုပ်ရှားမှုကြောင့် ဖြစ်ပေါ်ခြင်းမဟုတ်ပါ။ အမှန်တကယ်တွင် ငလျင်အမျိုးအစားများစွာ ရှိပြီး၊ တစ်ခုချင်းစီသည် သဘာဝဖြစ်စဉ်များ သို့မဟုတ် လူသားလုပ်ရပ်များကြောင့် ဖြစ်ပေါ်သည်။ ၎င်းတို့တွင် မီးတောင်များအောက်ရှိ မီးတောင်ချော်ရည်လှုပ်ရှားမှု၊ မြေအောက်လိုဏ်ဂူများ ပြိုကျခြင်းနှင့် နျူကလီးယားစမ်းသပ်မှုများ သို့မဟုတ် စက်မှုလုပ်ငန်းလုပ်ဆောင်ချက်များမှ ပေါက်ကွဲမှုများပင် ပါဝင်သည်။',
        'types-intro-3': 'ငလျင်အမျိုးမျိုး၏ ကွဲပြားခြားနားမှုကို နားလည်ခြင်းသည် သိပ္ပံပညာရှင်များ၊ အင်ဂျင်နီယာများနှင့် ပြည်သူလူထုအတွက် အရေးကြီးပါသည်။ အမျိုးအစားတစ်ခုချင်းစီသည် ပြင်းအား၊ တည်နေရာ၊ ကြိုတင်သတိပေးချက်များနှင့် ဖြစ်နိုင်ခြေရှိသော ပျက်စီးမှုများတွင် ကွဲပြားနိုင်သည်။ ဤငလျင်များ၏ အကြောင်းရင်းများနှင့် လက္ခဏာများကို လေ့လာခြင်းဖြင့် ကျွန်ုပ်တို့သည် ၎င်းတို့အတွက် ပိုမိုကောင်းမွန်စွာ ပြင်ဆင်နိုင်ပြီး လူ့ဘဝနှင့် ပတ်ဝန်းကျင်အပေါ် ၎င်းတို့၏ သက်ရောက်မှုကို လျှော့ချနိုင်သည်။',
        'types-intro-4': 'အောက်တွင်ဖော်ပြထားသော အပိုင်းများတွင် ကျွန်ုပ်တို့သည် ငလျင်အဓိက အမျိုးအစားများကို အသေးစိတ်လေ့လာမည် - ဒေသအလုံးစုံကို တုန်ခါစေသော အားကောင်းသည့် ကျောက်လွှာငလျင်များမှ လူသားလုပ်ရပ်များကြောင့် ဖြစ်ပေါ်သော သိမ်မွေ့သည့် တုန်ခါမှုများအထိ။ အမျိုးအစားတစ်ခုချင်းစီကို ၎င်းတို့ ဖြစ်ပေါ်ရာ နေရာနှင့် ဖြစ်ပေါ်ပုံကို ပုံဖော်နိုင်ရန် လက်တွေ့ကမ္ဘာမှ ဥပမာများဖြင့် ရှင်းပြထားပါသည်။',
        'tectonic-title': 'ကျောက်လွှာလှုပ်ရှားမှုကြောင့်ဖြစ်သော ငလျင်များ',
        'tectonic-definition': 'ကျောက်လွှာလှုပ်ရှားမှုကြောင့်ဖြစ်သော ငလျင်များသည် အဖြစ်များဆုံးငလျင်အမျိုးအစားဖြစ်ပြီး ကမ္ဘာ့ကျောက်လွှာများ လှုပ်ရှားပြီး တစ်ခုနှင့်တစ်ခု ထိတွေ့ဆက်ဆံသောအခါ ဖြစ်ပေါ်သည်။ ဤငလျင်များကို ဖြစ်ပေါ်ရာ ကျောက်လွှာနယ်နိမိတ်အမျိုးအစားပေါ်မူတည်၍ ထပ်မံခွဲခြားနိုင်သည်။',
        'convergent-title': 'ကျောက်လွှာဆုံမိရာတွင်ဖြစ်သော ငလျင်များ',
        'convergent-definition': 'ဤငလျင်များသည် ကျောက်လွှာများ တိုက်မိရာတွင်ဖြစ်ပေါ်ပြီး တောင်တန်းများနှင့် သမုဒ္ဒရာကျင်းများကို ဖြစ်ပေါ်စေသည်။ ၂၀၁၁ ခုနှစ် တိုဟိုကုငလျင်သည် ထင်ရှားသောဥပမာတစ်ခုဖြစ်ပြီး ကြီးမားသော ဆူနာမီလှိုင်းကိုလည်း ဖြစ်ပေါ်စေခဲ့သည်။',
        'divergent-title': 'ကျောက်လွှာကွဲထွက်ရာတွင်ဖြစ်သော ငလျင်များ',
        'divergent-definition': 'ဤငလျင်များသည် ကျောက်လွှာများ ကွဲထွက်ရာတွင်ဖြစ်ပေါ်ပြီး အဓိကအားဖြင့် သမုဒ္ဒရာအလယ်ရှိ တောင်ကြောများတွင် ဖြစ်ပေါ်သည်။ ဤငလျင်များသည် ယေဘုယျအားဖြင့် အားပျော့သော်လည်း အနီးအနားရှိ အဆောက်အအုံများကို ပျက်စီးစေနိုင်သည်။',
        'transform-title': 'ကျောက်လွှာပြိုးပြိုးရွေ့ရာတွင်ဖြစ်သော ငလျင်များ',
        'transform-definition': 'ဤငလျင်များသည် ကျောက်လွှာများ အလျားလိုက်ရွေ့လျားရာတွင်ဖြစ်ပေါ်သည်။ ကယ်လီဖိုးနီးယားရှိ ဆန်အန်ဒရီးယက်း ပြတ်ရွေ့သည် ထင်ရှားသောဥပမာတစ်ခုဖြစ်ပြီး ငလျင်များစွာကို ဖြစ်ပေါ်စေခဲ့သည်။',
        'volcanic-title': 'မီးတောင်ငလျင်များ',
        'volcanic-definition': 'မီးတောင်ငလျင်များသည် မီးတောင်လှုပ်ရှားမှုနှင့် မီးတောင်ချော်ရည်လှုပ်ရှားမှုနှင့် ဆက်စပ်နေသည်။ ၎င်းတို့သည် မီးတောင်ပေါက်ကွဲမှု၏ ကြိုတင်သတိပေးချက်များဖြစ်နိုင်သည်။',
        'volcanic-types': 'မီးတောင်ငလျင်အဓိကအမျိုးအစားနှစ်မျိုးရှိသည်:',
        'volcanic-long-period': 'ရှည်လျားသောငလျင်များ: မီးတောင်ချော်ရည်လှုပ်ရှားမှုနှင့် ဖိအားပြောင်းလဲမှုများကြောင့်ဖြစ်ပေါ်သည်',
        'volcanic-harmonic': 'သံစဉ်တုန်ခါမှုများ: မီးတောင်ချော်ရည်လှုပ်ရှားမှုကို ညွှန်ပြသော ဆက်တိုက်ဖြစ်ပေါ်နေသော အနိမ့်ကြိမ်နှုန်းတုန်ခါမှုများ',
        'induced-title': 'လူသားလုပ်ရပ်များကြောင့်ဖြစ်သော ငလျင်များ',
        'induced-definition': 'ဤငလျင်များသည် လူသားလုပ်ရပ်များကြောင့်ဖြစ်ပေါ်သည်၊ ဥပမာ:',
        'induced-mining': 'ကျောက်မီးသွေးတူးဖော်ခြင်းကဲ့သို့သော ပစ္စည်းများစွာကို ဖယ်ရှားသော လုပ်ငန်းများ',
        'induced-reservoir': 'ကြီးမားသော ရေကာတာများကြောင့်ဖြစ်သော ရေလှောင်ကန်ငလျင်များ',
        'induced-fracking': 'ရေနံနှင့်ဓာတ်ငွေ့တူးဖော်ရန် ရေဖိအားဖြင့်ကျောက်ကွဲခြင်း',
        'induced-wastewater': 'ရေနံနှင့်ဓာတ်ငွေ့လုပ်ငန်းများမှ စွန့်ပစ်ရေထည့်သွင်းခြင်း',
        'forces-title': 'ငလျင်အားများ',
        'forces-intro': 'ငလျင်များသည် အဆောက်အအုံများနှင့် မြေပြင်ကို သက်ရောက်စေသော အားအမျိုးမျိုးကို ဖြစ်ပေါ်စေသည်:',
        'primary-forces': 'ပထမဆုံး (P) လှိုင်းများ',
        'primary-definition': 'အမြန်ဆုံးငလျင်လှိုင်းများဖြစ်ပြီး မြေပြင်ကို လှိုင်းသွားရာဘက်သို့ ဖိသိပ်ပြီး ကျယ်ပြန့်စေသည်။ ၎င်းတို့သည် အစိုင်အခဲနှင့် အရည်ပစ္စည်းများကို ဖြတ်သန်းနိုင်သည်။',
        'secondary-forces': 'ဒုတိယ (S) လှိုင်းများ',
        'secondary-definition': 'P လှိုင်းများထက် နှေးသော်လည်း ဤလှိုင်းများသည် မြေပြင်ကို အပေါ်အောက် သို့မဟုတ် ဘေးတိုက်ရွေ့လျားစေသည်။ ၎င်းတို့သည် အစိုင်အခဲပစ္စည်းများကိုသာ ဖြတ်သန်းနိုင်သည်။',
        'surface-forces': 'မျက်နှာပြင်လှိုင်းများ',
        'surface-definition': 'အနှေးဆုံးသော်လည်း အဖျက်စွမ်းအားအကြီးဆုံးလှိုင်းများဖြစ်ပြီး ကမ္ဘာ့မျက်နှာပြင်တစ်လျှောက် သွားလာသည်။ ၎င်းတို့သည် အဆောက်အအုံများကို အပျက်အစီးအများဆုံးဖြစ်စေသည်။',
        'usgs-types-link': 'USGS ငလျင်အမျိုးအစားများ',
        'britannica-link': 'Britannica ငလျင်အမျိုးအစားများ',
        'iris-link': 'IRIS ငလျင်အန်နီမေးရှင်းများ',

        // History of Earthquakes Page
        'history-title': 'အရေးကြီးငလျင်များ၏ သမိုင်း',
        'history-intro': 'သမိုင်းတစ်လျှောက်တွင် အရေးကြီးငလျင်များသည် ဤအားကောင်းသော သဘာဝဖြစ်စဉ်များကို ကျွန်ုပ်တို့၏ နားလည်မှုကို ပုံဖော်ခဲ့သည်။ ကမ္ဘာတစ်ဝှမ်းတွင် ဖြစ်ပေါ်ခဲ့သော အရေးကြီးဆုံး ငလျင်အချို့ကို ဖော်ပြထားပါသည်။',
        'tohoku-title': 'တိုဟိုကုငလျင်',
        'tohoku-location': 'ဂျပန်',
        'tohoku-description': 'ဂျပန်နိုင်ငံတွင် မှတ်တမ်းတင်ထားသော အပြင်းထန်ဆုံးငလျင်ဖြစ်ပြီး၊ ဖူကူရှီးမားနျူကလီးယားဘေးအန္တရာယ်ကို ဖြစ်ပေါ်စေသော ကြီးမားသည့် ဆူနာမီလှိုင်းကို ဖြစ်ပေါ်စေခဲ့သည်။',
        'sumatra-title': 'ဆူမားတြားငလျင်',
        'sumatra-location': 'အင်ဒိုနီးရှား',
        'sumatra-description': 'မှတ်တမ်းတင်ထားသော သမိုင်းတွင် အသေအပျောက်အများဆုံး သဘာဝဘေးအန္တရာယ်များထဲမှ တစ်ခုဖြစ်ပြီး၊ နိုင်ငံ ၁၄ နိုင်ငံကို ထိခိုက်စေသော ကြီးမားသည့် ဆူနာမီလှိုင်းကို ဖြစ်ပေါ်စေခဲ့သည်။',
        'haiti-title': 'ဟေတီငလျင်',
        'haiti-location': 'ဟေတီ',
        'haiti-description': 'ပို့အော်ပရင်စ်နှင့် အနီးအနားရှိ ဒေသများတွင် ကြီးမားသော ပျက်စီးမှုများကို ဖြစ်ပေါ်စေခဲ့သော ငလျင်ဖြစ်သည်။',
        'nepal-title': 'နီပေါငလျင်',
        'nepal-location': 'နီပေါ',
        'nepal-description': 'နီပေါနိုင်ငံတွင် ကျယ်ပြန့်သော ပျက်စီးမှုများကို ဖြစ်ပေါ်စေပြီး ဧဝရတ်တောင်ပေါ်တွင် နှင်းပြိုမှုများကို ဖြစ်ပေါ်စေခဲ့သော အဓိက ငလျင်ဖြစ်သည်။',
        'chile-title': 'ချီလီငလျင်',
        'chile-location': 'ချီလီ',
        'chile-description': 'မှတ်တမ်းတင်ထားသော သမိုင်းတွင် အပြင်းထန်ဆုံး ငလျင်များထဲမှ တစ်ခုဖြစ်ပြီး၊ ကြီးမားသော ပျက်စီးမှုများကို ဖြစ်ပေါ်စေပြီး ဆူနာမီလှိုင်းကို ဖြစ်ပေါ်စေခဲ့သည်။',
        'sichuan-title': 'စီချွမ်ငလျင်',
        'sichuan-description': 'စီချွမ်ပြည်နယ်နှင့် အနီးအနားရှိ ဒေသများတွင် ကြီးမားသော ပျက်စီးမှုများကို ဖြစ်ပေါ်စေခဲ့သော ငလျင်ဖြစ်သည်။',
    }
};

function changeLanguage(lang) {
    document.documentElement.lang = lang;
    
    // Update all translatable elements
    document.querySelectorAll('[data-translate]').forEach(element => {
        const key = element.getAttribute('data-translate');
        if (translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });

    // Update active state of language tabs
    document.querySelectorAll('.lang-tab').forEach(tab => {
        tab.classList.remove('active');
        if (tab.textContent === (lang === 'en' ? 'English' : 'မြန်မာ')) {
            tab.classList.add('active');
        }
    });

    // Store the selected language
    localStorage.setItem('selectedLanguage', lang);
}

// Initialize language on page load
document.addEventListener('DOMContentLoaded', () => {
    const savedLanguage = localStorage.getItem('selectedLanguage') || 'en';
    changeLanguage(savedLanguage);
}); 