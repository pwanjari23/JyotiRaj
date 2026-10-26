export interface PapadProduct {
  id: string;
  slug: string;
  name: string;
  marathiName: string;
  hindiName: string;
  subtitle: string;
  marathiSubtitle: string;
  hindiSubtitle?: string;
  category: 'kurdai' | 'vadi' | 'papad' | 'shevai';
  categoryLabel: string;
  image: string; // pure clean food photo
  photoImage: string;
  labelImage?: string; // packaging label from master sheet
  badge: string;
  rating: number;
  reviewCount: number;
  provisionalPrice: {
    '100g'?: number;
    '200g': number;
    '500g': number;
    '1kg'?: number;
  };
  overview: string;
  marathiOverview: string;
  hindiOverview: string;
  ingredients: string[];
  shelfLife: string;
  bestFor: string;
  fssaiNumber: string;
}

export const PAPAD_PRODUCTS: PapadProduct[] = [
  {
    id: 'papad-1',
    slug: 'gavhachi-kurdai',
    name: "Meghare's Gavhachi Kurdai",
    marathiName: 'मेघा मधुर गव्हाची कुरडई',
    hindiName: 'मेघा मधुर पारंपरिक गेहूं की कुरडई',
    subtitle: 'Fermented Wheat Sun-Dried Kurdai • Delicate, Airy & Crispy',
    marathiSubtitle: 'गव्हाचा अस्सल चिक काढून उन्हात वाळवलेली पांढरीशुभ्र कुरडई',
    hindiSubtitle: 'गेहूं के सत्व से बनी पारंपरिक कुरकुरी सफेद कुरडई',
    category: 'kurdai',
    categoryLabel: 'Fermented Wheat Kurdai',
    image: '/assets/papad/papad_gavhachi_kurdai.jpg',
    photoImage: '/assets/papad/papad_gavhachi_kurdai.jpg',
    labelImage: '/assets/papad/label_gavhachi_kurdai.jpg',
    badge: 'Vidarbha Specialty',
    rating: 5.0,
    reviewCount: 48,
    provisionalPrice: {
      '100g': 65,
      '200g': 130,
      '500g': 260,
      '1kg': 600,
    },
    overview:
      'A legendary Maharashtrian sun-dried delicacy made by extracting natural fermented wheat starch (चिक), slow-cooked into a silky dough and extruded into delicate white coils, then sun-dried. When deep-fried, it blossoms into an extraordinarily light, snow-white, crispy spiral.',
    marathiOverview:
      'उत्कृष्ट प्रतीचा गहू भिजवून, त्याचा अस्सल चिक काढून, शिजवून सोऱ्यातून पाडलेली आणि उन्हात वाळवलेली पारंपारिक कुरडई. तेलात तळल्यावर पांढरीशुभ्र आणि दुपटीने फुलते.',
    hindiOverview:
      'परंपरागत विधि से गेहूं को भिगोकर निकाला गया सत्व (चीक) से तैयार सफेद कुरडई। तलने पर बेहद हल्की, कुरकुरी और स्वादिष्ट बनती है।',
    ingredients: ['Premium Whole Wheat (Gahu Chik)', 'Rock Salt', 'Purified Water'],
    shelfLife: '8 Months from date of Packing',
    bestFor: 'Festive thalis, daily meals with dal-rice, and teatime crunch',
    fssaiNumber: '21520269000423'
  },
  {
    id: 'papad-2',
    slug: 'moong-vadi',
    name: "Meghare's Moong Dal Vadi",
    marathiName: 'मेघा मधुर मुंग वडी',
    hindiName: 'मेघा मधुर मूंग दाल वड़ी (मंगौड़ी)',
    subtitle: 'Sun-Dried Moong Nuggets • High Plant Protein & Aromatic Spices',
    marathiSubtitle: 'अस्सल मुगाच्या डाळीची खमंग घरगुती वडी (भाजीसाठी उत्तम)',
    hindiSubtitle: 'स्वादिष्ट मसालों से युक्त शुद्ध मूंग दाल की वड़ी',
    category: 'vadi',
    categoryLabel: 'Sun-Dried Moong Nuggets',
    image: '/assets/papad/papad_moong_vadi.jpg',
    photoImage: '/assets/papad/papad_moong_vadi.jpg',
    labelImage: '/assets/papad/label_moong_vadi.jpg',
    badge: 'High Plant Protein',
    rating: 4.9,
    reviewCount: 52,
    provisionalPrice: {
      '100g': 45,
      '200g': 90,
      '500g': 220,
      '1kg': 430,
    },
    overview:
      'Sun-dried wholesome golden dumplings prepared from stone-ground yellow moong dal whipped with asafoetida (hing), cumin, and gentle Indian spices. An essential pantry staple for crafting authentic Vidarbhi Vadi Rassa (curry), pulao, and nutritious daily sabzis.',
    marathiOverview:
      'चोथा नसलेली पिवळी मुगडाळ, हिंग, जिरे आणि मसाल्यांचा वापर करून स्वच्छ कापडावर उन्हात वाळवलेली खमंग वडी. झणझणीत वडीच्या रस्सा भाजीसाठी अत्यंत चवदार.',
    hindiOverview:
      'बारीक पिसी मूंग दाल और हींग-जीरे के तड़के से हाथ से तोड़कर सुखाई गई पारंपरिक मंगौड़ी। रसेदार सब्जी और पुलाव के लिए एकदम सही।',
    ingredients: ['Yellow Moong Dal', 'Hing (Asafoetida)', 'Cumin Seeds (Jeera)', 'Mild Spices', 'Salt'],
    shelfLife: '8 Months from date of Packing',
    bestFor: 'Vadi chi rassa bhaji (spicy curry), methi-vadi sabzi, and pulao',
    fssaiNumber: '21520269000423'
  },
  {
    id: 'papad-3',
    slug: 'gahu-papad',
    name: "Meghare's Gahu Papad",
    marathiName: 'मेघा मधुर गहू पापड',
    hindiName: 'मेघा मधुर पारंपरिक गेहूं पापड़',
    subtitle: 'Whole Wheat Sun-Dried Thin Papads • Ultra Light & Crisp',
    marathiSubtitle: 'उन्हात वाळवलेले अस्सल गव्हाचे पापड, चवीला अप्रतिम',
    hindiSubtitle: 'शुद्ध गेहूं के आटे और जीरे से निर्मित कुरकुरा पापड़',
    category: 'papad',
    categoryLabel: 'Traditional Wheat Papad',
    image: '/assets/papad/papad_gahu_papad.jpg',
    photoImage: '/assets/papad/papad_gahu_papad.jpg',
    labelImage: '/assets/papad/label_gahu_papad.jpg',
    badge: 'Sun-Dried Wheat',
    rating: 4.9,
    reviewCount: 41,
    provisionalPrice: {
      '100g': 65,
      '200g': 130,
      '500g': 325,
      '1kg': 600,
    },
    overview:
      'Classic homemade sun-dried papads made from whole wheat flour, cumin seeds, and traditional papad khar. Crispy, golden, and satisfying whether gently roasted over an open flame or deep-fried in peanut oil.',
    marathiOverview:
      'पारंपारिक पद्धतीने तयार केलेले, पातळ आणि खमंग गव्हाचे पापड. भाजून किंवा तळून दोन्ही प्रकारे जेवणाची चव दुप्पट करतात.',
    hindiOverview:
      'गेहूं के आटे और जीरे की सौंधी महक से बना पारंपरिक पापड़। दाल-चावल और हर भारतीय थाली का अनिवार्य साथी।',
    ingredients: ['Whole Wheat Flour', 'Cumin Seeds', 'Papad Khar', 'Rock Salt', 'Water'],
    shelfLife: '8 Months from date of Packing',
    bestFor: 'Daily lunch thali accompaniment, roasted teatime snack',
    fssaiNumber: '21520269000423'
  },
  {
    id: 'papad-4',
    slug: 'sabudana-papad',
    name: "Meghare's Sabudana Papad",
    marathiName: 'मेघा मधुर साबुदाना पापड',
    hindiName: 'मेघा मधुर साबूदाना पापड़ (व्रत विशेष)',
    subtitle: 'Upvas & Fasting Special • Pure Sago Pearls • Melt-in-Mouth Texture',
    marathiSubtitle: 'उपवासासाठी खास १००% शुद्ध साबुदाणा पापड',
    hindiSubtitle: 'सेंधा नमक और साबूदाना से बना फलाहारी कुरकुरा पापड़',
    category: 'papad',
    categoryLabel: 'Fasting / Upvas Special Papad',
    image: '/assets/papad/papad_sabudana_papad.jpg',
    photoImage: '/assets/papad/papad_sabudana_papad.jpg',
    labelImage: '/assets/papad/label_sabudana_papad.jpg',
    badge: '100% Upvas Special',
    rating: 5.0,
    reviewCount: 65,
    provisionalPrice: {
      '100g': 45,
      '200g': 90,
      '500g': 225,
      '1kg': 400,
    },
    overview:
      'Specially crafted for religious fasting (Ekadashi, Navratri, Shravan, and Mahashivratri). Made with prime-quality soaked tapioca pearls and pure Sendha Namak (rock salt). Expands into airy, translucent-white crisps that melt on your tongue.',
    marathiOverview:
      'एकादशी, श्रावण आणि नवरात्री उपवासासाठी खास बनवलेला साबुदाणा पापड. सैंधव मीठ वापरून बनवलेला, तळल्यावर तोंडात विरघळणारा कुरकुरीत पापड.',
    hindiOverview:
      'व्रत और त्योहारों के लिए विशेष रूप से तैयार साबूदाना पापड़। सेंधा नमक का उपयोग, तलने पर बेहद सफेद और क्रिस्पी बनता है।',
    ingredients: ['Selected Tapioca Sago Pearls', 'Sendha Namak (Rock Salt)', 'Purified Water'],
    shelfLife: '8 Months from date of Packing',
    bestFor: 'Ekadashi, Navratri, and all religious fasting days',
    fssaiNumber: '21520269000423'
  },
  {
    id: 'papad-5',
    slug: 'aloo-sabudana-papad',
    name: "Meghare's Aloo Sabudana Papad",
    marathiName: 'मेघा मधुर आलु साबुदाना पापड',
    hindiName: 'मेघा मधुर आलू साबूदाना पापड़',
    subtitle: 'Fresh Potatoes & Sago • Savory Upvas Crunch with Mild Green Chilli',
    marathiSubtitle: 'बटाटा आणि साबुदाण्याचा खमंग उपवास पापड',
    hindiSubtitle: 'उबले आलू और साबूदाने का स्वादिष्ट चटपटा पापड़',
    category: 'papad',
    categoryLabel: 'Potato & Sago Papad',
    image: '/assets/papad/papad_aloo_sabudana.jpg',
    photoImage: '/assets/papad/papad_aloo_sabudana.jpg',
    labelImage: '/assets/papad/label_aloo_sabudana_papad.jpg',
    badge: 'Upvas Favorite',
    rating: 4.9,
    reviewCount: 57,
    provisionalPrice: {
      '100g': 65,
      '200g': 125,
      '500g': 320,
      '1kg': 600,
    },
    overview:
      'A beloved festive combination of boiled mashed potatoes and translucent sabudana pearls, spiced gently with green chilli and Sendha Namak. Fried into a golden, savory, irresistibly crunchy teatime and fasting treat.',
    marathiOverview:
      'उकडलेले गावरान बटाटे, साबुदाणा आणि हिरव्या मिरचीचा ठेचा वापरून उन्हात वाळवलेला खमंग पापड. उपवासासाठी आणि चहासोबत अत्यंत चविष्ट.',
    hindiOverview:
      'ताजे आलू, साबूदाना और हरी मिर्च से बना चटपटा फलाहारी पापड़। चाय के साथ और व्रत में बेहद पसंद किया जाने वाला स्नैक।',
    ingredients: ['Fresh Mountain Potatoes', 'Sago Pearls', 'Sendha Namak', 'Green Chilli Flakes', 'Cumin (optional)'],
    shelfLife: '8 Months from date of Packing',
    bestFor: 'Fasting snacks, evening tea, and festive platters',
    fssaiNumber: '21520269000423'
  },
  {
    id: 'papad-6',
    slug: 'jwariche-dhapude',
    name: "Meghare's Jwariche Dhapude",
    marathiName: 'मेघा मधुर ज्वारीचे धापुडे',
    hindiName: 'मेघा मधुर ज्वार के धापुड़े (ज्वार पापड़)',
    subtitle: 'Gluten-Friendly White Sorghum Crackers • High Fiber & Rustic Crunch',
    marathiSubtitle: 'अस्सल गावरान ज्वारीचे पचायला हलके आणि खुसखुशीत धापुडे',
    hindiSubtitle: 'पौष्टिक सफेद ज्वार और तिल से बना पारंपरिक कुरकुरा पापड़',
    category: 'papad',
    categoryLabel: 'Sorghum Jowar Crackers',
    image: '/assets/papad/papad_jwariche_dhapude.jpg',
    photoImage: '/assets/papad/papad_jwariche_dhapude.jpg',
    labelImage: '/assets/papad/label_jwariche_dhapude.jpg',
    badge: 'Gluten-Friendly & High Fiber',
    rating: 4.9,
    reviewCount: 39,
    provisionalPrice: {
      '100g': 60,
      '200g': 120,
      '500g': 280,
      '1kg': 550,
    },
    overview:
      'A true rustic Maharashtrian heritage snack made from cooked whole jowar (sorghum) dough, studded with toasted sesame seeds and mild cumin. Incredibly light, naturally rich in dietary fiber, and delightfully crunchy when fried or roasted.',
    marathiOverview:
      'गावरान पांढरी ज्वारी शिजवून, तीळ आणि जिरे घालून पातळ थापलेले व उन्हात वाळवलेले पारंपरिक धापुडे. पचायला अतिशय हलके आणि चवदार.',
    hindiOverview:
      'सफेद ज्वार के आटे को पकाकर तिल और जीरे के साथ तैयार किए गए कुरकुरे धापुड़े। उच्च फाइबर और कम कैलोरी वाला पारंपरिक आहार।',
    ingredients: ['Whole White Jowar (Sorghum Flour)', 'White Sesame (Til)', 'Cumin Seeds', 'Papad Khar', 'Salt'],
    shelfLife: '8 Months from date of Packing',
    bestFor: 'Healthy evening snack, diabetic-friendly crunch, authentic rural taste',
    fssaiNumber: '21520269000423'
  },
  {
    id: 'papad-7',
    slug: 'gavhache-sargunde',
    name: "Meghare's Gavhache Sargunde",
    marathiName: 'मेघा मधुर गव्हाचे सरगुंडे',
    hindiName: 'मेघा मधुर गेहूं के सरगुंडे (हाथ से बनी सेंवई)',
    subtitle: 'Festive Hand-Crafted Sun-Dried Wheat Strands • Authentic Nag Panchami Special',
    marathiSubtitle: 'सणासुदीसाठी खास हाताने वळलेले गव्हाचे कुरकुरीत सरगुंडे',
    hindiSubtitle: 'नागपंचमी और त्योहारों के लिए हाथ से तैयार गेहूं के सरगुंडे',
    category: 'shevai',
    categoryLabel: 'Handcrafted Wheat Strands',
    image: '/assets/papad/papad_gavhache_sargunde.jpg',
    photoImage: '/assets/papad/papad_gavhache_sargunde.jpg',
    labelImage: '/assets/papad/label_gavhache_sargunde.jpg',
    badge: 'Festive Handcrafted',
    rating: 4.8,
    reviewCount: 34,
    provisionalPrice: {
      '100g': 65,
      '200g': 125,
      '500g': 320,
      '1kg': 600,
    },
    overview:
      'Artisanal hand-pulled whole wheat strands meticulously prepared for traditional Maharashtra festivals like Nag Panchami and Diwali. Can be boiled into sweet jaggery-milk kheer or pan-tossed with mustard and chillies for a savory breakfast.',
    marathiOverview:
      'नागपंचमी आणि सणांच्या पूजेसाठी खास गव्हाच्या पिठापासून हाताने वळलेले पारंपरिक सरगुंडे. दुधात उकळून गुळाची खीर किंवा खमंग उपमा बनवता येतो.',
    hindiOverview:
      'हाथ से बेले और धूप में सुखाए गए गेहूं के पारंपरिक सरगुंडे। मीठी खीर या नमकीन नाश्ते के रूप में अत्यंत स्वादिष्ट।',
    ingredients: ['Selected Lokwan Whole Wheat Flour', 'Purified Water', 'Pinch of Sea Salt'],
    shelfLife: '8 Months from date of Packing',
    bestFor: 'Nag Panchami, festive kheer, and traditional home ceremonies',
    fssaiNumber: '21520269000423'
  },
  {
    id: 'papad-8',
    slug: 'shevai',
    name: "Meghare's Homemade Shevai",
    marathiName: 'मेघा मधुर घरगुती शेवई',
    hindiName: 'मेघा मधुर शुद्ध गेहूं की बारीक सेंवई',
    subtitle: '100% Whole Wheat Fine Sun-Dried Vermicelli • Zero Maida • Rich in Nutrition',
    marathiSubtitle: 'उन्हात वाळवलेली अस्सल गव्हाची बारीक लांब शेवई (बिना मैदा)',
    hindiSubtitle: 'बिना मैदा, 100% साबुत गेहूं से बनी पारंपरिक बारीक सेंवई',
    category: 'shevai',
    categoryLabel: '100% Wheat Fine Shevai',
    image: '/assets/papad/papad_shevai.jpg',
    photoImage: '/assets/papad/papad_shevai.jpg',
    labelImage: '/assets/papad/label_shevai.jpg',
    badge: '100% Whole Wheat • Zero Maida',
    rating: 5.0,
    reviewCount: 46,
    provisionalPrice: {
      '200g': 40,
      '500g': 100,
      '1kg': 180,
    },
    overview:
      'Pure whole wheat fine vermicelli extruded and sun-dried under direct Vidarbha sun without any industrial maida or chemical preservatives. Cooks in minutes into royal Cardamom-infused Shevaya Kheer or savory breakfast Upma.',
    marathiOverview:
      'मैदा नसलेली, १००% शुद्ध गव्हाची लांब आणि बारीक उन्हात वाळवलेली शेवई. सणासुदीच्या खिरीसाठी, पाहुणचारासाठी आणि नाश्त्यासाठी सर्वोत्तम.',
    hindiOverview:
      'शुद्ध गेहूं के सत्व से बनी बारीक सेंवई। इलायची-दूध की खीर या चटपटे सेंवई उपमा के लिए शुद्ध और पौष्टिक विकल्प।',
    ingredients: ['100% Whole Wheat Flour (Gahu)', 'Purified Water', 'Salt'],
    shelfLife: '8 Months from date of Packing',
    bestFor: 'Shevaya chi kheer, festive sweet dishes, and morning shevai upma',
    fssaiNumber: '21520269000423'
  }
];
