import React from 'react';
import { PackageCheck, FileSpreadsheet, ArrowRight, ShieldCheck, CheckCircle2, Plane } from 'lucide-react';
import { PageView, Language } from '../types';

interface WholesaleExportSectionProps {
  onNavigate: (page: PageView) => void;
  language: Language;
}

// Ornate Corner Filigree matching classical Indian royal cartouche frames
const CornerFiligree = ({ position }: { position: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right' }) => {
  const isTop = position.startsWith('top');
  const isLeft = position.endsWith('left');

  return (
    <svg
      width="64"
      height="64"
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{
        position: 'absolute',
        top: isTop ? '8px' : 'auto',
        bottom: !isTop ? '8px' : 'auto',
        left: isLeft ? '8px' : 'auto',
        right: !isLeft ? '8px' : 'auto',
        transform: `${!isLeft ? 'scaleX(-1)' : ''} ${!isTop ? 'scaleY(-1)' : ''}`,
        pointerEvents: 'none',
        zIndex: 2,
        opacity: 0.9
      }}
    >
      {/* Outer corner stepped contour */}
      <path
        d="M 4 54 L 4 22 C 4 12 12 4 22 4 L 54 4"
        stroke="rgba(212, 175, 55, 0.75)"
        strokeWidth="1.2"
        fill="none"
      />
      {/* Inner parallel accent */}
      <path
        d="M 10 48 L 10 24 C 10 16 16 10 24 10 L 48 10"
        stroke="rgba(201, 149, 46, 0.45)"
        strokeWidth="0.9"
        fill="none"
      />
      {/* Corner royal floral node */}
      <circle cx="17" cy="17" r="3" fill="rgba(212, 175, 55, 0.85)" />
      <path
        d="M 4 22 C 14 20 20 14 22 4"
        stroke="rgba(212, 175, 55, 0.6)"
        strokeWidth="1"
        fill="none"
      />
      <circle cx="5" cy="5" r="2" fill="rgba(212, 175, 55, 0.95)" />
      {/* Subtle radial flourish rays */}
      <path
        d="M 5 5 L 14 14 M 5 5 L 6 18 M 5 5 L 18 6"
        stroke="rgba(212, 175, 55, 0.35)"
        strokeWidth="0.8"
      />
    </svg>
  );
};

export const WholesaleExportSection: React.FC<WholesaleExportSectionProps> = ({ onNavigate, language }) => {
  return (
    <section className="wholesale-export-section" style={{
      backgroundColor: 'var(--color-warm-ivory)',
      padding: '70px 0',
      position: 'relative',
      overflow: 'visible',
      borderBottom: '1px solid var(--color-border)'
    }}>

      {/* Main Container with generous space on left and right */}
      <div className="container wholesale-container" style={{
        maxWidth: '1240px',
        margin: '0 auto',
        padding: '0 28px',
        position: 'relative',
        zIndex: 10
      }}>
        
        {/* The Royal Golden Framed Card with Notched Corners & Medallion */}
        <div className="wholesale-card-wrapper" style={{
          position: 'relative',
          borderRadius: '24px',
          backgroundColor: '#38070E',
          backgroundImage: 'radial-gradient(ellipse at 50% 15%, #56101B 0%, #38070E 65%, #290408 100%)',
          border: '1.5px solid rgba(212, 175, 55, 0.65)',
          boxShadow: '0 24px 60px rgba(67, 12, 10, 0.16), 0 8px 24px rgba(67, 12, 10, 0.08), inset 0 0 40px rgba(0, 0, 0, 0.35)',
          padding: '58px 36px 36px 36px',
          overflow: 'visible'
        }}>

          {/* Inner Inset Golden Hairline Border */}
          <div style={{
            position: 'absolute',
            inset: '10px',
            borderRadius: '16px',
            border: '1px solid rgba(201, 149, 46, 0.35)',
            pointerEvents: 'none',
            zIndex: 1
          }} />

          {/* 4 Ornate Corner Filigree Elements */}
          <CornerFiligree position="top-left" />
          <CornerFiligree position="top-right" />
          <CornerFiligree position="bottom-left" />
          <CornerFiligree position="bottom-right" />

          {/* Top Center Breakout Medallion */}
          <div style={{
            position: 'absolute',
            top: '-36px',
            left: '50%',
            transform: 'translateX(-50%)',
            zIndex: 20,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            {/* Medallion Badge */}
            <div style={{
              width: '74px',
              height: '74px',
              borderRadius: '50%',
              background: 'radial-gradient(circle, #ECCB76 0%, #C9952E 55%, #8B6112 100%)',
              padding: '3px',
              boxShadow: '0 8px 24px rgba(0, 0, 0, 0.5), 0 0 16px rgba(201, 149, 46, 0.35)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <div style={{
                width: '100%',
                height: '100%',
                borderRadius: '50%',
                border: '1.5px dashed rgba(255, 248, 237, 0.85)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center',
                color: '#34050A',
                fontWeight: 900,
                lineHeight: 1.05
              }}>
                <span style={{ fontSize: '7.5px', letterSpacing: '1px', textTransform: 'uppercase' }}>
                  {language === 'mr' ? 'जागतिक' : language === 'hi' ? 'ग्लोबल' : 'GLOBAL'}
                </span>
                <span style={{ fontSize: '13px', fontWeight: 900, letterSpacing: '0.5px' }}>B2B</span>
                <span style={{ fontSize: '7.5px', letterSpacing: '0.8px', textTransform: 'uppercase' }}>
                  {language === 'mr' ? 'निर्यात' : language === 'hi' ? 'निर्यात' : 'EXPORT'}
                </span>
                <span style={{ fontSize: '7px', letterSpacing: '0.5px' }}>
                  {language === 'mr' ? 'नेटवर्क' : language === 'hi' ? 'नेटवर्क' : 'NETWORK'}
                </span>
              </div>
            </div>
          </div>

          {/* Section Header */}
          <div style={{ textAlign: 'center', maxWidth: '820px', margin: '0 auto 40px auto', position: 'relative', zIndex: 5 }}>
            <h2 className="wholesale-card-title" style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(26px, 3vw, 40px)',
              fontWeight: 800,
              color: 'var(--color-warm-ivory)',
              lineHeight: 1.25,
              marginBottom: '12px'
            }}>
              {language === 'mr'
                ? 'भारतीय मिठाईचा समृद्ध वारसा जागतिक बाजारपेठेत'
                : language === 'hi'
                ? 'भारतीय मिठाई की समृद्ध परंपरा वैश्विक बाजारों तक'
                : 'Bringing Indian Sweet Traditions to Global Markets'}
            </h2>

            <p className="wholesale-card-subtitle" style={{
              fontSize: '15.5px',
              color: 'rgba(255, 248, 237, 0.84)',
              lineHeight: 1.6,
              maxWidth: '680px',
              margin: '0 auto'
            }}>
              {language === 'mr'
                ? 'अस्सल पारंपरिक चव, आंतरराष्ट्रीय दर्जाचे निर्वात पॅकेजिंग आणि विश्वासार्ह पुरवठा साखळीसह जागतिक व्यापारासाठी आपले विश्वसनीय भागीदार.'
                : language === 'hi'
                ? 'असली पारंपरिक स्वाद, अंतरराष्ट्रीय स्तर की वैक्यूम पैकेजिंग और विश्वसनीय आपूर्ति श्रृंखला के साथ वैश्विक व्यापार के लिए आपका भरोसेमंद साझेदार।'
                : 'Trusted Partner for Authentic Indian Sweets, Pure Quality, & Fast Delivery Worldwide'}
            </p>
          </div>

          {/* 3 Pillars Grid */}
          <div className="wholesale-pillars-grid" style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(290px, 1fr))',
            gap: '22px',
            marginBottom: '38px',
            position: 'relative',
            zIndex: 5
          }}>
            
            {/* Pillar 1: Packaging & Sizes */}
            <div className="wholesale-pillar-card" style={{
              backgroundColor: 'rgba(25, 4, 8, 0.65)',
              border: '1px solid rgba(201, 149, 46, 0.35)',
              borderRadius: '16px',
              padding: '24px 20px',
              display: 'flex',
              flexDirection: 'column',
              boxShadow: '0 8px 24px rgba(0, 0, 0, 0.25)',
              transition: 'transform 0.2s ease, border-color 0.2s ease'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '18px' }}>
                <div style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: '10px',
                  backgroundColor: 'rgba(201, 149, 46, 0.16)',
                  border: '1px solid rgba(201, 149, 46, 0.4)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}>
                  <PackageCheck size={20} color="var(--color-antique-gold)" />
                </div>
                <h3 style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '18px',
                  fontWeight: 700,
                  color: 'var(--color-warm-ivory)',
                  margin: 0
                }}>
                  {language === 'mr'
                    ? 'व्यावसायिक पॅकेजिंग मानके'
                    : language === 'hi'
                    ? 'व्यावसायिक पैकेजिंग मानक'
                    : 'Packaging & Pack Sizes'}
                </h3>
              </div>

              <ul style={{
                listStyle: 'none',
                padding: 0,
                margin: 0,
                display: 'flex',
                flexDirection: 'column',
                gap: '11px',
                fontSize: '13.5px',
                color: 'rgba(255, 248, 237, 0.85)',
                lineHeight: 1.45
              }}>
                <li style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                  <CheckCircle2 size={15} color="var(--color-antique-gold)" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <span>250g, 500g, 1kg Airtight Tubs & Food Tins</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                  <CheckCircle2 size={15} color="var(--color-antique-gold)" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <span>Freshness-Sealed & Stays Crisp for Months</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                  <CheckCircle2 size={15} color="var(--color-antique-gold)" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <span>Airtight Retail Boxes & Strong Master Cartons</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                  <CheckCircle2 size={15} color="var(--color-antique-gold)" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <span>Custom Gift Boxes & Wedding / Festive Packs</span>
                </li>
              </ul>
            </div>

            {/* Pillar 2: Quality Standards & Export Ready */}
            <div className="wholesale-pillar-card" style={{
              backgroundColor: 'rgba(25, 4, 8, 0.65)',
              border: '1px solid rgba(201, 149, 46, 0.35)',
              borderRadius: '16px',
              padding: '24px 20px',
              display: 'flex',
              flexDirection: 'column',
              boxShadow: '0 8px 24px rgba(0, 0, 0, 0.25)',
              transition: 'transform 0.2s ease, border-color 0.2s ease'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '18px' }}>
                <div style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: '10px',
                  backgroundColor: 'rgba(201, 149, 46, 0.16)',
                  border: '1px solid rgba(201, 149, 46, 0.4)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}>
                  <ShieldCheck size={20} color="var(--color-antique-gold)" />
                </div>
                <h3 style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '18px',
                  fontWeight: 700,
                  color: 'var(--color-warm-ivory)',
                  margin: 0
                }}>
                  {language === 'mr'
                    ? 'प्रमाणपत्रे व सीमाशुल्क'
                    : language === 'hi'
                    ? 'ग्लोबल प्रमाणन और सीमा शुल्क'
                    : 'Quality Standards & Export Ready'}
                </h3>
              </div>

              <ul style={{
                listStyle: 'none',
                padding: 0,
                margin: 0,
                display: 'flex',
                flexDirection: 'column',
                gap: '11px',
                fontSize: '13.5px',
                color: 'rgba(255, 248, 237, 0.85)',
                lineHeight: 1.45
              }}>
                <li style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                  <CheckCircle2 size={15} color="var(--color-antique-gold)" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <span>FSSAI Certified & Government Export Registered</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                  <CheckCircle2 size={15} color="var(--color-antique-gold)" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <span>Meets US FDA & International Food Standards</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                  <CheckCircle2 size={15} color="var(--color-antique-gold)" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <span>Clear Multilingual Ingredient & Nutrition Labels</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                  <CheckCircle2 size={15} color="var(--color-antique-gold)" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <span>Complete Export Documents & Smooth Customs Clearance</span>
                </li>
              </ul>
            </div>

            {/* Pillar 3: Wholesale Orders & Global Shipping */}
            <div className="wholesale-pillar-card" style={{
              backgroundColor: 'rgba(25, 4, 8, 0.65)',
              border: '1px solid rgba(201, 149, 46, 0.35)',
              borderRadius: '16px',
              padding: '24px 20px',
              display: 'flex',
              flexDirection: 'column',
              boxShadow: '0 8px 24px rgba(0, 0, 0, 0.25)',
              transition: 'transform 0.2s ease, border-color 0.2s ease'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '18px' }}>
                <div style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: '10px',
                  backgroundColor: 'rgba(201, 149, 46, 0.16)',
                  border: '1px solid rgba(201, 149, 46, 0.4)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}>
                  <Plane size={20} color="var(--color-antique-gold)" />
                </div>
                <h3 style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '18px',
                  fontWeight: 700,
                  color: 'var(--color-warm-ivory)',
                  margin: 0
                }}>
                  {language === 'mr'
                    ? 'लॉजिस्टिक्स व घाऊक सवलती'
                    : language === 'hi'
                    ? 'लॉजिस्टिक्स और वॉल्यूम टियर्स'
                    : 'Wholesale Orders & Global Shipping'}
                </h3>
              </div>

              <ul style={{
                listStyle: 'none',
                padding: 0,
                margin: 0,
                display: 'flex',
                flexDirection: 'column',
                gap: '11px',
                fontSize: '13.5px',
                color: 'rgba(255, 248, 237, 0.85)',
                lineHeight: 1.45
              }}>
                <li style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                  <CheckCircle2 size={15} color="var(--color-antique-gold)" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <span>Small & Large Orders Welcome</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                  <CheckCircle2 size={15} color="var(--color-antique-gold)" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <span>Best Wholesale Prices on Bulk Quantities</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                  <CheckCircle2 size={15} color="var(--color-antique-gold)" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <span>Fast Air & Sea Shipping Worldwide</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                  <CheckCircle2 size={15} color="var(--color-antique-gold)" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <span>Direct Door-to-Door Delivery to Your Store</span>
                </li>
              </ul>
            </div>

          </div>

          {/* Dual Action Buttons */}
          <div className="wholesale-actions-group" style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexWrap: 'wrap',
            gap: '16px',
            marginBottom: '28px',
            position: 'relative',
            zIndex: 5
          }}>
            <button
              onClick={() => onNavigate('wholesale')}
              className="btn btn-gold wholesale-action-btn"
              style={{
                padding: '13px 30px',
                fontSize: '15px',
                fontWeight: 800,
                borderRadius: '9999px',
                boxShadow: '0 4px 18px rgba(201, 149, 46, 0.3)'
              }}
            >
              <span>
                {language === 'mr'
                  ? 'घाऊक मागणी नोंदवा'
                  : language === 'hi'
                  ? 'थोक पूछताछ भेजें'
                  : 'GET WHOLESALE PRICING'}
              </span>
              <ArrowRight size={16} />
            </button>

            <button
              onClick={() => onNavigate('export')}
              className="wholesale-action-btn"
              style={{
                backgroundColor: 'rgba(25, 4, 8, 0.8)',
                color: 'var(--color-warm-ivory)',
                border: '1.5px solid rgba(212, 175, 55, 0.6)',
                borderRadius: '9999px',
                padding: '13px 30px',
                fontFamily: 'var(--font-body)',
                fontWeight: 700,
                fontSize: '14.5px',
                letterSpacing: '0.5px',
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                transition: 'var(--transition-smooth)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(201, 149, 46, 0.15)';
                e.currentTarget.style.borderColor = 'var(--color-antique-gold)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(25, 4, 8, 0.8)';
                e.currentTarget.style.borderColor = 'rgba(212, 175, 55, 0.6)';
              }}
            >
              <FileSpreadsheet size={16} color="var(--color-antique-gold)" />
              <span>
                {language === 'mr'
                  ? 'निर्यात दरपत्रक मागवा'
                  : language === 'hi'
                  ? 'निर्यात मूल्य सूची प्राप्त करें'
                  : 'DOWNLOAD EXPORT CATALOG'}
              </span>
            </button>
          </div>

          {/* Bottom Trust Credentials Strip */}
          <div className="wholesale-trust-strip" style={{
            borderTop: '1px solid rgba(201, 149, 46, 0.25)',
            paddingTop: '18px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexWrap: 'wrap',
            gap: '20px',
            fontSize: '12.5px',
            color: 'rgba(255, 248, 237, 0.8)',
            letterSpacing: '0.8px',
            textAlign: 'center',
            position: 'relative',
            zIndex: 5
          }}>
            <span><strong>15+</strong> EXPORT DESTINATIONS</span>
            <span style={{ color: 'rgba(201, 149, 46, 0.5)' }}>|</span>
            <span><strong>100%</strong> PURE GHEE & DRY FRUITS</span>
            <span style={{ color: 'rgba(201, 149, 46, 0.5)' }}>|</span>
            <span><strong>ZERO</strong> ARTIFICIAL PRESERVATIVES</span>
          </div>

        </div>

      </div>

      <style>{`
        @media (max-width: 768px) {
          .wholesale-export-section {
            padding: 36px 0 !important;
          }
          .wholesale-container {
            padding: 0 14px !important;
          }
          .wholesale-card-wrapper {
            padding: 38px 14px 20px 14px !important;
            border-radius: 18px !important;
          }
          .wholesale-card-title {
            font-size: clamp(21px, 5.5vw, 26px) !important;
            line-height: 1.25 !important;
            margin-bottom: 8px !important;
          }
          .wholesale-card-subtitle {
            font-size: 13px !important;
            line-height: 1.45 !important;
          }
          .wholesale-pillars-grid {
            grid-template-columns: 1fr !important;
            gap: 12px !important;
            margin-bottom: 22px !important;
          }
          .wholesale-pillar-card {
            padding: 16px 14px !important;
            border-radius: 12px !important;
          }
          .wholesale-pillar-card h3 {
            font-size: 15px !important;
          }
          .wholesale-pillar-card ul {
            gap: 8px !important;
            font-size: 12px !important;
          }
          .wholesale-actions-group {
            flex-direction: column !important;
            gap: 10px !important;
            margin-bottom: 20px !important;
          }
          .wholesale-action-btn {
            width: 100% !important;
            justify-content: center !important;
            padding: 11px 20px !important;
            font-size: 13.5px !important;
          }
          .wholesale-trust-strip {
            font-size: 10.5px !important;
            gap: 8px !important;
            padding-top: 14px !important;
          }
        }
      `}</style>
    </section>
  );
};
