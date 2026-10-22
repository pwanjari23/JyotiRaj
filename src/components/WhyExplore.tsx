import React from 'react';
import { Nut, Flame, Gift, Users, ArrowUpRight } from 'lucide-react';
import { PageView, Language } from '../types';

interface WhyExploreProps {
  onNavigate: (page: PageView) => void;
  language: Language;
}

export const WhyExplore: React.FC<WhyExploreProps> = ({ onNavigate, language }) => {
  const highlights = [
    {
      icon: <Nut size={26} />,
      title: language === 'mr' ? 'सुकामेव्याची विपुल विविधता' : 'Packed with Whole Dry Fruits',
      desc: language === 'mr'
        ? 'प्रत्येक प्रकारानुसार बदाम, काजू, पिस्ता, अक्रोड आणि पौष्टिक बियाण्यांचे योग्य प्रमाण.'
        : 'Generously loaded with real almonds, cashews, pistachios, walnuts, and healthy seeds for daily energy and nutrition.',
    },
    {
      icon: <Flame size={26} />,
      title: language === 'mr' ? 'पारंपरिक भारतीय प्रकार' : 'Authentic Indian Favorites',
      desc: language === 'mr'
        ? 'गोलाकार लाडू, स्लाईस केलेले खजूर रोल आणि शाही बर्फी यांसारखे परिचित पारंपारिक आकार.'
        : 'Enjoy familiar traditional treats: round laddus, sliced date rolls, and royal barfi pieces made with pure cow ghee.',
    },
    {
      icon: <Gift size={26} />,
      title: language === 'mr' ? 'आनंद आणि सणांसाठी खास' : 'Perfect for Family & Gifting',
      desc: language === 'mr'
        ? 'कौटुंबिक सोहळे, सण-उत्सव आणि शुभ प्रसंगी देण्यासाठी उत्तम व आकर्षक पॅकिंग.'
        : 'Delight your loved ones during Diwali, weddings, birthdays, and special festivals with royal gift-ready packaging.',
    },
    {
      icon: <Users size={26} />,
      title: language === 'mr' ? 'रिटेल आणि होलसेल सेवा' : 'Retail & Bulk Orders',
      desc: language === 'mr'
        ? 'घरगुती ग्राहकांसाठी किरकोळ विक्री तसेच व्यापारी आणि निर्यातदारांसाठी थेट घाऊक पुरवठा.'
        : 'Order easily for your home, or get in touch for special wholesale pricing on bulk and wedding orders.',
    },
  ];

  return (
    <section className="why-explore-section" style={{
      backgroundColor: 'var(--color-soft-sand)',
      padding: '80px 0',
      borderBottom: '1px solid var(--color-border)',
      position: 'relative'
    }}>
      <div className="container">
        {/* Section Header */}
        <div className="why-explore-header" style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 50px auto' }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '12px',
            marginBottom: '14px'
          }}>
            <span style={{ width: '28px', height: '1px', backgroundColor: 'var(--color-antique-gold)' }} />
            <span style={{
              color: 'var(--color-antique-gold-dark)',
              fontSize: '13px',
              fontWeight: 700,
              letterSpacing: '2px',
              textTransform: 'uppercase'
            }}>
              {language === 'mr' ? 'ज्योतीराज वैशिष्ट्ये' : 'WHY CHOOSE JYOTIRAJ'}
            </span>
            <span style={{ width: '28px', height: '1px', backgroundColor: 'var(--color-antique-gold)' }} />
          </div>

          <h2 className="why-explore-title" style={{
            fontFamily: 'var(--font-heading)',
            fontSize: '40px',
            fontWeight: 800,
            color: 'var(--color-royal-maroon)',
            marginBottom: '16px'
          }}>
            {language === 'mr' ? 'अविस्मरणीय क्षणांसाठी बनवलेली गोडी' : 'Pure Sweets Made for Cherished Moments'}
          </h2>

          <p className="why-explore-subtitle" style={{
            fontSize: '17px',
            color: 'var(--color-espresso-brown)',
            lineHeight: 1.6
          }}>
            {language === 'mr'
              ? 'शुद्ध चव आणि परंपरेचा सन्मान राखत तयार केलेली दर्जेदार भारतीय मिठाई.'
              : 'Our sweets are prepared with love and time-tested recipes, offering wholesome health, rich taste, and happy smiles in every box.'}
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="why-explore-grid" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '24px'
        }}>
          {highlights.map((item, index) => (
            <div
              key={index}
              className="why-explore-card"
              style={{
                backgroundColor: 'var(--color-pure-white)',
                borderRadius: '14px',
                padding: '32px 24px',
                border: '1px solid var(--color-border)',
                transition: 'var(--transition-smooth)',
                position: 'relative',
                boxShadow: '0 4px 16px rgba(67, 12, 10, 0.04)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.borderColor = 'var(--color-antique-gold)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.borderColor = 'var(--color-border)';
              }}
            >
              <div className="why-explore-card-icon" style={{
                width: '56px',
                height: '56px',
                borderRadius: '12px',
                backgroundColor: 'rgba(201, 149, 46, 0.12)',
                color: 'var(--color-antique-gold-dark)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '20px'
              }}>
                {item.icon}
              </div>

              <h3 className="why-explore-card-title" style={{
                fontSize: '20px',
                color: 'var(--color-royal-maroon)',
                marginBottom: '12px',
                fontWeight: 700
              }}>
                {item.title}
              </h3>

              <p className="why-explore-card-desc" style={{
                fontSize: '14.5px',
                color: 'var(--color-muted-text)',
                lineHeight: 1.6
              }}>
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Wholesale & Gifting Bar */}
        <div style={{
          marginTop: '36px',
          textAlign: 'center',
          padding: '18px 24px',
          borderRadius: '12px',
          backgroundColor: '#fff',
          border: '1px solid var(--color-border)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '12px',
          flexWrap: 'wrap'
        }}>
          <span style={{ fontSize: '15px', color: 'var(--color-espresso-brown)', fontWeight: 600 }}>
            {language === 'mr'
              ? 'लग्नसमारंभ किंवा कॉर्पोरेट भेटवस्तूंसाठी मोठ्या प्रमाणात मागणी करायची आहे का?'
              : 'Looking for bulk orders, wedding gifting, or corporate sweet boxes?'}
          </span>
          <button
            onClick={() => onNavigate('wholesale')}
            style={{
              background: 'none',
              border: 'none',
              color: 'var(--color-royal-maroon)',
              fontWeight: 700,
              fontSize: '15px',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '4px',
              cursor: 'pointer',
              textDecoration: 'underline'
            }}
          >
            <span>{language === 'mr' ? 'घाऊक चौकशी करा' : 'Explore Wholesale & Custom Packaging'}</span>
            <ArrowUpRight size={16} />
          </button>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .why-explore-section {
            padding: 36px 0 !important;
          }
          .why-explore-header {
            margin-bottom: 22px !important;
          }
          .why-explore-title {
            font-size: clamp(22px, 5.5vw, 28px) !important;
            margin-bottom: 8px !important;
          }
          .why-explore-subtitle {
            font-size: 13.5px !important;
            line-height: 1.45 !important;
          }
          .why-explore-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
            gap: 10px !important;
          }
          .why-explore-card {
            padding: 14px 12px !important;
            border-radius: 12px !important;
          }
          .why-explore-card-icon {
            width: 36px !important;
            height: 36px !important;
            margin-bottom: 10px !important;
            border-radius: 8px !important;
          }
          .why-explore-card-icon svg {
            width: 20px !important;
            height: 20px !important;
          }
          .why-explore-card-title {
            font-size: 13.5px !important;
            margin-bottom: 6px !important;
            line-height: 1.25 !important;
          }
          .why-explore-card-desc {
            font-size: 11px !important;
            line-height: 1.35 !important;
          }
        }
      `}</style>
    </section>
  );
};
