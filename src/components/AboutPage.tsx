import React from 'react';
import { PageView, Language } from '../types';
import { ShieldCheck, Heart, Award, Users, ShoppingBag, ArrowRight } from 'lucide-react';

interface AboutPageProps {
  onNavigate: (page: PageView) => void;
  language: Language;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate, language }) => {
  return (
    <div className="about-page-wrapper" style={{ backgroundColor: 'var(--color-warm-ivory)', minHeight: '100vh', padding: '44px 0 80px 0' }}>
      <div className="container" style={{ maxWidth: '1160px' }}>

        {/* 1. Header (Eyebrow, Headline, Subtitle - Exact match to reference screenshot) */}
        <div style={{ textAlign: 'center', marginBottom: '44px' }}>
          {/* Gold Flourish Eyebrow */}
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '12px',
            marginBottom: '12px'
          }}>
            <span style={{ width: '36px', height: '1px', backgroundColor: 'var(--color-antique-gold)' }} />
            <span style={{
              color: 'var(--color-antique-gold)',
              fontSize: '12.5px',
              fontWeight: 700,
              letterSpacing: '2px',
              textTransform: 'uppercase'
            }}>
              {language === 'mr' ? 'आमचा वारसा आणि तत्त्वज्ञान' : 'OUR HERITAGE & PHILOSOPHY'}
            </span>
            <span style={{ width: '36px', height: '1px', backgroundColor: 'var(--color-antique-gold)' }} />
          </div>

          {/* Main Headline */}
          <h1 style={{
            fontFamily: 'var(--font-heading)',
            fontSize: 'clamp(32px, 3.6vw, 44px)',
            color: 'var(--color-royal-maroon)',
            fontWeight: 800,
            marginBottom: '12px',
            lineHeight: 1.2
          }}>
            {language === 'mr' ? 'भारतीय परंपरेत रुजलेली अस्सल गोडी' : 'Rooted in Indian Sweet Traditions'}
          </h1>

          {/* Subtitle */}
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: 'clamp(14px, 1.2vw, 16px)',
            color: '#39231B',
            maxWidth: '740px',
            margin: '0 auto',
            lineHeight: 1.55,
            opacity: 0.95
          }}>
            {language === 'mr'
              ? 'ज्योतीराज ग्लोबल कंपनी – गृह उद्योग खजूर, सुकामेवा, बियाणे आणि पारंपरिक सुगंधी स्वादांनी परिपूर्ण पारंपारिक भारतीय मिठायांची निर्मिती करते.'
              : 'Jyotiraj Global Company brings you authentic Indian sweets made with natural dates, dry fruits, wholesome seeds, and pure cow ghee, carrying forward the rich culinary traditions of Maharashtra.'}
          </p>
        </div>

        {/* 2. Split Section: Authentic Craftsmanship & Photo Showcase */}
        <div
          className="about-showcase-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: '1.05fr 0.95fr',
            gap: '40px',
            alignItems: 'center',
            marginBottom: '48px'
          }}
        >
          {/* Left Column: Text & Feature Cards */}
          <div>
            <h2 style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(26px, 2.5vw, 34px)',
              color: 'var(--color-royal-maroon)',
              fontWeight: 800,
              marginBottom: '16px',
              lineHeight: 1.25
            }}>
              {language === 'mr' ? 'अस्सल भारतीय पाककलेची कारागिरी' : 'Authentic Homemade Taste & Pure Ingredients'}
            </h2>

            <p style={{
              fontFamily: 'var(--font-body)',
              fontSize: '15px',
              color: '#39231B',
              lineHeight: 1.65,
              marginBottom: '26px'
            }}>
              {language === 'mr'
                ? 'आम्ही मानतो की अस्सल चव ही शुद्ध घटक, संयमपूर्ण तयारी आणि स्वच्छतेच्या अढळ बांधिलकीतून निर्माण होते. प्रत्येक कृती भारतीय सणासुदीच्या आदरातिथ्याची ऊब आणि औदार्य जपते.'
                : 'We believe genuine good taste comes from honest ingredients, clean kitchens, and patient preparation. Every sweet we craft brings the warm, joyful hospitality of Indian celebrations directly to your family.'}
            </p>

            {/* Two Side-by-Side Cards */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '16px'
            }} className="about-cards-row">
              {/* Card 1: 100% Pure */}
              <div style={{
                backgroundColor: '#FFFFFF',
                borderRadius: '14px',
                border: '1px solid rgba(230, 213, 185, 0.75)',
                padding: '20px 22px',
                boxShadow: '0 2px 10px rgba(67, 12, 10, 0.03)'
              }}>
                <div style={{
                  fontSize: '17px',
                  fontWeight: 800,
                  color: '#39231B',
                  marginBottom: '6px'
                }}>
                  100% Pure
                </div>
                <div style={{
                  fontSize: '12.5px',
                  color: '#78675B',
                  lineHeight: 1.45
                }}>
                  {language === 'mr'
                    ? 'नैसर्गिक सुकामेवा आणि खजूर, कोणत्याही कृत्रिम रंगांशिवाय.'
                    : 'Real dry fruits, wholesome seeds, and dates with zero synthetic colors or chemicals.'}
                </div>
              </div>

              {/* Card 2: Homemade Care */}
              <div style={{
                backgroundColor: '#FFFFFF',
                borderRadius: '14px',
                border: '1px solid rgba(230, 213, 185, 0.75)',
                padding: '20px 22px',
                boxShadow: '0 2px 10px rgba(67, 12, 10, 0.03)'
              }}>
                <div style={{
                  fontSize: '17px',
                  fontWeight: 800,
                  color: '#39231B',
                  marginBottom: '6px'
                }}>
                  Homemade Care
                </div>
                <div style={{
                  fontSize: '12.5px',
                  color: '#78675B',
                  lineHeight: 1.45
                }}>
                  {language === 'mr'
                    ? 'पारंपरिक लहान तुकड्यांची काळजी आणि आधुनिक पॅकेजिंग.'
                    : 'Small-batch traditional care meets clean, modern food-grade packaging.'}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: High-Res Platter & Festive Gift Box Photography */}
          <div>
            <div style={{
              borderRadius: '18px',
              overflow: 'hidden',
              boxShadow: '0 8px 30px rgba(67, 12, 10, 0.1)',
              border: '1px solid rgba(230, 213, 185, 0.75)',
              backgroundColor: '#FFFFFF',
              position: 'relative'
            }}>
              <img
                src="/assets/about_craftsmanship_hq.jpg"
                alt="Jyotiraj Global Authentic Sweets Platter and Gift Hamper"
                style={{
                  width: '100%',
                  height: 'auto',
                  display: 'block',
                  objectFit: 'cover'
                }}
              />
            </div>
          </div>
        </div>

        {/* 3. "Our Guiding Values" Large White Card (4 Columns) */}
        <div style={{
          backgroundColor: '#FFFFFF',
          borderRadius: '18px',
          border: '1px solid rgba(230, 213, 185, 0.75)',
          boxShadow: '0 4px 24px rgba(67, 12, 10, 0.04)',
          padding: '40px 44px',
          marginBottom: '40px'
        }}>
          {/* Centered Heading */}
          <h2 style={{
            fontFamily: 'var(--font-heading)',
            fontSize: '28px',
            color: 'var(--color-royal-maroon)',
            fontWeight: 800,
            textAlign: 'center',
            marginBottom: '32px'
          }}>
            {language === 'mr' ? 'आमची मार्गदर्शक मूल्ये' : 'Our Guiding Values'}
          </h2>

          {/* 4 Pillars Grid */}
          <div className="about-values-grid" style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '24px'
          }}>
            {/* Value 1: Ingredient Honesty */}
            <div>
              <div style={{
                width: '46px',
                height: '46px',
                borderRadius: '12px',
                backgroundColor: '#FAF2E4',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#9F721B',
                marginBottom: '14px'
              }}>
                <ShieldCheck size={22} />
              </div>
              <div style={{
                fontSize: '16px',
                fontWeight: 700,
                color: '#39231B',
                marginBottom: '6px'
              }}>
                {language === 'mr' ? 'घटक प्रामाणिकपणा' : 'Pure Ingredients'}
              </div>
              <div style={{
                fontSize: '13px',
                color: '#78675B',
                lineHeight: 1.55
              }}>
                {language === 'mr'
                  ? 'वापरलेल्या सर्व सुकामेवा, बियाणे आणि नैसर्गिक घटकांचा पारदर्शक खुलासा.'
                  : 'We clearly list every nut, seed, and ingredient so you know exactly what you are enjoying.'}
              </div>
            </div>

            {/* Value 2: Cultural Integrity */}
            <div>
              <div style={{
                width: '46px',
                height: '46px',
                borderRadius: '12px',
                backgroundColor: '#F5EBEA',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#6B120F',
                marginBottom: '14px'
              }}>
                <Heart size={22} />
              </div>
              <div style={{
                fontSize: '16px',
                fontWeight: 700,
                color: '#39231B',
                marginBottom: '6px'
              }}>
                {language === 'mr' ? 'सांस्कृतिक निष्ठा' : 'True Indian Tradition'}
              </div>
              <div style={{
                fontSize: '13px',
                color: '#78675B',
                lineHeight: 1.55
              }}>
                {language === 'mr'
                  ? 'पिढ्यानपिढ्या चालत आलेल्या अस्सल भारतीय लाडू आणि बर्फी बनवण्याच्या पद्धतींचे जतन.'
                  : 'Preserving authentic, generations-old recipes of dry fruit laddus, rolls, and barfis.'}
              </div>
            </div>

            {/* Value 3: Export Precision */}
            <div>
              <div style={{
                width: '46px',
                height: '46px',
                borderRadius: '12px',
                backgroundColor: '#EAF3ED',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#18552E',
                marginBottom: '14px'
              }}>
                <Award size={22} />
              </div>
              <div style={{
                fontSize: '16px',
                fontWeight: 700,
                color: '#39231B',
                marginBottom: '6px'
              }}>
                {language === 'mr' ? 'निर्यात अचूकता' : 'Airtight Freshness'}
              </div>
              <div style={{
                fontSize: '13px',
                color: '#78675B',
                lineHeight: 1.55
              }}>
                {language === 'mr'
                  ? 'कडक आंतरराष्ट्रीय पॅकेजिंग, शेल्फ-लाइफ सीलिंग आणि अन्न सुरक्षा मानकांचे पालन.'
                  : 'Every pack is tightly sealed to keep your sweets crunchy, delicious, and fresh for months.'}
              </div>
            </div>

            {/* Value 4: Customer Devotion */}
            <div>
              <div style={{
                width: '46px',
                height: '46px',
                borderRadius: '12px',
                backgroundColor: '#EEF2F6',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#39231B',
                marginBottom: '14px'
              }}>
                <Users size={22} />
              </div>
              <div style={{
                fontSize: '16px',
                fontWeight: 700,
                color: '#39231B',
                marginBottom: '6px'
              }}>
                {language === 'mr' ? 'ग्राहक सेवा' : 'Dedicated Support'}
              </div>
              <div style={{
                fontSize: '13px',
                color: '#78675B',
                lineHeight: 1.55
              }}>
                {language === 'mr'
                  ? 'त्वरित ग्राहक साहाय्य, विश्वासार्ह पॅन-इंडिया डिलिव्हरी आणि समर्पित घाऊक सपोर्ट.'
                  : 'Fast answers, quick shipping across India, and friendly support for every home and bulk order.'}
              </div>
            </div>
          </div>
        </div>

        {/* 4. Bottom Call To Action Banner */}
        <div style={{
          backgroundColor: '#FAF5ED',
          border: '1px solid var(--color-border)',
          borderRadius: '16px',
          padding: '28px 36px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '20px'
        }}>
          <div>
            <div style={{
              fontFamily: 'var(--font-heading)',
              fontSize: '22px',
              fontWeight: 800,
              color: 'var(--color-royal-maroon)',
              marginBottom: '4px'
            }}>
              {language === 'mr' ? 'आमच्या पारंपरिक मिठायांचा आस्वाद घ्या' : 'Experience Authentic Indian Sweets'}
            </div>
            <div style={{ fontSize: '14px', color: '#78675B' }}>
              {language === 'mr'
                ? '१००% शुद्ध साजूक तूप आणि दर्जेदार सुकामेव्यापासून तयार केलेल्या शाही मिठाया.'
                : 'Handcrafted with 100% pure desi ghee, premium dry fruits, and natural date sweetness.'}
            </div>
          </div>

          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            <button
              onClick={() => onNavigate('shop')}
              style={{
                backgroundColor: '#5C1310',
                color: '#FFFFFF',
                border: 'none',
                borderRadius: '8px',
                padding: '12px 24px',
                fontFamily: 'var(--font-body)',
                fontSize: '14px',
                fontWeight: 700,
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                cursor: 'pointer',
                boxShadow: '0 4px 14px rgba(92, 19, 16, 0.22)',
                transition: 'all 0.2s ease'
              }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#430C0A')}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#5C1310')}
            >
              <ShoppingBag size={16} />
              <span>{language === 'mr' ? 'उत्पादने पहा' : 'Explore Sweets'}</span>
              <ArrowRight size={15} />
            </button>

            <button
              onClick={() => onNavigate('wholesale')}
              style={{
                backgroundColor: 'transparent',
                color: 'var(--color-royal-maroon)',
                border: '1.5px solid var(--color-royal-maroon)',
                borderRadius: '8px',
                padding: '12px 22px',
                fontFamily: 'var(--font-body)',
                fontSize: '14px',
                fontWeight: 700,
                cursor: 'pointer',
                transition: 'all 0.2s ease'
              }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'rgba(107, 18, 15, 0.06)')}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
            >
              <span>{language === 'mr' ? 'घाऊक मागणी' : 'Wholesale Enquiry'}</span>
            </button>
          </div>
        </div>

      </div>

      {/* Scoped Responsive Styles */}
      <style>{`
        @media (max-width: 991px) {
          .about-showcase-grid {
            grid-template-columns: 1fr !important;
            gap: 32px !important;
          }
          .about-values-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 20px !important;
          }
        }
        @media (max-width: 768px) {
          .about-page-wrapper {
            padding: 24px 0 40px 0 !important;
          }
        }
        @media (max-width: 600px) {
          .about-cards-row {
            grid-template-columns: 1fr !important;
            gap: 12px !important;
          }
          .about-values-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 10px !important;
          }
        }
      `}</style>
    </div>
  );
};
