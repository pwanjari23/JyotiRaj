import type { Product } from '../types';

export const PRODUCTS: Product[] = [
  {
    id: 'prod-1',
    slug: 'premium-special-dry-fruits-laddu',
    name: 'Jyotiraj Premium Special Dry Fruits Laddu',
    marathiName: 'ज्योतीराज प्रीमियम स्पेशल ड्राय फ्रुट्स लाडू',
    hindiName: 'ज्योतीराज प्रीमियम स्पेशल ड्राई फ्रूट्स लड्डू',
    subtitle: 'Pure Goodness • Rich Nutrition • Natural Energy',
    marathiSubtitle: 'शुद्धता, समृद्ध पोषण आणि नैसर्गिक ऊर्जेचा संगम',
    hindiSubtitle: 'शुद्धता • समृद्ध पोषण • प्राकृतिक ऊर्जा',
    category: 'laddu',
    categoryLabel: 'Premium Special Laddu',
    image: '/assets/product_premium_laddu.jpg',
    galleryImages: [
      '/assets/product_premium_laddu.jpg',
      '/assets/photo_premium_laddu.jpg'
    ],
    badge: 'Pure Goodness',
    rating: 5.0,
    reviewCount: 64,
    provisionalPrice: {
      '250g': 380,
      '500g': 740,
      '1kg': 1450,
    },
    overview:
      'Our flagship royal sweet crafted with 11 superfood ingredients: Almonds, Cashews, Pistachios, Walnuts, Dates, Figs, Pumpkin Seeds, Sunflower Seeds, Sesame Seeds, Cardamom, and Nutmeg. Pure nutrition and energy in every bite.',
    marathiOverview:
      'बदाम, काजू, पिस्ता, अक्रोड, खजूर, अंजीर, भोपळ्याच्या बिया, सूर्यफुलाच्या बिया, तीळ, वेलची आणि जायफळाचा परिपूर्ण शाही लाडू.',
    hindiOverview:
      'बादाम, काजू, पिस्ता, अखरोट, खजूर, अंजीर, कद्दू के बीज, सूरजमुखी के बीज, तिल, इलायची और जायफल का शाही पारंपरिक लड्डू।',
    websiteDescription:
      'Indulge in our most loved royal sweet. Handcrafted with 11 pure nuts, dates, and fragrant spices, this laddu combines rich crunchiness with natural date sweetness. Perfect for family celebrations, daily morning energy, or as a thoughtful gift with zero refined white sugar.',
    proposedIngredients: [
      { name: 'Almonds (Badam)', hindiName: 'Rich in Protein & Healthy Fats', verified: true },
      { name: 'Cashews (Kaju)', hindiName: 'Good Source of Magnesium & Zinc', verified: true },
      { name: 'Pistachios (Pista)', hindiName: 'Supports Heart Health', verified: true },
      { name: 'Walnuts (Akhrot)', hindiName: 'Rich in Omega-3 Fatty Acids', verified: true },
      { name: 'Dates (Khajur)', hindiName: 'Natural Sweetness & Energy', verified: true },
      { name: 'Figs (Anjir)', hindiName: 'High in Fiber & Minerals', verified: true },
      { name: 'Pumpkin Seeds (Kadu Beej)', hindiName: 'Rich in Iron & Antioxidants', verified: true },
      { name: 'Sunflower Seeds (Surajmukhi Beej)', hindiName: 'Good for Heart & Immunity', verified: true },
      { name: 'Sesame Seeds (Til)', hindiName: 'Boosts Bone Health & Energy', verified: true },
      { name: 'Cardamom (Elaichi)', hindiName: 'Improves Digestion & Freshens Breath', verified: true },
      { name: 'Nutmeg (Jaiphal)', hindiName: 'Enhances Flavor & Digestion', verified: true }
    ],
    sensoryProfile: {
      taste: 'Rich, nutty, and naturally sweet from dates with a touch of soothing cardamom and nutmeg.',
      texture: 'Crisp, crunchy whole nuts wrapped in tender, melt-in-the-mouth dates and figs.',
      aroma: 'Freshly roasted nuts and fragrant Indian green cardamom.',
      appearance: 'Nut-studded golden-brown round laddus with vibrant green pista accents.'
    },
    highlights: [
      '11 Power-packed natural nuts, seeds, and dry fruits',
      'Naturally rich in plant protein, good fats, and daily fiber',
      'Sweetened purely by dates and figs — Zero white sugar',
      'Packed fresh in airtight containers for long-lasting taste'
    ],
    allergens: ['Almonds', 'Cashews', 'Pistachios', 'Walnuts', 'Sesame seeds'],
    nutritionalHighlights: [
      'Almonds and cashews provide natural energy, protein, and healthy minerals',
      'Walnuts give heart- and brain-healthy Omega-3 goodness',
      'Pumpkin and sunflower seeds deliver natural strength and daily vitality',
      'Cardamom and nutmeg aid smooth digestion and offer a soothing aroma'
    ],
    shape: 'Round Sphere',
    expectedFlavour: 'Rich, nutty, and subtly spiced',
    expectedTexture: 'Crunchy and chewy',
    suggestedPositioning: 'Signature Royal Sweet'
  },
  {
    id: 'prod-2',
    slug: 'dry-fruits-khajur-roll',
    name: 'Jyotiraj Dry Fruits Khajur Roll',
    marathiName: 'ज्योतीराज ड्राय फ्रुट्स खजूर रोल',
    hindiName: 'ज्योतीराज ड्राई फ्रूट्स खजूर रोल',
    subtitle: 'Natural • Nutritious • Delicious',
    marathiSubtitle: 'नैसर्गिक • पौष्टिक • अतिशय चविष्ट',
    hindiSubtitle: 'प्राकृतिक • पौष्टिक • बेहद स्वादिष्ट',
    category: 'roll-barfi',
    categoryLabel: 'Traditional Date Roll',
    image: '/assets/product_khajur_roll.jpg',
    galleryImages: [
      '/assets/product_khajur_roll.jpg',
      '/assets/photo_khajur_roll.jpg'
    ],
    badge: 'Pure Cow Ghee',
    rating: 4.9,
    reviewCount: 42,
    provisionalPrice: {
      '250g': 360,
      '500g': 700,
      '1kg': 1380,
    },
    overview:
      'Our Dry Fruits Khajur Roll is made with soft sweet dates, generous roasted almonds, cashews, pistachios, walnuts, pure cow ghee, and toasted sesame seeds, cut into attractive round slices.',
    marathiOverview:
      'शुद्ध खजूर, काजू, बदाम, पिस्ता, अक्रोड, तीळ, शुद्ध देशी तूप आणि वेलचीचा सुरेख गोल रोल.',
    hindiOverview:
      'शुद्ध खजूर, काजू, बादाम, पिस्ता, अखरोट, तिल, शुद्ध देसी घी और ताजी इलायची का स्वादिष्ट रोल।',
    websiteDescription:
      'Enjoy the classic pairing of soft sweet dates and crunchy dry fruits. Prepared with pure cow ghee and coated with toasted sesame seeds, each slice is filled with whole nuts and natural sweetness. A delightful treat for teatime, festive platters, and family gatherings.',
    proposedIngredients: [
      { name: 'Selected Dates (Khajur)', hindiName: 'Khajur Base', verified: true },
      { name: 'Almonds (Badam)', hindiName: 'Crunchy Californian Badam', verified: true },
      { name: 'Cashews (Kaju)', hindiName: 'Whole Kaju Pieces', verified: true },
      { name: 'Pistachios (Pista)', hindiName: 'Green Iranian Pista', verified: true },
      { name: 'Walnuts (Akhrot)', hindiName: 'Kashmiri Akhrot', verified: true },
      { name: 'Sesame Seeds (Til)', hindiName: 'Toasted White Sesame Rim', verified: true },
      { name: 'Pure Cow Ghee', hindiName: 'Shuddha Desi Ghee', verified: true },
      { name: 'Cardamom (Elaichi)', hindiName: 'Fresh Ground Elaichi', verified: true }
    ],
    sensoryProfile: {
      taste: 'Warm date sweetness balanced with the rich taste of pure cow ghee and roasted nuts.',
      texture: 'Soft, velvety center full of whole crisp nuts with a toasted sesame rim.',
      aroma: 'Sweet date caramel, toasted sesame, and fresh desi ghee.',
      appearance: 'Circular sliced medallions showing a beautiful mosaic of whole nuts.'
    },
    highlights: [
      'Made with 100% Pure Cow Ghee and whole roasted nuts',
      'Coated with toasted white sesame for added calcium and crunch',
      'Pre-sliced round medallions — ready to serve and share',
      'Naturally sweetened with dates — Zero white sugar'
    ],
    allergens: ['Almonds', 'Cashews', 'Pistachios', 'Walnuts', 'Sesame seeds', 'Milk / Ghee'],
    nutritionalHighlights: [
      'Dates provide natural quick-release energy and dietary potassium',
      'Pure Cow Ghee helps the body absorb essential vitamins and aids digestion',
      'Sesame seeds contribute high plant-based calcium for healthy bones'
    ],
    shape: 'Cylindrical Roll, Sliced Medallions',
    expectedFlavour: 'Date-rich, nutty, and buttery',
    expectedTexture: 'Chewy with crunchy nut pieces',
    suggestedPositioning: 'Artisan Date Specialty'
  },
  {
    id: 'prod-3',
    slug: 'kids-special-dry-fruit-laddu',
    name: 'Jyotiraj Kids Special Dry Fruit Laddu',
    marathiName: 'ज्योतीराज किड्स स्पेशल ड्राय फ्रुट लाडू',
    hindiName: 'ज्योतीराज किड्स स्पेशल ड्राई फ्रूट लड्डू',
    subtitle: 'Healthy Snacks for Happy Kids ♡ — No Added Sugar',
    marathiSubtitle: 'मुलांसाठी पौष्टिक आणि चविष्ट — साखरेचा वापर नाही',
    hindiSubtitle: 'बच्चों के लिए पौष्टिक स्नैक — बिना अतिरिक्त चीनी',
    category: 'laddu',
    categoryLabel: 'Kids Superfood Laddu',
    image: '/assets/product_kids_laddu.jpg',
    galleryImages: [
      '/assets/product_kids_laddu.jpg',
      '/assets/photo_kids_laddu.jpg'
    ],
    badge: 'No Added Sugar',
    rating: 4.9,
    reviewCount: 51,
    provisionalPrice: {
      '250g': 340,
      '500g': 660,
      '1kg': 1290,
    },
    overview:
      'A healthy, power-packed daily snack designed for growing kids and active families. Made with 9 wholesome ingredients: Dates, Almonds, Cashews, Pistachios, Walnuts, Pumpkin Seeds, Sunflower Seeds, Chia Seeds, and Flax Seeds — with absolutely no white sugar.',
    marathiOverview:
      'साखर नसलेला, खजूर, चिया, अळशी आणि सुकामेव्याने बनवलेला मुलांसाठी उत्तम पौष्टिक लाडू.',
    hindiOverview:
      'बिना चीनी, खजूर, चिया, अलसी और भरपूर सूखे मेवों से बना बच्चों का पसंदीदा सुपरफूड लड्डू।',
    websiteDescription:
      'Give your children the pure nutrition they need with our Kids Special Dry Fruit Laddu. Naturally sweetened with soft dates and loaded with brain-boosting nuts and super-seeds like chia and flax, it is the perfect healthy bite for school tiffins, playtime, or evening study breaks.',
    proposedIngredients: [
      { name: 'Dates (Khajur)', hindiName: '100% Natural Sweetener', verified: true },
      { name: 'Almonds (Badam)', hindiName: 'Badam for Memory & Vitality', verified: true },
      { name: 'Cashews (Kaju)', hindiName: 'Gentle Energy & Zinc', verified: true },
      { name: 'Pistachios (Pista)', hindiName: 'Antioxidants & Protein', verified: true },
      { name: 'Walnuts (Akhrot)', hindiName: 'Brain-boosting Omega-3', verified: true },
      { name: 'Pumpkin Seeds', hindiName: 'Immunity & Iron', verified: true },
      { name: 'Sunflower Seeds', hindiName: 'Vitamin E & Minerals', verified: true },
      { name: 'Chia Seeds', hindiName: 'Soluble Fiber & Calcium', verified: true },
      { name: 'Flax Seeds', hindiName: 'Plant ALA Omega-3', verified: true }
    ],
    sensoryProfile: {
      taste: 'Mild, pleasantly sweet, and nutty — a gentle flavor children truly love.',
      texture: 'Soft, easy-to-chew bite loaded with finely crushed nuts and wholesome seeds.',
      aroma: 'Mild, warm aroma of freshly crushed dry fruits.',
      appearance: 'Speckled golden laddus showing delicate chia and pumpkin seed flecks.'
    },
    highlights: [
      'No Added Sugar — 100% sweetened by natural dates',
      'Infused with power seeds: Chia, Flax, Pumpkin, and Sunflower',
      'Perfect healthy snack for school lunchboxes and sports activities',
      'Zero artificial flavors, chemical preservatives, or food dyes'
    ],
    allergens: ['Almonds', 'Cashews', 'Pistachios', 'Walnuts'],
    servingPrecautions:
      'Note for Parents: Contains wholesome whole nuts and seeds. We recommend supervising young children under 4 years while eating.',
    nutritionalHighlights: [
      'Chia and flax seeds supply natural Omega-3 fats for brain health and smooth digestion',
      'Dates provide steady, long-lasting energy without white sugar crashes',
      'Pumpkin and sunflower seeds supply natural zinc and iron to support growing immune systems'
    ],
    shape: 'Round Sphere',
    expectedFlavour: 'Nutty and mildly sweet',
    expectedTexture: 'Dense with fine nut and seed texture',
    suggestedPositioning: 'Family & Kids Super-Snack'
  },
  {
    id: 'prod-4',
    slug: 'classic-dry-fruit-ladoo',
    name: 'Jyotiraj Classic Dry Fruit Ladoo',
    marathiName: 'ज्योतीराज क्लासिक ड्राय फ्रुट लाडू',
    hindiName: 'ज्योतीराज क्लासिक ड्राई फ्रूट लड्डू',
    subtitle: 'Pure Ingredients • Real Nutrition',
    marathiSubtitle: 'शुद्ध घटक • अस्सल पोषण',
    hindiSubtitle: 'शुद्ध सामग्री • असली पोषण',
    category: 'laddu',
    categoryLabel: 'Heritage Ladoo with Gond',
    image: '/assets/product_classic_ladoo.jpg',
    galleryImages: [
      '/assets/product_classic_ladoo.jpg',
      '/assets/photo_classic_ladoo.jpg'
    ],
    badge: 'With Pure Cow Ghee & Gond',
    rating: 4.9,
    reviewCount: 58,
    provisionalPrice: {
      '250g': 350,
      '500g': 680,
      '1kg': 1320,
    },
    overview:
      'Our Classic Dry Fruit Ladoo is a time-honored traditional recipe prepared with Cashews, Almonds, Walnuts, Pistachios, Pure Cow Ghee, Dates, Edible Gum (Gond), Dried Figs, and Golden Raisins. Renowned for natural strength, joint wellness, and warm comfort.',
    marathiOverview:
      'डिंक, काजू, बदाम, अक्रोड, पिस्ता, खजूर, बेदाणे, अंजीर, शुद्ध तूप आणि वेलचीचा पारंपारिक शक्तिवर्धक लाडू.',
    hindiOverview:
      'गोंद, काजू, बादाम, अखरोट, पिस्ता, खजूर, किशमिश, अंजीर, शुद्ध देसी घी और इलायची का पारंपरिक शक्तिवर्धक लड्डू।',
    websiteDescription:
      'Experience the comforting taste of traditional Indian homes. Slow-roasted in pure cow ghee and enriched with traditional Gond (edible gum), sweet golden raisins, and dry fruits, this classic ladoo gives you wholesome nourishment and long-lasting stamina.',
    proposedIngredients: [
      { name: 'Cashew Nuts', hindiName: 'Kaju', verified: true },
      { name: 'Almonds', hindiName: 'Badam', verified: true },
      { name: 'Walnuts', hindiName: 'Akhrot', verified: true },
      { name: 'Pistachios', hindiName: 'Pista', verified: true },
      { name: 'Pure Cow Ghee', hindiName: 'Shuddha Desi Tup', verified: true },
      { name: 'Cardamom', hindiName: 'Elaichi', verified: true },
      { name: 'Dates', hindiName: 'Khajur', verified: true },
      { name: 'Edible Gum (Gond)', hindiName: 'Traditional Gond for Strength', verified: true },
      { name: 'Dried Figs', hindiName: 'Anjeer', verified: true },
      { name: 'Golden Raisins', hindiName: 'Kishmish', verified: true }
    ],
    sensoryProfile: {
      taste: 'Warm, buttery, and pleasantly sweet with juicy bursts from golden raisins.',
      texture: 'Crisp and crunchy from ghee-roasted gond and whole nuts, bound with soft dates.',
      aroma: 'Rich roasted cow ghee, warm spices, and golden raisins.',
      appearance: 'Deep golden-brown textured laddus glistening with pure ghee and dry fruits.'
    },
    highlights: [
      'Prepared with traditional Edible Gum (Gond) for bone and body strength',
      'Slow-roasted in Pure Cow Ghee for an authentic homemade taste',
      'Enriched with sweet golden raisins (kishmish) and dried figs (anjeer)',
      'A trusted family favorite for winter warmth, new mothers, and festive strength'
    ],
    allergens: ['Almonds', 'Cashews', 'Walnuts', 'Pistachios', 'Milk / Ghee'],
    nutritionalHighlights: [
      'Edible gum (Gond) is revered in Indian Ayurveda for joint strength and body warmth',
      'Golden raisins and dried figs provide natural iron and essential dietary minerals',
      'Desi cow ghee and roasted nuts provide long-lasting natural stamina'
    ],
    shape: 'Round Sphere',
    expectedFlavour: 'Traditional, rich, and comforting',
    expectedTexture: 'Dense, chewy, and crunchy with fried gond',
    suggestedPositioning: 'Heritage Wellness & Auspicious Celebrations'
  },
  {
    id: 'prod-5',
    slug: 'dry-fruits-khajur-barfi',
    name: 'Jyotiraj Dry Fruits Khajur Barfi',
    marathiName: 'ज्योतीराज ड्राय फ्रुट्स खजूर बर्फी',
    hindiName: 'ज्योतीराज ड्राई फ्रूट्स खजूर बर्फी',
    subtitle: 'Pure Goodness in Every Bite ♡',
    marathiSubtitle: 'प्रत्येक घासात शुद्धता आणि समृद्ध चव',
    hindiSubtitle: 'हर बाइट में शुद्धता और बेमिसाल स्वाद',
    category: 'roll-barfi',
    categoryLabel: 'Date Barfi Slices',
    image: '/assets/product_khajur_barfi.jpg',
    galleryImages: [
      '/assets/product_khajur_barfi.jpg',
      '/assets/photo_khajur_barfi.jpg'
    ],
    badge: '100% Natural Ingredients',
    rating: 5.0,
    reviewCount: 73,
    provisionalPrice: {
      '250g': 370,
      '500g': 720,
      '1kg': 1420,
    },
    overview:
      'Delicious, melt-in-the-mouth barfi made from ripe dates, almonds, cashews, pistachios, walnuts, and dried figs, finished with a fine poppy seed rim. Packed in sealed transparent food-grade containers to maintain freshness across long distances.',
    marathiOverview:
      'सुरक्षित फूड-ग्रेड पॅकमध्ये बंद केलेली, सुकामेवा आणि खजुराची मखमली शाही बर्फी.',
    hindiOverview:
      'सुरक्षित फूड-ग्रेड डिब्बे में पैक, खजूर, अंजीर और काजू-बादाम-पिस्ता की शाही मखमली बर्फी।',
    websiteDescription:
      'Discover the rich, royal flavor of our Dry Fruits Khajur Barfi. Made purely with dates and packed with crunchy almonds, cashews, pistachios, and figs, this sugar-free barfi offers luxury taste in every bite. Sliced into neat pieces, ready for festive sweet trays and special gifts.',
    proposedIngredients: [
      { name: 'Selected Dates', hindiName: 'Khajur Base', verified: true },
      { name: 'Almonds', hindiName: 'Crisp Badam', verified: true },
      { name: 'Cashews', hindiName: 'Nutty Kaju', verified: true },
      { name: 'Pistachios', hindiName: 'Green Pista Flakes', verified: true },
      { name: 'Walnuts', hindiName: 'Kashmiri Akhrot', verified: true },
      { name: 'Dried Figs', hindiName: 'Anjeer', verified: true },
      { name: 'Poppy Seeds', hindiName: 'Khaskhas Border', verified: true }
    ],
    sensoryProfile: {
      taste: 'Luscious, naturally sweet date flavor with rich, crunchy nut pieces in every bite.',
      texture: 'Soft, melt-in-the-mouth barfi packed with crunchy whole nuts.',
      aroma: 'Sweet date caramel and fresh roasted dry fruits.',
      appearance: 'Uniform diamond/square slices with an intricate, colorful nut mosaic.'
    },
    highlights: [
      '100% Natural Ingredients: Dates, Almonds, Cashews, Pista, Walnuts & Figs',
      'Delivered in airtight, clear food-grade packaging to preserve crispness',
      'Rich in natural fiber and potassium for heart and digestive wellness',
      'Perfect for festive platters, wedding boxes, and international gifting'
    ],
    allergens: ['Almonds', 'Cashews', 'Pistachios', 'Walnuts', 'Poppy seeds'],
    nutritionalHighlights: [
      'High in natural dietary fiber to support healthy daily digestion',
      'Boosts everyday energy with wholesome, slow-burning date sugars',
      'Supports heart wellness with healthy fats from raw whole nuts'
    ],
    shape: 'Square / Rectangular Slices',
    expectedFlavour: 'Date-forward, sweet, and nutty',
    expectedTexture: 'Firm, chewy, and nutty',
    suggestedPositioning: 'Export-Grade Premium Sweet'
  },
  {
    id: 'prod-6',
    slug: 'til-laddu',
    name: 'Jyotiraj Til Laddu',
    marathiName: 'ज्योतीराज अस्सल तिळ लाडू',
    hindiName: 'ज्योतीराज पारंपरिक तिल लड्डू',
    subtitle: 'Pure Sesame • Natural Warmth • High Calcium & Iron',
    marathiSubtitle: 'अस्सल तिळ, खजूर/गूळ आणि शुद्ध गाईच्या तुपाचा खमंग लाडू',
    hindiSubtitle: 'भुने हुए तिल, प्राकृतिक मिठास और भरपूर कैल्शियम',
    category: 'laddu',
    categoryLabel: 'Traditional Sesame Laddu',
    image: '/assets/product_til_laddu.jpg',
    galleryImages: [
      '/assets/product_til_laddu.jpg',
      '/assets/photo_til_laddu.jpg'
    ],
    badge: 'Rich in Calcium & Warmth',
    rating: 4.9,
    reviewCount: 46,
    provisionalPrice: {
      '250g': 220,
      '500g': 420,
      '1kg': 800,
    },
    overview:
      'Our traditional Til Laddu is handcrafted with premium toasted white sesame seeds, rich crushed nuts, and wholesome dates/jaggery bound with pure cow ghee. A cherished Maharashtrian winter specialty renowned for body warmth, natural iron, and bone health.',
    marathiOverview:
      'खमंग भाजलेले पांढरे तिळ, सुकामेवा, शुद्ध गाईचे तूप आणि नैसर्गिक गूळ/खजूर यांचा पारंपारिक शक्तिवर्धक तिळ लाडू. शरीराची उष्णता, हाडांची मजबुती आणि कॅल्शियमसाठी अत्यंत गुणकारी.',
    hindiOverview:
      'धीमी आंच पर भुने हुए सफेद तिल, मेवे, शुद्ध गाय का घी और प्राकृतिक मिठास से बना पारंपरिक तिल लड्डू। सर्दियों में शरीर को गर्माहट और भरपूर कैल्शियम देता है।',
    websiteDescription:
      'Celebrate tradition and authentic taste with Jyotiraj Til Laddu. Handcrafted using premium slow-roasted sesame seeds, pure cow ghee, and natural jaggery or soft dates, every bite offers an irresistible nutty crunch. Sesame seeds are one of nature’s richest plant-based sources of calcium, making this ladoo ideal for bone wellness, joint flexibility, and everyday energy.',
    proposedIngredients: [
      { name: 'White Sesame Seeds (Til)', hindiName: 'High Calcium & Minerals', verified: true },
      { name: 'Pure Cow Ghee', hindiName: 'Shuddha Desi Ghee', verified: true },
      { name: 'Natural Jaggery & Dates', hindiName: 'Iron-rich Natural Sweetener', verified: true },
      { name: 'Roasted Peanuts & Cashews', hindiName: 'Crunchy Protein Base', verified: true },
      { name: 'Green Cardamom (Elaichi)', hindiName: 'Fragrant Elaichi', verified: true },
      { name: 'Nutmeg (Jaiphal)', hindiName: 'Warmth & Smooth Digestion', verified: true }
    ],
    sensoryProfile: {
      taste: 'Warm, toasty sesame flavor balanced with rich sweetness and fragrant cardamom.',
      texture: 'Delightfully crispy and crunchy toasted sesame bite with a soft, melt-in-the-mouth core.',
      aroma: 'Freshly roasted sesame seeds, rich cow ghee, and soothing green cardamom.',
      appearance: 'Golden-brown spherical laddus speckled with whole toasted white sesame seeds.'
    },
    highlights: [
      'Prepared with 100% slow-roasted premium white sesame seeds',
      'Packed with natural plant calcium for bone and joint strength',
      'Traditional Gruh Udyog recipe crafted with pure cow ghee',
      'Zero artificial preservatives, additives, or chemicals'
    ],
    allergens: ['Sesame seeds', 'Peanuts', 'Cashews', 'Milk / Ghee'],
    nutritionalHighlights: [
      'Sesame seeds are a superfood providing over 3x the calcium of milk by weight',
      'Natural jaggery and dates supply vital dietary iron to fight fatigue and boost hemoglobin',
      'Pure cow ghee aids nutrient assimilation and maintains joint lubrication'
    ],
    shape: 'Round Sphere',
    expectedFlavour: 'Toasty sesame, nutty, and warm caramel',
    expectedTexture: 'Crispy, crunchy, and chewy',
    suggestedPositioning: 'Winter & Heritage Superfood'
  },
  {
    id: 'prod-7',
    slug: 'shengdana-laddu',
    name: 'Jyotiraj Shengdana Laddu',
    marathiName: 'ज्योतीराज खमंग शेंगदाणा लाडू',
    hindiName: 'ज्योतीराज स्वादिष्ट मूंगफली लड्डू',
    subtitle: 'Slow-Roasted Peanuts • High Plant Protein • Pure Energy',
    marathiSubtitle: 'भाजलेले शेंगदाणे, गूळ आणि शुद्ध तुपाचा अस्सल महाराष्ट्रीयन लाडू',
    hindiSubtitle: 'भुनी हुई मूंगफली, प्राकृतिक मिठास और प्रोटीन का उत्तम स्रोत',
    category: 'laddu',
    categoryLabel: 'High-Protein Peanut Laddu',
    image: '/assets/product_shengdana_laddu.jpg',
    galleryImages: [
      '/assets/product_shengdana_laddu.jpg',
      '/assets/photo_shengdana_laddu.jpg'
    ],
    badge: 'High Plant Protein',
    rating: 4.9,
    reviewCount: 53,
    provisionalPrice: {
      '250g': 200,
      '500g': 380,
      '1kg': 720,
    },
    overview:
      'Our Shengdana Laddu is crafted from golden slow-roasted Vidarbha peanuts, coarsely ground and blended with traditional jaggery and pure cow ghee. Packed with high plant protein, healthy fats, and sustained natural energy.',
    marathiOverview:
      'मंद आचेवर भाजलेले दर्जेदार शेंगदाणे, अस्सल गूळ आणि शुद्ध देशी तूप वापरून बनवलेला रुचकर लाडू. प्रथिने (प्रोटीन) आणि नैसर्गिक ऊर्जेचा उत्तम स्त्रोत.',
    hindiOverview:
      'धीमी आंच पर भुनी हुई करारी मूंगफली, पारंपरिक गुड़ और शुद्ध देसी घी से तैयार स्वादिष्ट लड्डू। बच्चों और बड़ों के लिए भरपूर प्रोटीन और ऊर्जा का खजाना।',
    websiteDescription:
      'Enjoy the timeless, heartwarming crunch of Maharashtra’s favorite peanut laddu. Jyotiraj Shengdana Laddu uses premium local peanuts roasted to perfection to release their full aroma and natural oils, coarsely crushed and bound with pure jaggery and ghee. Delivering clean plant protein and fiber, it makes the perfect post-workout snack, school break bite, or everyday teatime treat.',
    proposedIngredients: [
      { name: 'Roasted Peanuts (Shengdana)', hindiName: 'High Protein Groundnuts', verified: true },
      { name: 'Traditional Jaggery (Gul)', hindiName: 'Unrefined Jaggery', verified: true },
      { name: 'Pure Cow Ghee', hindiName: 'Shuddha Desi Tup', verified: true },
      { name: 'Green Cardamom (Elaichi)', hindiName: 'Fragrant Elaichi', verified: true }
    ],
    sensoryProfile: {
      taste: 'Rich roasted peanut butteriness harmonized with comforting jaggery sweetness.',
      texture: 'Coarsely crushed nutty crunch that melts softly with every chew.',
      aroma: 'Intensely fragrant roasted peanuts and warm jaggery.',
      appearance: 'Golden-tan rustic spheres with visible crushed peanut pieces.'
    },
    highlights: [
      'Made with 100% slow-roasted premium Vidarbha peanuts',
      'Natural source of clean plant protein and dietary fiber',
      'Bound with pure cow ghee and traditional unrefined jaggery',
      'Wholesome healthy energy for sports, study, and daily fitness'
    ],
    allergens: ['Peanuts', 'Milk / Ghee'],
    nutritionalHighlights: [
      'Peanuts provide high protein, niacin, and heart-healthy monounsaturated fats',
      'Traditional jaggery provides natural iron, boosting vitality without sugar spikes',
      'Ghee helps in deep tissue nourishment and smooth digestion'
    ],
    shape: 'Round Sphere',
    expectedFlavour: 'Nutty, roasty, and deeply comforting',
    expectedTexture: 'Crunchy, coarse, and crumbly',
    suggestedPositioning: 'Everyday Protein & Energy Snack'
  },
  {
    id: 'prod-8',
    slug: 'megha-madhur-delivery-laddu',
    name: "Meghare's Megha Madhur Delivery Laddu",
    marathiName: 'मेघा मधुर घरगुती पौष्टिक डिलेव्हरी लाडू',
    hindiName: 'मेघा मधुर घरेलू पौष्टिक डिलीवरी लड्डू',
    subtitle: 'For Pregnant & Lactating Mothers • 100% Pure Nutritious Dry Fruit Laddu',
    marathiSubtitle: 'गर्भवती व बाळंतीण झालेल्या आईसाठी पोषक, स्नायूवर्धक व शक्तिवर्धक',
    hindiSubtitle: 'गर्भवती व स्तनपान कराने वाली माताओं के लिए संपूर्ण शक्तिवर्धक पोषण',
    category: 'laddu',
    categoryLabel: 'Postpartum & Maternity Wellness Laddu',
    image: '/assets/photo_delivery_laddu_sq.jpg',
    galleryImages: [
      '/assets/poster_delivery_laddu.jpg',
      '/assets/photo_delivery_laddu_sq.jpg',
      '/assets/photo_delivery_laddu_plate.jpg'
    ],
    badge: 'For Pregnant & Lactating Mothers',
    rating: 5.0,
    reviewCount: 92,
    provisionalPrice: {
      '250g': 390,
      '500g': 760,
      '1kg': 1490,
    },
    overview:
      'Specially crafted by Jyoti Enterprises for pregnant and postpartum (बाळंतीण) mothers, as well as growing children. Handcrafted with pure cow ghee, edible gum (gond), dry fruits, and ayurvedic herbs to strengthen muscles, boost stamina, supply essential calcium, and support rapid postpartum recovery and healthy lactation.',
    marathiOverview:
      'गर्भवती व बाळंतीण झालेल्या आईसाठी खास घरगुती पौष्टिक लाडू. १००% शुद्ध, पोषक, स्नायूवर्धक, शक्तिवर्धक, कॅल्शियम युक्त आणि उत्तम चवीचे. लहान मुलांच्या सर्वांगीण विकासासाठी व रोगप्रतिकारक शक्ती वाढवण्यासाठी अत्यंत लाभकारी. FSSAI प्रमाणित.',
    hindiOverview:
      'गर्भवती और नई माताओं (डिलीवरी के बाद) के लिए विशेष घरेलू पौष्टिक लड्डू। 100% शुद्ध, मांसपेशियों को मजबूत करने वाला, शक्तिवर्धक, कैल्शियम से भरपूर और बच्चों के विकास व रोगप्रतिरोधक क्षमता के लिए अत्यंत लाभकारी। FSSAI प्रमाणित।',
    websiteDescription:
      'Nourish the sacred journey of motherhood with Meghare’s Megha Madhur Delivery Laddu by Jyoti Enterprises. Based on authentic Ayurvedic maternal care wisdom, this special laddu is prepared in pure cow ghee with roasted edible gum (dink/gond), premium almonds, cashews, pistachios, walnuts, dates, and vitality herbs. It restores physical stamina, strengthens pelvic muscles and bones with bioavailable calcium, promotes smooth lactation, and prevents postpartum aches. Also highly beneficial for children’s growth and immunity.',
    proposedIngredients: [
      { name: 'Pure Cow Ghee', hindiName: 'Desi Tup for Maternal Recovery', verified: true },
      { name: 'Edible Gum (Gond / Dink)', hindiName: 'Pelvic & Joint Strength', verified: true },
      { name: 'Almonds & Walnuts', hindiName: 'Brain & Nervous System Nutrition', verified: true },
      { name: 'Cashews & Pistachios', hindiName: 'Zinc, Protein & Vitality', verified: true },
      { name: 'Dates & Jaggery', hindiName: 'Natural Iron & Energy', verified: true },
      { name: 'Garden Cress Seeds (Aliv/Halim)', hindiName: 'Lactation & Hemoglobin', verified: true },
      { name: 'Dry Ginger (Sunth) & Spices', hindiName: 'Digestion & Postpartum Healing', verified: true }
    ],
    sensoryProfile: {
      taste: 'Rich, buttery, and comforting with deep dry-fruit richness and a mild, soothing herbal warmth.',
      texture: 'Dense, crunchy from fried gond and nuts, with a melt-in-the-mouth buttery finish.',
      aroma: 'Pure desi cow ghee, fried gond, roasted nuts, and warm aromatic spices.',
      appearance: 'Lustrous, nut-studded golden-brown spheres packed with visible almond and dry fruit slivers.'
    },
    highlights: [
      'Specially formulated for Pregnant Women & Postpartum (बाळंतीण) Mothers',
      '5-Fold Benefits: पोषक (Nutritious), स्नायूवर्धक (Muscle strengthening), शक्तिवर्धक (Energy booster), कॅल्शियम युक्त (Calcium rich), उत्तम चवीचे (Great taste)',
      'Promotes smooth lactation, pelvic healing, and bone & joint strength',
      'Highly beneficial for young children’s growth and immune vitality',
      '100% Pure Homemade Recipe • FSSAI Certified: 21520269000423',
      'Handcrafted by Jyoti Enterprises, Hinganghat, Dist. Wardha (MS)'
    ],
    allergens: ['Almonds', 'Cashews', 'Walnuts', 'Pistachios', 'Milk / Ghee'],
    servingPrecautions:
      'Ideal for daily morning consumption with a warm glass of milk. Suitable throughout pregnancy, postpartum recovery, lactation, and as a nourishing tonic for growing kids.',
    nutritionalHighlights: [
      'Bioavailable calcium and minerals from gond and nuts accelerate maternal recovery',
      'Natural plant iron from dates and aliv supports blood volume restoration',
      'Healthy fats from desi cow ghee and walnuts support infant brain development via breastmilk',
      'Traditional warming herbs relieve postpartum aches and boost maternal metabolism'
    ],
    shape: 'Round Sphere',
    expectedFlavour: 'Rich, comforting, spiced, and buttery',
    expectedTexture: 'Crunchy, dense, and melt-in-the-mouth',
    suggestedPositioning: 'Maternity & Postpartum Care'
  }
];

export const CATEGORIES = [
  { id: 'all', label: 'All Sweets' },
  { id: 'laddu', label: 'Dry Fruit Laddus' },
  { id: 'roll-barfi', label: 'Khajur Rolls & Barfi' },
  { id: 'hamper', label: 'Festive Hampers' },
];

export const FAQS = [
  {
    question: 'What sweets does Jyotiraj offer?',
    answer:
      'We offer authentic, healthy Indian dry fruit sweets and traditional laddus handcrafted with pure desi cow ghee, dates, and jaggery—with zero white sugar. Our complete range includes: Premium Special Dry Fruits Laddu, Dry Fruits Khajur Roll, Kids Special Dry Fruit Laddu, Classic Dry Fruit Ladoo, Dry Fruits Khajur Barfi, Traditional Til Laddu, Crunchy Shengdana Laddu, and Megha Madhur Delivery Laddu (for pregnant & postpartum mothers).'
  },
  {
    question: 'Do you deliver dry fruit sweets to Wardha, Hinganghat, Nagpur, and Vidarbha?',
    answer:
      'Yes! Jyotiraj Global Company offers prompt home delivery of fresh dry fruit sweets, laddus, and khajur rolls across Wardha, Hinganghat, Nagpur, Amravati, Chandrapur, Yavatmal, Akola, and all surrounding areas of Vidarbha and Maharashtra. We provide local courier delivery as well as bulk dispatch for festive and family occasions.'
  },
  {
    question: 'Do you provide Pan-India delivery for online sweet orders?',
    answer:
      'Yes, we deliver across India covering Mumbai, Pune, Delhi NCR, Bengaluru, Hyderabad, Chennai, Kolkata, Ahmedabad, and over 19,000 pin codes. Sweets are packed in food-grade, airtight, tamper-proof packaging to ensure they arrive fresh and crunchy within 2 to 5 business days.'
  },
  {
    question: 'How do international customers or NRIs order sweets to USA, UK, or UAE?',
    answer:
      'International buyers, retail importers, and NRIs can easily order through our website quote request, Export Desk form, or direct WhatsApp. We export vacuum-sealed, FSSAI-compliant sweet packages to the United States, United Kingdom, United Arab Emirates (Dubai), Canada, Australia, and Singapore with phytosanitary and export clearance documentation.'
  },
  {
    question: 'Are Jyotiraj dry fruit laddus truly 100% sugar-free and diabetic-friendly?',
    answer:
      'Yes. Our signature dry fruit laddus and khajur rolls contain zero added white sugar, zero jaggery syrup, and zero artificial sweeteners. They are naturally sweetened exclusively with premium dates (Khajur), making them rich in natural dietary fiber, plant proteins, and heart-healthy fats from whole almonds, cashews, pistachios, and walnuts.'
  },
  {
    question: 'What ingredients do you use in your dry fruit sweets?',
    answer:
      'We use only 100% natural ingredients: premium whole nuts (almonds, cashews, pistachios, walnuts), sweet dates, dried figs, healthy seeds (pumpkin, sunflower, sesame, chia, flax), pure cow ghee, edible gum (gond), and fragrant green cardamom and nutmeg.'
  },
  {
    question: 'What pack sizes can I buy?',
    answer:
      'We offer retail consumer packs in 250g, 500g, and 1kg airtight food-safe containers. For weddings, corporate gifts, and wholesale export orders, we also offer custom gift packaging, festive decorative boxes, and bulk master cartons.'
  },
  {
    question: 'How should I store these sweets and how long do they stay fresh?',
    answer:
      'Store in a closed airtight container in a cool, dry place away from heat and direct sunlight. Because our sweets are roasted in pure cow ghee and bound with dates without water or chemical preservatives, they naturally maintain peak freshness for 3 to 4 months in airtight packaging.'
  },
  {
    question: 'Can I place bulk or wholesale orders for corporate gifting and weddings?',
    answer:
      'Yes! We regularly provide wholesale orders for corporate festive gifting (Diwali, New Year), wedding favors, sweet shops, and supermarket distributors across India and abroad with attractive volume pricing and custom corporate branding.'
  },
  {
    question: 'What is the heritage and background of Jyotiraj Global Company?',
    answer:
      'Founded in 1951 in Maharashtra, Jyotiraj Global Company operates as an authentic Gruh Udyog upholding generations-old royal recipes. We are dedicated to pure ingredients, zero adulteration, and traditional slow-roasting in pure cow ghee.'
  },
  {
    question: 'How can I place an order or request a quote?',
    answer:
      'You can select items into your Sweet Bag on our website and submit an instant quote request, reach out via WhatsApp at +91 7304314338, or fill out our wholesale and export forms for custom bulk quotes.'
  }
];
