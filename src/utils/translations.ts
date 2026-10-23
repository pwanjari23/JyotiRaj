import { Language, Product } from '../types';
import { PapadProduct } from '../data/papadProducts';

export const TRANSLATIONS: Record<Language, Record<string, string>> = {
  en: {
    // Nav
    nav_home: 'Home',
    nav_shop: 'Shop Sweets',
    nav_about: 'About Us',
    nav_wholesale: 'Wholesale',
    nav_export: 'Global Export',
    nav_contact: 'Contact',

    // Announcements
    ann_taste: 'Authentic Homemade Taste',
    ann_delivery: 'Free Delivery Across India',
    ann_global: 'Worldwide Shipping Available',
    ann_ingredients: '100% Pure Nuts & Ghee',
    ann_preservatives: 'Zero Added White Sugar',

    // Hero
    hero_badge: 'Handcrafted Dry Fruit Sweets • Pure Maharashtra Tradition',
    hero_title_1: 'Pure Dry Fruits,',
    hero_title_2: 'Royal Nutrition,',
    hero_title_3: 'Timeless Sweetness.',
    hero_subtitle: 'Pure homemade taste made with rich dry fruits, natural dates, and 100% pure desi cow ghee. No white sugar, no preservatives—delivered fresh to your doorstep worldwide.',
    hero_cta_shop: 'Explore Collection',
    hero_cta_whatsapp: 'Order on WhatsApp',
    hero_stats_varieties: 'Signature Sweets',
    hero_stats_sugar: 'Zero White Sugar',
    hero_stats_export: 'Worldwide Delivery',

    // Categories
    cat_all: 'All Sweets',
    cat_laddu: 'Dry Fruit Laddus',
    cat_roll_barfi: 'Khajur Rolls & Barfi',
    cat_hamper: 'Festive Hampers',

    // Collection
    col_badge: 'Handcrafted Delights',
    col_title: 'Our Signature Collection',
    col_subtitle: 'Enjoy our delicious dry fruit sweets made with crunchy nuts, pure dates, and healthy seeds. Made fresh in small batches with zero added sugar or chemicals.',
    col_pack_select: 'Select Pack Size:',
    col_btn_add: 'Add to Cart',
    col_btn_added: 'Added to Cart ✓',
    col_btn_whatsapp: 'Buy on WhatsApp',

    // Product Detail
    pdp_back: 'Back to All Sweets',
    pdp_rating: '5.0 Rating • 100% Pure & Fresh',
    pdp_pack_size: 'Select Pack Weight:',
    pdp_quantity: 'Quantity:',
    pdp_add_to_cart: 'Add to Cart',
    pdp_order_whatsapp: 'Order on WhatsApp',
    pdp_why_love: "Why You'll Love This Sweet",
    pdp_ingredients: 'Pure Ingredients',
    pdp_ingredients_note: '* Made with 100% natural nuts, dry fruits, and traditional spices. No artificial additives or preservatives.',
    pdp_allergen_title: 'Allergen Notice:',
    pdp_allergen_body: 'Contains natural tree nuts (almonds, cashews, pistachios, walnuts) and wholesome seeds. 100% Vegetarian.',
    pdp_sensory_title: 'Taste & Freshness',
    pdp_taste: 'Taste',
    pdp_texture: 'Texture',
    pdp_aroma: 'Aroma',
    pdp_appearance: 'Appearance',
    pdp_nutritional_title: 'Nutrition & Storage Guide',
    pdp_nutritional_note: 'Naturally rich in wholesome energy, plant protein, healthy fats, and dietary fiber from pure nuts and dates.',
    pdp_storage_title: 'Storage Guidelines:',
    pdp_storage_body: 'Keep in an airtight container in a cool, dry place away from heat and direct sunlight. To maintain natural crunch and freshness, keep away from water or moisture.',
    pdp_related_title: 'You May Also Like',

    // Comparison
    comp_badge: 'Transparent Quality',
    comp_title: 'Compare Our Signature Sweets',
    comp_subtitle: 'Easily compare ingredients, natural sweetness, texture, and best occasions for each of our sweets.',
    comp_view_details: 'View Details',

    // FAQ
    faq_badge: 'Have Questions?',
    faq_title: 'Frequently Asked Questions',
    faq_subtitle: 'Everything you need to know about our natural ingredients, ordering, packaging, and worldwide delivery.',

    // Common
    quick_view: 'Quick View',
    provisional_note: 'Special Introductory Price',
    cart_title: 'Your Shopping Cart',
    cart_empty: 'Your cart is currently empty.',
    cart_subtotal: 'Subtotal',
    cart_shipping: 'Shipping (Pan India)',
    cart_free: 'FREE',
    cart_total: 'Total Amount',
    cart_checkout_whatsapp: 'Checkout via WhatsApp',
  },

  mr: {
    // Nav
    nav_home: 'मुख्यपृष्ठ',
    nav_shop: 'उत्पादने',
    nav_about: 'आमच्याबद्दल',
    nav_wholesale: 'घाऊक खरेदी',
    nav_export: 'आंतरराष्ट्रीय निर्यात',
    nav_contact: 'संपर्क',

    // Announcements
    ann_taste: 'अस्सल घरगुती चव',
    ann_delivery: 'संपूर्ण भारतात डिलिव्हरी',
    ann_global: 'आंतरराष्ट्रीय शिपिंग',
    ann_ingredients: 'उत्कृष्ट सुकामेवा',
    ann_preservatives: 'कोणतेही प्रिझर्व्हेटिव्ह नाही',

    // Hero
    hero_badge: 'पारंपारिक सुकामेवा मिठाई • अस्सल महाराष्ट्रीयन वारसा',
    hero_title_1: 'अस्सल सुकामेवा,',
    hero_title_2: 'शाही पोषण,',
    hero_title_3: 'नैसर्गिक गोडवा.',
    hero_subtitle: 'साखरेचा वापर न करता शुद्ध खजूर, उत्कृष्ट बदाम, काजू, पिस्ता आणि पौष्टिक बियांचे पारंपारिक लाडू आणि खजूर बर्फी. घर आणि सणांसाठी खास फूड-ग्रेड पॅकिंग.',
    hero_cta_shop: 'उत्पादने पहा',
    hero_cta_whatsapp: 'व्हॉट्सॲपवर ऑर्डर करा',
    hero_stats_varieties: 'शाही प्रकार',
    hero_stats_sugar: 'साखरविरहित गोडवा',
    hero_stats_export: 'जागतिक डिलिव्हरी',

    // Categories
    cat_all: 'सर्व मिठाई',
    cat_laddu: 'ड्राय फ्रुट लाडू',
    cat_roll_barfi: 'खजूर रोल्स आणि बर्फी',
    cat_hamper: 'गिफ्ट हॅम्पर्स',

    // Collection
    col_badge: 'पारंपरिक मेजवानी',
    col_title: 'आमची खास स्वाक्षरी उत्पादने',
    col_subtitle: 'शुद्ध खजूर, भरपूर सुकामेवा आणि नैसर्गिक घटकांनी बनवलेले आमचे पारंपरिक लाडू आणि खजूर बर्फीचा आनंद घ्या.',
    col_pack_select: 'वजन निवडा:',
    col_btn_add: 'कार्टमध्ये जोडा',
    col_btn_added: 'कार्टमध्ये जोडले ✓',
    col_btn_whatsapp: 'व्हॉट्सॲपवर खरेदी करा',

    // Product Detail
    pdp_back: 'मागे सर्व उत्पादनांकडे',
    pdp_rating: '५.० रेटिंग (प्रमाणित गुणवत्ता)',
    pdp_pack_size: 'पॅक वजन निवडा:',
    pdp_quantity: 'नग (संख्या):',
    pdp_add_to_cart: 'कार्टमध्ये जोडा',
    pdp_order_whatsapp: 'व्हॉट्सॲपवर ऑर्डर करा',
    pdp_why_love: 'तुम्हाला ही मिठाई का आवडेल',
    pdp_ingredients: 'घटकांची रचना (साहित्य)',
    pdp_ingredients_note: '* पारंपारिक पाककृती आणि घटकांवर आधारित प्रस्तावित घोषणा. प्रमाणित प्रयोगशाळा चाचणीनुसार अंतिम पुष्टी.',
    pdp_allergen_title: 'ॲलर्जी सूचना:',
    pdp_allergen_body: 'विविध सुकामेवा व बिया हाताळणाऱ्या यंत्रसामग्रीवर उत्पादित.',
    pdp_sensory_title: 'चव आणि वैशिष्ट्ये',
    pdp_taste: 'चव',
    pdp_texture: 'पोत (टेक्सचर)',
    pdp_aroma: 'सुगंध',
    pdp_appearance: 'स्वरूप',
    pdp_nutritional_title: 'पोषण मूल्य आणि साठवण',
    pdp_nutritional_note: 'FSSAI आणि आंतरराष्ट्रीय मानकांनुसार प्रमाणित श्रेणी. अंतिम चाचणी अहवाल प्रक्रियेत आहे.',
    pdp_storage_title: 'साठवण मार्गदर्शक:',
    pdp_storage_body: 'हवाबंद डब्यात, थेट सूर्यप्रकाश आणि उष्णतेपासून दूर कोरड्या जागी ठेवा. कुरकुरीतपणा टिकवण्यासाठी ओलाव्यापासून दूर ठेवा.',
    pdp_related_title: 'तुम्हाला हे देखील आवडू शकते',

    // Comparison
    comp_badge: 'पारदर्शक गुणवत्ता',
    comp_title: 'आमच्या अस्सल प्रकारांची तुलना करा',
    comp_subtitle: 'आमच्या सर्व स्वाक्षरी उत्पादनांमधील घटक, गोडव्याचा स्रोत, पोत आणि प्रसंगांची सविस्तर तुलना करा.',
    comp_view_details: 'तपशील पहा',

    // FAQ
    faq_badge: 'काही शंका आहेत?',
    faq_title: 'नेहमी विचारले जाणारे प्रश्न',
    faq_subtitle: 'आमची सामग्री, ऑर्डर प्रक्रिया, पॅकिंग आणि आंतरराष्ट्रीय निर्यातीबद्दल सर्व माहिती जाणून घ्या.',

    // Common
    quick_view: 'द्रुत दृष्टीक्षेप',
    provisional_note: 'अंदाजे बॅच किंमत',
    cart_title: 'तुमची शॉपिंग कार्ट',
    cart_empty: 'तुमची कार्ट सध्या रिकामी आहे.',
    cart_subtotal: 'एकूण रक्कम',
    cart_shipping: 'डिलिव्हरी शुल्क (संपूर्ण भारत)',
    cart_free: 'मोफत',
    cart_total: 'अंदाजे एकूण',
    cart_checkout_whatsapp: 'व्हॉट्सॲपवर खरेदी पूर्ण करा',
  },

  hi: {
    // Nav
    nav_home: 'होम',
    nav_shop: 'शॉप',
    nav_about: 'हमारे बारे में',
    nav_wholesale: 'थोक व्यापार',
    nav_export: 'अंतर्राष्ट्रीय निर्यात',
    nav_contact: 'संपर्क',

    // Announcements
    ann_taste: 'असली घर का स्वाद',
    ann_delivery: 'पूरे भारत में डिलीवरी',
    ann_global: 'अंतर्राष्ट्रीय शिपिंग',
    ann_ingredients: 'प्रीमियम मेवे और सामग्री',
    ann_preservatives: 'कोई प्रिजर्वेटिव नहीं',

    // Hero
    hero_badge: 'पारंपरिक ड्राई फ्रूट मिठाई • महाराष्ट्र की अनूठी धरोहर',
    hero_title_1: 'शुद्ध ड्राई फ्रूट्स,',
    hero_title_2: 'शाही पोषण,',
    hero_title_3: 'कुदरती मिठास.',
    hero_subtitle: 'बिना चीनी के शुद्ध खजूर, बेहतरीन बादाम, काजू, पिस्ता और पौष्टिक बीजों के पारंपरिक लड्डू और खजूर बर्फी। परिवार और उत्सवों के लिए खास फूड-ग्रेड पैकिंग।',
    hero_cta_shop: 'उत्पाद देखें',
    hero_cta_whatsapp: 'व्हाट्सएप पर ऑर्डर करें',
    hero_stats_varieties: 'शाही प्रकार',
    hero_stats_sugar: 'बिना रिफाइंड चीनी',
    hero_stats_export: 'वैश्विक डिलीवरी',

    // Categories
    cat_all: 'सभी मिठाइयाँ',
    cat_laddu: 'ड्राई फ्रूट लड्डू',
    cat_roll_barfi: 'खजूर रोल्स और बर्फी',
    cat_hamper: 'गिफ्ट हैंपर्स',

    // Collection
    col_badge: 'पारंपरिक मिठास',
    col_title: 'हमारा सिग्नेचर कलेक्शन',
    col_subtitle: 'शुद्ध खजूर, भरपूर सूखे मेवे और प्राकृतिक सामग्री से बने हमारे पारंपरिक लड्डू और खजूर बर्फी का आनंद लें।',
    col_pack_select: 'वजन चुनें:',
    col_btn_add: 'कार्ट में जोड़ें',
    col_btn_added: 'कार्ट में जोड़ा गया ✓',
    col_btn_whatsapp: 'व्हाट्सएप पर खरीदें',

    // Product Detail
    pdp_back: 'वापस सभी उत्पादों पर',
    pdp_rating: '५.० रेटिंग (प्रमाणित गुणवत्ता)',
    pdp_pack_size: 'पैक वजन चुनें:',
    pdp_quantity: 'मात्रा:',
    pdp_add_to_cart: 'कार्ट में जोड़ें',
    pdp_order_whatsapp: 'व्हाट्सएप पर ऑर्डर करें',
    pdp_why_love: 'आपको यह मिठाई क्यों पसंद आएगी',
    pdp_ingredients: 'सामग्री संरचना',
    pdp_ingredients_note: '* पारंपरिक पाक विधि और दृश्य प्रोफ़ाइल पर आधारित प्रस्तावित सामग्री। प्रमाणित लैब परीक्षण से अंतिम पुष्टि।',
    pdp_allergen_title: 'एलर्जी सूचना:',
    pdp_allergen_body: 'विविध मेवे और बीज संसाधित करने वाले उपकरणों पर निर्मित।',
    pdp_sensory_title: 'स्वाद और सुगंध प्रोफ़ाइल',
    pdp_taste: 'स्वाद',
    pdp_texture: 'बनावट (टेक्सचर)',
    pdp_aroma: 'सुगंध',
    pdp_appearance: 'दिखावट',
    pdp_nutritional_title: 'पोषण मूल्य और भंडारण',
    pdp_nutritional_note: 'FSSAI और अंतर्राष्ट्रीय मानकों के अनुसार पोषक तत्व श्रेणियाँ। परीक्षण डेटा प्रक्रियाधीन है।',
    pdp_storage_title: 'भंडारण निर्देश:',
    pdp_storage_body: 'हवाबंद डिब्बे में, सीधी धूप और नमी से दूर ठंडी जगह पर रखें। ताजगी और कुरकुरेपन के लिए नमी से बचाएं।',
    pdp_related_title: 'आपको यह भी पसंद आ सकता है',

    // Comparison
    comp_badge: 'पारदर्शी गुणवत्ता',
    comp_title: 'हमारे असली प्रकारों की तुलना करें',
    comp_subtitle: 'हमारे सभी सिग्नेचर उत्पादों की सामग्री, मिठास स्रोत, बनावट और अवसरों की तुलना करें।',
    comp_view_details: 'विवरण देखें',

    // FAQ
    faq_badge: 'कोई प्रश्न है?',
    faq_title: 'अक्सर पूछे जाने वाले सवाल',
    faq_subtitle: 'हमारी सामग्री, ऑर्डर प्रक्रिया, पैकेजिंग और अंतर्राष्ट्रीय निर्यात से जुड़े सभी सवालों के जवाब।',

    // Common
    quick_view: 'त्वरित विवरण',
    provisional_note: 'अनुमानित बैच मूल्य',
    cart_title: 'आपकी शॉपिंग कार्ट',
    cart_empty: 'आपकी कार्ट अभी खाली है।',
    cart_subtotal: 'कुल राशि',
    cart_shipping: 'शिपिंग (पूरे भारत में)',
    cart_free: 'मुफ़्त',
    cart_total: 'अनुमानित कुल',
    cart_checkout_whatsapp: 'व्हाट्सएप पर चेकआउट करें',
  },
};

export function t(key: string, language: Language = 'en'): string {
  const langDict = TRANSLATIONS[language] || TRANSLATIONS.en;
  return langDict[key] || TRANSLATIONS.en[key] || key;
}

export function getProductName(product: Product, language: Language = 'en'): string {
  if (language === 'mr') return product.marathiName || product.name;
  if (language === 'hi') return product.hindiName || product.name;
  return product.name;
}

export function getProductSubtitle(product: Product, language: Language = 'en'): string {
  if (language === 'mr') return product.marathiSubtitle || product.subtitle;
  if (language === 'hi') return product.hindiSubtitle || product.subtitle;
  return product.subtitle;
}

export function getProductOverview(product: Product, language: Language = 'en'): string {
  if (language === 'mr') return product.marathiOverview || product.overview;
  if (language === 'hi') return product.hindiOverview || product.overview;
  return product.overview;
}

export function getPapadName(product: PapadProduct, language: Language = 'en'): string {
  if (language === 'mr') return product.marathiName || product.name;
  if (language === 'hi') return product.hindiName || product.name;
  return product.name;
}

export function getPapadSubtitle(product: PapadProduct, language: Language = 'en'): string {
  if (language === 'mr') return product.marathiSubtitle || product.subtitle;
  if (language === 'hi') return product.hindiSubtitle || product.subtitle;
  return product.subtitle;
}

export function getPapadOverview(product: PapadProduct, language: Language = 'en'): string {
  if (language === 'mr') return product.marathiOverview || product.overview;
  if (language === 'hi') return product.hindiOverview || product.overview;
  return product.overview;
}
