import type { Metadata } from 'next';
import { Playfair_Display, Lato, Mukta } from 'next/font/google';
import '../index.css';
import { PRODUCTS, FAQS } from '@/data/products';
import { CONTACT_INFO } from '@/data/contactInfo';

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-heading',
  weight: ['400', '500', '600', '700', '800', '900'],
  display: 'swap',
});

const lato = Lato({
  subsets: ['latin'],
  variable: '--font-body',
  weight: ['300', '400', '700', '900'],
  display: 'swap',
});

const mukta = Mukta({
  subsets: ['latin', 'devanagari'],
  variable: '--font-marathi',
  weight: ['400', '500', '600', '700', '800'],
  display: 'swap',
});

// High-intent Search & Local SEO Metadata
export const metadata: Metadata = {
  metadataBase: new URL('https://www.jyotirajglobal.com'),
  title: {
    default: 'Jyotiraj Global Company | Authentic Dry Fruit Sweets & Laddus | Gruh Udyog Maharashtra',
    template: '%s | Jyotiraj Global Company',
  },
  description:
    'Handcrafted traditional Indian dry fruit laddus, sugar-free khajur rolls & dry fruit barfi since 1951. Made with 100% pure cow ghee, sweet dates & whole crunchy nuts. Fresh delivery in Wardha, Hinganghat, Nagpur, Vidarbha, Pune, Mumbai & Pan-India. Wholesale & worldwide export available.',
  keywords: [
    // === TIER 1: HYPER-LOCAL (Wardha, Hinganghat, Nagpur & Sevagram) ===
    'dry fruit sweets wardha',
    'dry fruit sweets Hinganghat',
    'dry fruit sweets Nagpur',
    'dry fruit laddu Wardha',
    'dry fruit laddu Hinganghat',
    'dry fruit laddu Nagpur',
    'khajur roll Wardha',
    'khajur roll Hinganghat',
    'khajur roll Nagpur',
    'dry fruit barfi Wardha',
    'dry fruit barfi Hinganghat',
    'dry fruit barfi Nagpur',
    'best sweets in Wardha',
    'sweets shop in Hinganghat',
    'mithai shop Nagpur',
    'healthy sweets Wardha',
    'healthy sweets Hinganghat',
    'healthy sweets Nagpur',
    'sugar free sweets Wardha',
    'sugar free sweets Hinganghat',
    'sugar free sweets Nagpur',
    'dry fruit ladoo delivery Wardha',
    'dry fruit ladoo delivery Hinganghat',
    'dry fruit ladoo delivery Nagpur',
    'sweet shop Sevagram Wardha',

    // === TIER 2: REGIONAL (Vidarbha & Maharashtra) ===
    'dry fruit sweets Vidarbha',
    'dry fruit laddu Vidarbha',
    'dry fruit sweets Amravati',
    'dry fruit sweets Chandrapur',
    'dry fruit sweets Yavatmal',
    'dry fruit sweets Akola',
    'dry fruit sweets Gondia',
    'dry fruit sweets Bhandara',
    'dry fruit sweets Sevagram',
    'dry fruit laddu Amravati',
    'dry fruit laddu Chandrapur',
    'dry fruit laddu Yavatmal',
    'dry fruit sweets Pune',
    'dry fruit laddu Mumbai',
    'dry fruit ladoo Thane',
    'Nashik authentic sweets',
    'authentic Indian sweets Maharashtra',
    'Gruh Udyog sweets Maharashtra',
    'homemade sweets Vidarbha',
    'traditional mithai Maharashtra',
    'healthy sweets delivery Pune',
    'dry fruit laddus delivery Mumbai',

    // === TIER 3: NATIONAL (Pan-India Online Delivery & Metros) ===
    'buy dry fruit sweets online India',
    'dry fruit laddu online delivery India',
    'Pan India sweets online delivery',
    'sugar free Indian sweets online delivery',
    'pure cow ghee sweets online India',
    'dry fruit sweets Delhi NCR',
    'dry fruit sweets Bangalore Bengaluru',
    'dry fruit sweets Hyderabad',
    'dry fruit sweets Chennai',
    'dry fruit sweets Kolkata',
    'dry fruit sweets Ahmedabad',
    'Diwali corporate sweet hampers India',
    'wedding sweets bulk orders India',
    'traditional Gruh Udyog sweets India',
    'premium dry fruit gift boxes India',

    // === TIER 4: INTERNATIONAL (Export to USA, UK, UAE, Canada, Australia) ===
    'Indian sweets exporter to USA UK UAE',
    'Indian sweets export to USA',
    'Indian sweets export to UK',
    'Indian sweets export to UAE Dubai',
    'dry fruit laddu delivery to USA Canada UK',
    'traditional Indian sweets international export',
    'authentic NRI Indian sweets delivery worldwide',
    'FSSAI compliant sweets exporter',
    'APEDA certified Indian sweets exporter',
    'wholesale dry fruit sweets international shipping',
    
    // === PRODUCT & HEALTH INTENT ===
    'dry fruit laddu',
    'dry fruit ladoo',
    'sugar free dry fruit laddu',
    'khajur roll',
    'dates dry fruit roll without sugar',
    'dry fruit barfi',
    'pure cow ghee laddu',
    'healthy Indian sweets without white sugar',
    'natural dates sweets',
    'gond dry fruit ladoo',
    'kids dry fruit laddu',
    'protein rich Indian sweets',
    'postpartum energy ladoo',
    'healthy sweets for diabetics India',
    'immunity booster sweets',
    '11 ingredients dry fruit laddu',
    
    // === COMMERCIAL, B2B & WHOLESALE INTENT ===
    'wholesale dry fruit sweets manufacturer Vidarbha',
    'corporate festive sweet hampers Nagpur',
    'Diwali corporate sweet gifting Nagpur',
    'wedding sweets bulk orders Wardha',
    'bulk dry fruit laddus supplier Maharashtra',
    'OEM private label dry fruit sweets India',
    
    // === NATIVE LANGUAGE SEARCH TERMS (Marathi & Hindi) ===
    'सुकामेवा लाडू वर्धा',
    'सुकामेवा लाडू हिंगणघाट',
    'सुकामेवा लाडू नागपूर',
    'ड्राय फ्रूट मिठाई वर्धा',
    'ड्राय फ्रूट मिठाई हिंगणघाट',
    'ड्राय फ्रूट मिठाई नागपूर',
    'पारंपारिक मिठाई विदर्भ',
    'गृह उद्योग वर्धा',
    'गृह उद्योग हिंगणघाट',
    'सुकामेवा लाडू',
    'खजूर रोल',
    'ड्राय फ्रूट बर्फी',
    'पारंपारिक मिठाई महाराष्ट्र',
    'गृह उद्योग लाडू',
    'ड्राई फ्रूट्स लड्डू ऑनलाइन',
    'बिना चीनी की मिठाई',
    'शुद्ध देसी घी के लड्डू'
  ],
  authors: [{ name: 'Jyotiraj Global Company – Gruh Udyog' }],
  creator: 'Jyotiraj Global Company',
  publisher: 'Jyotiraj Global Company',
  category: 'Food & Beverage',
  applicationName: 'Jyotiraj Sweets',
  alternates: {
    canonical: 'https://www.jyotirajglobal.com',
    languages: {
      'en-IN': 'https://www.jyotirajglobal.com',
      'mr-IN': 'https://www.jyotirajglobal.com?lang=mr',
      'hi-IN': 'https://www.jyotirajglobal.com?lang=hi',
    },
  },
  openGraph: {
    title: 'Jyotiraj Global Company – Gruh Udyog | Authentic Traditional Sweets',
    description:
      'A Taste of Royal Tradition since 1951. Handcrafted dry fruit laddus, khajur rolls, and barfi made with 100% pure cow ghee, sweet dates, and whole nuts with zero refined sugar. Delivered fresh across India & worldwide.',
    url: 'https://www.jyotirajglobal.com',
    siteName: 'Jyotiraj Global Company',
    locale: 'en_IN',
    alternateLocale: ['mr_IN', 'hi_IN'],
    type: 'website',
    images: [
      {
        url: '/assets/hero_showcase.jpg',
        width: 1200,
        height: 630,
        alt: 'Jyotiraj Royal Traditional Indian Dry Fruit Sweets & Laddus',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Jyotiraj Global Company | Authentic Dry Fruit Sweets & Laddus',
    description:
      'Handcrafted Indian dry fruit sweets made with 100% pure cow ghee and dates. Zero white sugar. Pan-India delivery & global export.',
    images: ['/assets/hero_showcase.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/assets/logo.jpg',
    apple: '/assets/logo.jpg',
  },
};

// Rich Structured Data (JSON-LD) for LocalBusiness, Products, and FAQ Rich Snippets
const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    // 1. Local Business / Food Establishment Schema
    {
      '@type': ['Organization', 'LocalBusiness', 'FoodEstablishment', 'Store'],
      '@id': 'https://www.jyotirajglobal.com/#organization',
      name: 'Jyotiraj Global Company – Gruh Udyog',
      alternateName: [
        'Jyotiraj Sweets',
        'ज्योतीराज गृह उद्योग',
        'ज्योतिराज ग्लोबल कंपनी',
        'Jyotiraj Traditional Sweets'
      ],
      foundingDate: '1951',
      slogan: 'A Taste of Royal Tradition since 1951 – Handcrafted with Pure Cow Ghee & Dates',
      knowsAbout: [
        'Traditional Indian Sweets',
        'Dry Fruit Laddu',
        'Sugar-Free Sweets',
        'Dates Khajur Roll',
        'Dry Fruit Barfi',
        'Pure Cow Ghee Mithai',
        'Gruh Udyog Maharashtra',
        'Ayurvedic Energy Sweets',
        'Diabetic-Friendly Confections',
        'Corporate Festive Sweet Gifting',
        'FSSAI Compliant Sweets Export'
      ],
      url: 'https://www.jyotirajglobal.com',
      logo: 'https://www.jyotirajglobal.com/assets/logo.jpg',
      image: 'https://www.jyotirajglobal.com/assets/hero_showcase.jpg',
      description:
        'Authentic handcrafted traditional Indian dry fruit laddus, khajur rolls, and dry fruit barfi since 1951. Made with 100% pure desi cow ghee, dates, and crunchy nuts with zero white sugar.',
      telephone: CONTACT_INFO.phoneRaw,
      email: CONTACT_INFO.email,
      priceRange: '₹₹',
      servesCuisine: 'Traditional Indian Sweets, Dry Fruit Mithai, Healthy Sweets',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Jyotiraj Gruh Udyog',
        addressLocality: 'Pune',
        addressRegion: 'Maharashtra',
        postalCode: '411001',
        addressCountry: 'IN',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: 18.5204,
        longitude: 73.8567,
      },
      openingHoursSpecification: [
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
          opens: '09:00',
          closes: '21:00',
        },
      ],
      paymentAccepted: ['Cash on Delivery', 'UPI', 'Bank Transfer', 'Net Banking'],
      currenciesAccepted: 'INR, USD, EUR, GBP, AED',
      areaServed: [
        // Local (Wardha & Vidarbha hubs)
        { '@type': 'City', name: 'Wardha' },
        { '@type': 'City', name: 'Hinganghat' },
        { '@type': 'City', name: 'Nagpur' },
        { '@type': 'City', name: 'Sevagram' },
        { '@type': 'City', name: 'Amravati' },
        { '@type': 'City', name: 'Chandrapur' },
        { '@type': 'City', name: 'Yavatmal' },
        { '@type': 'City', name: 'Akola' },
        { '@type': 'City', name: 'Gondia' },
        { '@type': 'City', name: 'Bhandara' },
        // Regional (Maharashtra)
        { '@type': 'City', name: 'Pune' },
        { '@type': 'City', name: 'Mumbai' },
        { '@type': 'City', name: 'Nashik' },
        { '@type': 'City', name: 'Thane' },
        { '@type': 'City', name: 'Navi Mumbai' },
        { '@type': 'City', name: 'Kolhapur' },
        { '@type': 'City', name: 'Chhatrapati Sambhajinagar' },
        { '@type': 'AdministrativeArea', name: 'Vidarbha' },
        { '@type': 'AdministrativeArea', name: 'Maharashtra' },
        // National (Pan-India & Major Metros)
        { '@type': 'City', name: 'Delhi' },
        { '@type': 'City', name: 'Bengaluru' },
        { '@type': 'City', name: 'Hyderabad' },
        { '@type': 'City', name: 'Chennai' },
        { '@type': 'City', name: 'Kolkata' },
        { '@type': 'City', name: 'Ahmedabad' },
        { '@type': 'Country', name: 'India' },
        // International Export Markets
        { '@type': 'Country', name: 'United States' },
        { '@type': 'Country', name: 'United Kingdom' },
        { '@type': 'Country', name: 'United Arab Emirates' },
        { '@type': 'Country', name: 'Canada' },
        { '@type': 'Country', name: 'Australia' },
        { '@type': 'Country', name: 'Singapore' },
      ],
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Signature Indian Dry Fruit Sweets & Laddus Collection',
        itemListElement: [
          { '@type': 'Offer', itemOffered: { '@type': 'Product', name: 'Premium Special Dry Fruits Laddu' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Product', name: 'Dry Fruits Khajur Roll' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Product', name: 'Kids Special Dry Fruit Laddu' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Product', name: 'Classic Dry Fruit Ladoo' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Product', name: 'Dry Fruits Khajur Barfi' } }
        ]
      },
      sameAs: [
        CONTACT_INFO.instagram.url,
        CONTACT_INFO.facebook.url,
        CONTACT_INFO.linkedin.url,
        CONTACT_INFO.youtube.url,
      ],
    },

    // 2. Product Catalog ItemList Schema
    {
      '@type': 'ItemList',
      name: 'Signature Indian Dry Fruit Sweets Collection',
      description: 'Handcrafted dry fruit laddus, khajur rolls, and barfi sweetened purely with dates and pure cow ghee.',
      itemListElement: PRODUCTS.map((product, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        item: {
          '@type': 'Product',
          name: product.name,
          description: product.overview,
          image: `https://www.jyotirajglobal.com${product.image}`,
          sku: product.id,
          brand: {
            '@type': 'Brand',
            name: 'Jyotiraj Global Company',
          },
          offers: {
            '@type': 'Offer',
            priceCurrency: 'INR',
            price: product.provisionalPrice['500g'],
            availability: 'https://schema.org/InStock',
            seller: {
              '@type': 'Organization',
              name: 'Jyotiraj Global Company',
            },
          },
          aggregateRating: {
            '@type': 'AggregateRating',
            ratingValue: product.rating,
            reviewCount: product.reviewCount,
          },
        },
      })),
    },

    // 3. FAQPage Schema for Rich Search Accordions in Google
    {
      '@type': 'FAQPage',
      mainEntity: FAQS.map((faq) => ({
        '@type': 'Question',
        name: faq.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: faq.answer,
        },
      })),
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className={`${playfair.variable} ${lato.variable} ${mukta.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body suppressHydrationWarning style={{ fontFamily: 'var(--font-body)' }}>
        {children}
      </body>
    </html>
  );
}
