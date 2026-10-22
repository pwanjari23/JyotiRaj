import React from 'react';
import {
  MessageCircle,
  ArrowRight,
  Nut,
  FlaskConical,
  Scroll,
  Globe2
} from 'lucide-react';
import { PageView, Language } from '../types';

interface HeroSectionProps {
  onNavigate: (page: PageView, filter?: string) => void;
  language: Language;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onNavigate, language }) => {
  const handleWhatsAppClick = () => {
    const text = encodeURIComponent(
      'Hello Jyotiraj Global Company! I would like to order authentic dry fruit sweets and explore your royal collection.'
    );
    window.open(`https://wa.me/919876543210?text=${text}`, '_blank');
  };

  const trustBadges = [
    {
      icon: <Nut size={18} color="var(--color-royal-maroon)" />,
      label: language === 'mr' ? 'उत्कृष्ट सुकामेवा' : language === 'hi' ? 'प्रीमियम सामग्री' : 'Premium Nuts'
    },
    {
      icon: <FlaskConical size={18} color="var(--color-royal-maroon)" />,
      label: language === 'mr' ? 'प्रिझर्व्हेटिव्ह मुक्त' : language === 'hi' ? 'प्रिजर्वेटिव मुक्त' : 'No Preservatives'
    },
    {
      icon: <Scroll size={18} color="var(--color-royal-maroon)" />,
      label: language === 'mr' ? 'पारंपरिक पाककृती' : language === 'hi' ? 'पारंपरिक रेसिपी' : 'Authentic Recipes'
    },
    {
      icon: <Globe2 size={18} color="var(--color-royal-maroon)" />,
      label: language === 'mr' ? 'जागतिक निर्यात' : language === 'hi' ? 'ग्लोबल एक्सपोर्ट' : 'Global Export'
    }
  ];

  const categoryPills = [
    { id: 'laddu', title: language === 'mr' ? 'ड्राय फ्रुट लाडू' : language === 'hi' ? 'ड्राई फ्रूट लड्डू' : 'Dry Fruits Laddus', image: '/assets/card_cat_1.png' },
    { id: 'roll-barfi', title: language === 'mr' ? 'खजूर बर्फी' : language === 'hi' ? 'खजूर बर्फी' : 'Khajur Barfi', image: '/assets/card_cat_2.png' },
    { id: 'traditional', title: language === 'mr' ? 'पारंपरिक मिठाई' : language === 'hi' ? 'पारंपरिक मिठाई' : 'Traditional Sweets', image: '/assets/card_cat_3.png' },
    { id: 'hamper', title: language === 'mr' ? 'भेट हॅम्पर्स' : language === 'hi' ? 'गिफ्ट हैंपर्स' : 'Festive Hampers', image: '/assets/card_cat_4.png' },
  ];

  return (
    <section className="hero-section" style={{
      backgroundColor: '#FAF4EA',
      backgroundImage: 'radial-gradient(ellipse at 85% 20%, #FAF0DF 0%, #FAF5ED 50%, #F5E8D4 100%)',
      position: 'relative',
      overflow: 'hidden',
      borderBottom: '1px solid var(--color-border)',
      paddingTop: '46px',
      paddingBottom: '36px'
    }}>
      {/* Decorative Traditional Corner Mandala Motifs */}
      <svg
        width="180"
        height="180"
        viewBox="0 0 100 100"
        fill="none"
        style={{
          position: 'absolute',
          top: '-20px',
          left: '-20px',
          opacity: 0.12,
          pointerEvents: 'none'
        }}
      >
        <circle cx="50" cy="50" r="45" stroke="#C9952E" strokeWidth="1" strokeDasharray="3 3" />
        <circle cx="50" cy="50" r="35" stroke="#C9952E" strokeWidth="1.2" />
        <path d="M50 5 L50 95 M5 50 L95 50 M18 18 L82 82 M18 82 L82 18" stroke="#C9952E" strokeWidth="0.8" />
      </svg>

      <svg
        width="220"
        height="220"
        viewBox="0 0 100 100"
        fill="none"
        style={{
          position: 'absolute',
          bottom: '-30px',
          left: '-30px',
          opacity: 0.1,
          pointerEvents: 'none'
        }}
      >
        <circle cx="50" cy="50" r="48" stroke="#C9952E" strokeWidth="1" />
        <circle cx="50" cy="50" r="38" stroke="#C9952E" strokeWidth="1.2" strokeDasharray="4 4" />
      </svg>

      {/* Main Content Container */}
      <div className="container" style={{
        maxWidth: '1280px',
        margin: '0 auto',
        padding: '0 24px',
        position: 'relative',
        zIndex: 10
      }}>
        
        {/* Editorial 2-Column Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1.05fr 0.95fr',
          gap: '44px',
          alignItems: 'center',
          marginBottom: '38px'
        }} className="editorial-hero-grid">

          {/* Left Column: Typography, Story, Badges & CTAs */}
          <div>
            
            {/* Top Gold Cartouche Badge */}
            <div style={{
              display: 'inline-block',
              position: 'relative',
              background: 'linear-gradient(135deg, #E6C570 0%, #C9952E 50%, #A2741E 100%)',
              color: '#34050A',
              padding: '7px 22px',
              borderRadius: '6px',
              fontWeight: 800,
              fontSize: '11px',
              letterSpacing: '2px',
              textTransform: 'uppercase',
              boxShadow: '0 3px 12px rgba(201, 149, 46, 0.3)',
              marginBottom: '20px'
            }}>
              <span>
                {language === 'mr'
                  ? 'हस्तनिर्मित • १००% शुद्ध देशी तूप'
                  : language === 'hi'
                  ? 'हस्तनिर्मित • 100% शुद्ध देसी घी'
                  : 'HANDCRAFTED • 100% PURE DESI GHEE'}
              </span>
            </div>

            {/* Regal Heading */}
            <h1 className="hero-title" style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(32px, 3.6vw, 50px)',
              fontWeight: 800,
              color: 'var(--color-royal-maroon)',
              lineHeight: 1.15,
              marginBottom: '18px'
            }}>
              {language === 'mr' ? (
                <>
                  अस्सल चवीचा समृद्ध वारसा<br />
                  <span style={{ color: 'var(--color-royal-maroon)' }}>आणि शाही परंपरा</span>
                </>
              ) : language === 'hi' ? (
                <>
                  असली स्वाद की समृद्ध विरासत<br />
                  <span style={{ color: 'var(--color-royal-maroon)' }}>और शाही परंपरा</span>
                </>
              ) : (
                <>
                  A Legacy of Pure Taste<br />
                  <span style={{ color: 'var(--color-royal-maroon)' }}>& Royal Tradition</span>
                </>
              )}
            </h1>

            {/* Editorial Subtitle */}
            <p className="hero-subtitle" style={{
              fontSize: '15.5px',
              color: '#553E36',
              lineHeight: 1.65,
              marginBottom: '26px',
              maxWidth: '520px'
            }}>
              {language === 'mr'
                ? 'ज्योतीराजसोबत भारताच्या शाही स्वादाचा अनुभव घ्या. १९५१ पासून, आम्ही केवळ उत्कृष्ट सुकामेवा आणि पारंपरिक पाककृतींचा वापर करून स्वादिष्ट मिठाई तयार करत आहोत.'
                : language === 'hi'
                ? 'ज्योतिराज के साथ भारत के शाही स्वादों का आनंद लें। 1951 से, हम बेहतरीन सामग्री और पारंपरिक व्यंजनों का उपयोग करके उत्कृष्ट मिठाइयाँ तैयार कर रहे हैं।'
                : 'Enjoy the royal taste of pure Indian sweets. Handcrafted since 1951 with 100% natural dry fruits, pure desi cow ghee, and zero white sugar—delivered fresh to your home.'}
            </p>

            {/* 4 Trust Badges with Circular Gold Tinted Badges */}
            <div className="hero-trust-badges" style={{
              display: 'flex',
              alignItems: 'center',
              flexWrap: 'wrap',
              gap: '18px',
              marginBottom: '32px'
            }}>
              {trustBadges.map((badge, idx) => (
                <div
                  key={idx}
                  className="hero-trust-badge-item"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '9px'
                  }}
                >
                  <div className="hero-trust-badge-icon" style={{
                    width: '38px',
                    height: '38px',
                    borderRadius: '50%',
                    backgroundColor: '#EFE2CB',
                    border: '1px solid rgba(201, 149, 46, 0.4)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                    boxShadow: '0 2px 6px rgba(67, 12, 10, 0.05)'
                  }}>
                    {badge.icon}
                  </div>
                  <span className="hero-trust-badge-label" style={{
                    fontSize: '13px',
                    fontWeight: 700,
                    color: 'var(--color-royal-maroon)',
                    lineHeight: 1.25,
                    maxWidth: '85px'
                  }}>
                    {badge.label}
                  </span>
                </div>
              ))}
            </div>

            {/* Dual CTA Buttons */}
            <div className="hero-cta-group" style={{
              display: 'flex',
              alignItems: 'center',
              flexWrap: 'wrap',
              gap: '16px'
            }}>
              <button
                onClick={() => onNavigate('shop')}
                className="hero-cta-btn"
                style={{
                  backgroundColor: '#4A0E17',
                  color: '#FFFFFF',
                  border: 'none',
                  borderRadius: '9999px',
                  padding: '14px 34px',
                  fontFamily: 'var(--font-body)',
                  fontSize: '15px',
                  fontWeight: 700,
                  cursor: 'pointer',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  transition: 'var(--transition-smooth)',
                  boxShadow: '0 6px 20px rgba(74, 14, 23, 0.3)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#62121E';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = '#4A0E17';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <span>
                  {language === 'mr' ? 'संग्रह पहा' : language === 'hi' ? 'कलेक्शन देखें' : 'Explore Collection'}
                </span>
              </button>

              <button
                onClick={handleWhatsAppClick}
                className="hero-cta-btn"
                style={{
                  backgroundColor: '#124E2A',
                  color: '#FFFFFF',
                  border: 'none',
                  borderRadius: '9999px',
                  padding: '14px 30px',
                  fontFamily: 'var(--font-body)',
                  fontSize: '15px',
                  fontWeight: 700,
                  cursor: 'pointer',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '9px',
                  transition: 'var(--transition-smooth)',
                  boxShadow: '0 6px 20px rgba(18, 78, 42, 0.25)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#186336';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = '#124E2A';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <MessageCircle size={18} color="#FFFFFF" />
                <span>
                  {language === 'mr' ? 'व्हॉट्सअॅपवर ऑर्डर करा' : language === 'hi' ? 'व्हाट्सएप पर ऑर्डर करें' : 'Order on WhatsApp'}
                </span>
              </button>
            </div>

          </div>

          {/* Right Column: Authentic Luxury Brass Thali Photo with Frosted Badge */}
          <div style={{
            position: 'relative',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            {/* Real Thali Photo Card */}
            <div className="hero-thali-container" style={{
              position: 'relative',
              width: '100%',
              maxWidth: '540px',
              borderRadius: '26px',
              overflow: 'hidden',
              boxShadow: '0 24px 60px rgba(67, 12, 10, 0.16)',
              border: '2px solid rgba(201, 149, 46, 0.35)'
            }}>
              <img
                src="/assets/hero_thali_photo.jpg"
                alt="Jyotiraj Traditional Brass Thali with Dry Fruits Laddus, Khajur Rolls, and Saffron"
                style={{
                  width: '100%',
                  height: 'auto',
                  display: 'block',
                  objectFit: 'cover'
                }}
              />

              {/* Floating Frosted Glass Badge in Bottom-Left */}
              <div className="hero-thali-badge" style={{
                position: 'absolute',
                bottom: '18px',
                left: '18px',
                backgroundColor: 'rgba(255, 255, 255, 0.88)',
                backdropFilter: 'blur(12px)',
                WebkitBackdropFilter: 'blur(12px)',
                border: '1.2px solid rgba(255, 255, 255, 0.8)',
                borderRadius: '18px',
                padding: '12px 20px',
                boxShadow: '0 10px 30px rgba(67, 12, 10, 0.12)',
                zIndex: 5
              }}>
                <div className="hero-thali-badge-text" style={{
                  fontFamily: 'var(--font-heading)',
                  fontStyle: 'italic',
                  fontSize: '15px',
                  color: 'var(--color-royal-maroon)',
                  lineHeight: 1.25,
                  fontWeight: 600
                }}>
                  {language === 'mr' ? 'अस्सल' : language === 'hi' ? 'शुद्ध' : 'Crafted with'}<br />
                  <strong style={{ fontStyle: 'normal', fontWeight: 800, fontSize: '16px' }}>
                    {language === 'mr' ? 'गीर गायीचे तूप' : language === 'hi' ? 'गीर गाय का घी' : 'Pure Gir'}
                  </strong><br />
                  <span style={{ fontSize: '13px', fontStyle: 'normal', color: 'var(--color-espresso-brown)' }}>
                    {language === 'mr' ? 'आणि सुकामेवा' : language === 'hi' ? 'और ड्राई फ्रूट्स' : 'Cow Ghee'}
                  </span>
                </div>
              </div>
            </div>

          </div>

        </div>

        {/* Floating Bottom Category Quick-Jump Bar */}
        <div style={{
          backgroundColor: 'rgba(255, 255, 255, 0.94)',
          backdropFilter: 'blur(14px)',
          WebkitBackdropFilter: 'blur(14px)',
          border: '1.5px solid rgba(201, 149, 46, 0.35)',
          borderRadius: '9999px',
          padding: '8px 24px',
          boxShadow: '0 12px 32px rgba(67, 12, 10, 0.08)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '14px',
          maxWidth: '1080px',
          margin: '0 auto'
        }} className="floating-category-bar">
          
          <div className="hero-pills-row" style={{
            display: 'flex',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '18px',
            flex: 1
          }}>
            {categoryPills.map((pill) => (
              <div
                key={pill.id}
                onClick={() => onNavigate('shop', pill.id)}
                className="hero-pill-item"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '10px',
                  cursor: 'pointer',
                  padding: '4px 10px',
                  borderRadius: '9999px',
                  transition: 'var(--transition-smooth)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(201, 149, 46, 0.12)';
                  e.currentTarget.style.transform = 'translateY(-1px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <div style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '50%',
                  overflow: 'hidden',
                  backgroundColor: '#FAF5ED',
                  border: '1px solid var(--color-border)',
                  flexShrink: 0
                }}>
                  <img
                    src={pill.image}
                    alt={pill.title}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'contain'
                    }}
                  />
                </div>
                <span style={{
                  fontSize: '13.5px',
                  fontWeight: 700,
                  color: 'var(--color-royal-maroon)'
                }}>
                  {pill.title}
                </span>
              </div>
            ))}
          </div>

          {/* View All Button */}
          <button
            onClick={() => onNavigate('shop')}
            className="hero-view-all-btn"
            style={{
              backgroundColor: 'transparent',
              border: 'none',
              color: 'var(--color-royal-maroon)',
              fontWeight: 800,
              fontSize: '13px',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '4px',
              cursor: 'pointer',
              padding: '6px 12px',
              borderRadius: '9999px',
              transition: 'var(--transition-smooth)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = 'var(--color-antique-gold-dark)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = 'var(--color-royal-maroon)';
            }}
          >
            <span>{language === 'mr' ? 'सर्व पहा' : language === 'hi' ? 'सभी देखें' : 'View All'}</span>
            <ArrowRight size={14} />
          </button>
        </div>

      </div>

      <style>{`
        @media (max-width: 960px) {
          .editorial-hero-grid {
            grid-template-columns: 1fr !important;
            text-align: center;
          }
          .editorial-hero-grid > div {
            margin: 0 auto;
          }
          .editorial-hero-grid div[style*="display: flex"] {
            justify-content: center;
          }
          .floating-category-bar {
            border-radius: 20px !important;
            justify-content: center !important;
          }
        }
        @media (max-width: 768px) {
          .hero-section {
            padding-top: 22px !important;
            padding-bottom: 22px !important;
          }
          .editorial-hero-grid {
            gap: 22px !important;
            margin-bottom: 22px !important;
          }
          .hero-title {
            font-size: clamp(23px, 6vw, 30px) !important;
            line-height: 1.2 !important;
            margin-bottom: 12px !important;
          }
          .hero-subtitle {
            font-size: 13.5px !important;
            line-height: 1.5 !important;
            margin-bottom: 16px !important;
          }
          .hero-trust-badges {
            gap: 8px !important;
            margin-bottom: 20px !important;
            justify-content: center !important;
          }
          .hero-trust-badge-item {
            gap: 6px !important;
          }
          .hero-trust-badge-icon {
            width: 32px !important;
            height: 32px !important;
          }
          .hero-trust-badge-label {
            font-size: 11px !important;
            max-width: 78px !important;
          }
          .hero-cta-group {
            gap: 10px !important;
            justify-content: center !important;
          }
          .hero-cta-btn {
            padding: 11px 22px !important;
            font-size: 13.5px !important;
          }
          .hero-thali-container {
            max-width: 290px !important;
            margin: 0 auto !important;
            border-radius: 18px !important;
          }
          .hero-thali-badge {
            bottom: 10px !important;
            left: 10px !important;
            padding: 8px 12px !important;
            border-radius: 12px !important;
          }
          .hero-thali-badge-text {
            font-size: 12px !important;
          }
          .hero-thali-badge-text strong {
            font-size: 13px !important;
          }
          .floating-category-bar {
            border-radius: 14px !important;
            padding: 6px 10px !important;
            gap: 8px !important;
            flex-wrap: nowrap !important;
            overflow-x: auto !important;
            justify-content: flex-start !important;
            -webkit-overflow-scrolling: touch;
            scrollbar-width: none;
          }
          .floating-category-bar::-webkit-scrollbar {
            display: none;
          }
          .hero-pills-row {
            flex-wrap: nowrap !important;
            overflow-x: auto !important;
            gap: 8px !important;
            scrollbar-width: none;
          }
          .hero-pills-row::-webkit-scrollbar {
            display: none;
          }
          .hero-pill-item {
            flex-shrink: 0 !important;
            padding: 3px 8px !important;
          }
          .hero-pill-item span {
            font-size: 12px !important;
          }
          .hero-view-all-btn {
            flex-shrink: 0 !important;
            padding: 4px 8px !important;
            font-size: 12px !important;
          }
        }
      `}</style>
    </section>
  );
};
