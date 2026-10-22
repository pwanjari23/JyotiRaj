import React from 'react';
import { Compass, HeartHandshake, ShieldCheck, ArrowRight } from 'lucide-react';
import { PageView, Language } from '../types';

interface BrandIntroProps {
  onNavigate: (page: PageView) => void;
  language: Language;
}

export const BrandIntro: React.FC<BrandIntroProps> = ({ onNavigate, language }) => {
  return (
    <section className="brand-intro-section" style={{
      backgroundColor: 'var(--color-warm-ivory)',
      padding: '80px 0',
      borderBottom: '1px solid var(--color-border)',
      position: 'relative'
    }}>
      <div className="container">
        <div style={{
          maxWidth: '840px',
          margin: '0 auto',
          textAlign: 'center'
        }}>
          {/* Eyebrow */}
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '12px',
            marginBottom: '16px'
          }}>
            <span style={{ width: '28px', height: '1px', backgroundColor: 'var(--color-antique-gold)' }} />
            <span style={{
              color: 'var(--color-antique-gold-dark)',
              fontSize: '13px',
              fontWeight: 700,
              letterSpacing: '2px',
              textTransform: 'uppercase'
            }}>
              {language === 'mr' ? 'गृह उद्योग परंपरा' : 'AUTHENTIC HOMEMADE TRADITION'}
            </span>
            <span style={{ width: '28px', height: '1px', backgroundColor: 'var(--color-antique-gold)' }} />
          </div>

          {/* Heading */}
          <h2 className="brand-intro-title" style={{
            fontFamily: 'var(--font-heading)',
            fontSize: '40px',
            fontWeight: 800,
            color: 'var(--color-royal-maroon)',
            lineHeight: 1.25,
            marginBottom: '24px'
          }}>
            {language === 'mr' 
              ? 'प्रत्येक प्रसंगासाठी खास, परंपरेने जपलेली अस्सल चव'
              : 'A Tradition of Pure Taste for Every Celebration'}
          </h2>

          {/* Copy */}
          <p style={{
            fontSize: '18px',
            color: 'var(--color-espresso-brown)',
            lineHeight: 1.8,
            marginBottom: '20px'
          }}>
            {language === 'mr'
              ? 'ज्योतीराज ग्लोबल कंपनी – गृह उद्योग सादर करत आहे सुकामेवा, खजूर, पौष्टिक बियाणे आणि पारंपरिक मसाल्यांनी समृद्ध भारतीय पारंपारिक मिठाईचा अनमोल संग्रह.'
              : 'Jyotiraj Global Company brings you a royal collection of traditional Indian sweets made with natural dry fruits, dates, wholesome seeds, and pure desi cow ghee.'}
          </p>

          <p style={{
            fontSize: '16.5px',
            color: 'var(--color-muted-text)',
            lineHeight: 1.7,
            marginBottom: '28px'
          }}>
            {language === 'mr'
              ? 'पारंपारिक लाडू, खजूर रोल्स आणि खजूर बर्फीच्या माध्यमातून भारतीय गोडधोड परंपरेचा समृद्ध वारसा प्रत्येक ग्राहकापर्यंत आणि जागतिक बाजारपेठेपर्यंत पोहोचवणे हे आमचे ध्येय आहे.'
              : 'From classic laddus to sliced date rolls and rich barfis, our sweets bring natural energy, rich taste, and happiness to homes across India and around the world.'}
          </p>

          <div style={{ marginBottom: '32px' }}>
            <button
              onClick={() => onNavigate('about')}
              className="btn btn-outline"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                fontWeight: 600,
                fontSize: '14.5px'
              }}
            >
              <span>{language === 'mr' ? 'आमची परंपरा व कथा वाचा' : 'Discover Our Heritage & Story'}</span>
              <ArrowRight size={16} />
            </button>
          </div>

          {/* 3 Pillars */}
          <div className="brand-intro-pillars" style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '24px',
            textAlign: 'left',
            marginTop: '40px',
            paddingTop: '32px',
            borderTop: '1px solid var(--color-border)'
          }}>
            <div className="brand-intro-card" style={{
              backgroundColor: 'var(--color-pure-white)',
              padding: '24px',
              borderRadius: '12px',
              border: '1px solid var(--color-border)'
            }}>
              <div className="brand-intro-card-icon" style={{
                width: '44px',
                height: '44px',
                borderRadius: '8px',
                backgroundColor: 'rgba(201, 149, 46, 0.12)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--color-antique-gold-dark)',
                marginBottom: '14px'
              }}>
                <ShieldCheck size={22} />
              </div>
              <div>
                <h4 style={{ fontSize: '18px', marginBottom: '8px', color: 'var(--color-royal-maroon)' }}>
                  {language === 'mr' ? 'अस्सल गुणवत्ता' : '100% Pure & Natural'}
                </h4>
                <p style={{ fontSize: '14px', color: 'var(--color-muted-text)', lineHeight: 1.6 }}>
                  Handpicked almonds, cashews, pistachios, walnuts, and soft sweet dates with zero white sugar.
                </p>
              </div>
            </div>

            <div className="brand-intro-card" style={{
              backgroundColor: 'var(--color-pure-white)',
              padding: '24px',
              borderRadius: '12px',
              border: '1px solid var(--color-border)'
            }}>
              <div className="brand-intro-card-icon" style={{
                width: '44px',
                height: '44px',
                borderRadius: '8px',
                backgroundColor: 'rgba(107, 18, 15, 0.1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--color-royal-maroon)',
                marginBottom: '14px'
              }}>
                <HeartHandshake size={22} />
              </div>
              <div>
                <h4 style={{ fontSize: '18px', marginBottom: '8px', color: 'var(--color-royal-maroon)' }}>
                  {language === 'mr' ? 'गृह उद्योग निष्ठा' : 'Homemade Care'}
                </h4>
                <p style={{ fontSize: '14px', color: 'var(--color-muted-text)', lineHeight: 1.6 }}>
                  Handcrafted fresh in small, hygienic batches following authentic Indian recipes and pure taste.
                </p>
              </div>
            </div>

            <div className="brand-intro-card" style={{
              backgroundColor: 'var(--color-pure-white)',
              padding: '24px',
              borderRadius: '12px',
              border: '1px solid var(--color-border)'
            }}>
              <div className="brand-intro-card-icon" style={{
                width: '44px',
                height: '44px',
                borderRadius: '8px',
                backgroundColor: 'rgba(24, 85, 46, 0.12)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--color-forest-green)',
                marginBottom: '14px'
              }}>
                <Compass size={22} />
              </div>
              <div>
                <h4 style={{ fontSize: '18px', marginBottom: '8px', color: 'var(--color-royal-maroon)' }}>
                  {language === 'mr' ? 'जागतिक दर्जा' : 'Stays Fresh for Months'}
                </h4>
                <p style={{ fontSize: '14px', color: 'var(--color-muted-text)', lineHeight: 1.6 }}>
                  Packed in airtight, clean food-grade containers ready for family gifting and worldwide delivery.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .brand-intro-section {
            padding: 36px 0 !important;
          }
          .brand-intro-title {
            font-size: clamp(22px, 5.5vw, 28px) !important;
            margin-bottom: 12px !important;
          }
          .brand-intro-section p {
            font-size: 13.5px !important;
            line-height: 1.5 !important;
            margin-bottom: 12px !important;
          }
          .brand-intro-pillars {
            grid-template-columns: 1fr !important;
            gap: 10px !important;
            margin-top: 20px !important;
            padding-top: 16px !important;
          }
          .brand-intro-card {
            padding: 12px 14px !important;
            display: flex !important;
            align-items: flex-start !important;
            gap: 12px !important;
          }
          .brand-intro-card-icon {
            width: 36px !important;
            height: 36px !important;
            flex-shrink: 0 !important;
            margin-bottom: 0 !important;
          }
          .brand-intro-card h4 {
            font-size: 14.5px !important;
            margin-bottom: 3px !important;
          }
          .brand-intro-card p {
            font-size: 12px !important;
            line-height: 1.35 !important;
            margin-bottom: 0 !important;
          }
        }
      `}</style>
    </section>
  );
};
