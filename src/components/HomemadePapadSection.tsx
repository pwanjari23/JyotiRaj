import React, { useState } from 'react';
import { Eye, Clock, ShieldCheck, Sun, Sparkles } from 'lucide-react';
import { PAPAD_PRODUCTS, PapadProduct } from '../data/papadProducts';
import { Language, Currency } from '../types';
import { formatPrice } from '../utils/currency';
import { getPapadName, getPapadSubtitle } from '../utils/translations';
import { PapadQuickViewModal } from './PapadQuickViewModal';

interface HomemadePapadSectionProps {
  language: Language;
  currency?: Currency;
}

export const HomemadePapadSection: React.FC<HomemadePapadSectionProps> = ({
  language,
  currency = 'INR',
}) => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'kurdai' | 'papad' | 'vadi' | 'shevai'>('all');
  const [quickViewProduct, setQuickViewProduct] = useState<PapadProduct | null>(null);

  const filteredPapad = PAPAD_PRODUCTS.filter((p) => {
    if (activeFilter === 'all') return true;
    return p.category === activeFilter;
  });

  return (
    <div id="homemade-papads" className="homemade-papad-section" style={{
      marginTop: '56px',
      paddingTop: '48px',
      borderTop: '2px dashed rgba(201, 149, 46, 0.45)',
      position: 'relative'
    }}>
      {/* Section Header */}
      <div style={{ textAlign: 'center', maxWidth: '820px', margin: '0 auto 36px auto' }}>
        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '10px',
          marginBottom: '10px'
        }}>
          <span style={{ width: '32px', height: '1px', backgroundColor: 'var(--color-antique-gold)' }} />
          <span style={{
            color: 'var(--color-antique-gold-dark)',
            fontSize: '11.5px',
            fontWeight: 800,
            letterSpacing: '1.8px',
            textTransform: 'uppercase'
          }}>
            {language === 'mr'
              ? 'पारंपारिक घरगुती वाळवण व पापड'
              : language === 'hi'
              ? 'पारंपरिक घरेलू पापड़, कुरडई व मंगौड़ी'
              : 'HOMEMADE PAPADS, KURDAI & VALVAN'}
          </span>
          <span style={{ width: '32px', height: '1px', backgroundColor: 'var(--color-antique-gold)' }} />
        </div>

        <h3 style={{
          fontFamily: 'var(--font-heading)',
          fontSize: '32px',
          fontWeight: 800,
          color: 'var(--color-royal-maroon)',
          marginBottom: '12px',
          lineHeight: 1.25
        }}>
          {language === 'mr'
            ? 'मेघा मधुर अस्सल घरगुती पापड, कुरडई आणि मुंग वडी'
            : language === 'hi'
            ? 'मेघा मधुर पारंपरिक घरेलू पापड़, कुरडई और मूंग वड़ी'
            : "Meghare's Homemade Papads, Kurdai & Sun-Dried Delicacies"}
        </h3>

        <p style={{
          fontSize: '15px',
          color: 'var(--color-espresso-brown)',
          lineHeight: 1.6,
          maxWidth: '720px',
          margin: '0 auto'
        }}>
          {language === 'mr'
            ? 'ज्योती एंटरप्रायझेस, हिंगणघाट (वर्धा) निर्मित पारंपारिक उन्हात वाळवलेले अस्सल चविष्ट पदार्थ — १००% शुद्ध, नैसर्गिक व ८ महिने टिकणारे.'
            : language === 'hi'
            ? 'ज्योति एंटरप्राइजेज, हिंगणघाट (वर्धा) द्वारा निर्मित धूप में सुखाए गए शुद्ध घरेलू व्यंजन — 100% प्राकृतिक और 8 महीने तक सुरक्षित।'
            : 'Artisanal sun-dried delicacies crafted by Jyoti Enterprises in Hinganghat (Wardha) using time-honored recipes — 100% natural, sun-dried & shelf-stable for 8 months.'}
        </p>

        {/* Filter Pills */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexWrap: 'wrap',
          gap: '8px',
          marginTop: '22px'
        }}>
          {[
            {
              id: 'all',
              label: language === 'mr' ? 'सर्व वाळवण (All)' : language === 'hi' ? 'सभी उत्पाद (All)' : 'All Specialties'
            },
            {
              id: 'kurdai',
              label: language === 'mr' ? 'गव्हाची कुरडई' : language === 'hi' ? 'गेहूं की कुरडई' : 'Wheat Kurdai'
            },
            {
              id: 'papad',
              label: language === 'mr' ? 'घरगुती पापड' : language === 'hi' ? 'घरेलू पापड़' : 'Papads'
            },
            {
              id: 'vadi',
              label: language === 'mr' ? 'मुंग वडी' : language === 'hi' ? 'मूंग वड़ी' : 'Moong Vadi'
            },
            {
              id: 'shevai',
              label: language === 'mr' ? 'शेवई व सरगुंडे' : language === 'hi' ? 'सेंवई व सरगुंडे' : 'Shevai & Sargunde'
            },
          ].map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveFilter(tab.id as any)}
              style={{
                padding: '6px 14px',
                borderRadius: '9999px',
                fontSize: '12.5px',
                fontWeight: 700,
                border: activeFilter === tab.id ? '1px solid var(--color-royal-maroon)' : '1px solid var(--color-border)',
                backgroundColor: activeFilter === tab.id ? 'var(--color-royal-maroon)' : '#FFFFFF',
                color: activeFilter === tab.id ? '#FFFFFF' : 'var(--color-espresso-brown)',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                boxShadow: activeFilter === tab.id ? '0 2px 8px rgba(107, 18, 15, 0.25)' : 'none'
              }}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Product Grid: EXACT same layout, columns, gap and max-width as Laddu cards */}
      <div className="product-grid-5">
        {filteredPapad.map((prod) => {
          const defaultPack = '200g';
          const price = prod.provisionalPrice[defaultPack];
          const displayName = getPapadName(prod, language);
          const displaySubtitle = getPapadSubtitle(prod, language);

          return (
            <div
              key={prod.id}
              className="card-premium"
              onClick={() => setQuickViewProduct(prod)}
              style={{
                display: 'flex',
                flexDirection: 'column',
                backgroundColor: 'var(--color-pure-white)',
                borderRadius: '14px',
                overflow: 'hidden',
                border: '1px solid rgba(230, 213, 185, 0.85)',
                boxShadow: '0 3px 14px rgba(67, 12, 10, 0.04)',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.boxShadow = '0 8px 24px rgba(107, 18, 15, 0.12)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 3px 14px rgba(67, 12, 10, 0.04)';
              }}
            >
              {/* Product Image Area: EXACT same height (170px), pure food photo without any text/logos */}
              <div style={{
                position: 'relative',
                width: '100%',
                height: '170px',
                overflow: 'hidden',
                backgroundColor: 'var(--color-pure-white)',
                borderBottom: '1px solid var(--color-border)',
                cursor: 'pointer'
              }}>
                <img
                  src={prod.image}
                  alt={displayName}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.5s ease'
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.06)')}
                  onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                />

                {/* Badge Tag */}
                <div style={{
                  position: 'absolute',
                  top: '7px',
                  left: '7px',
                  backgroundColor: 'var(--color-royal-maroon)',
                  color: 'var(--color-pure-white)',
                  fontSize: '9px',
                  fontWeight: 700,
                  letterSpacing: '0.3px',
                  padding: '2px 6px',
                  borderRadius: '4px',
                  textTransform: 'uppercase',
                  boxShadow: '0 2px 6px rgba(0,0,0,0.15)'
                }}>
                  {prod.badge}
                </div>

                {/* Quick View Button */}
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    setQuickViewProduct(prod);
                  }}
                  style={{
                    position: 'absolute',
                    top: '7px',
                    right: '7px',
                    width: '28px',
                    height: '28px',
                    borderRadius: '50%',
                    backgroundColor: 'rgba(255,255,255,0.94)',
                    border: '1px solid var(--color-border)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--color-espresso-brown)',
                    cursor: 'pointer',
                    boxShadow: '0 2px 6px rgba(0,0,0,0.1)'
                  }}
                  title={language === 'mr' ? 'माहिती पहा' : language === 'hi' ? 'विवरण देखें' : 'View Info'}
                  aria-label={`View info for ${displayName}`}
                >
                  <Eye size={13} />
                </button>
              </div>

              {/* Card Content Area: EXACT same structure & typography as laddu card */}
              <div className="product-card-body" style={{ padding: '10px 10px 12px 10px', display: 'flex', flexDirection: 'column', flex: 1 }}>
                <div style={{
                  fontSize: '9px',
                  fontWeight: 800,
                  color: 'var(--color-antique-gold-dark)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.6px',
                  marginBottom: '2px'
                }}>
                  {prod.categoryLabel}
                </div>

                <h3
                  className="product-card-title"
                  style={{
                    fontSize: '13.5px',
                    fontWeight: 800,
                    color: 'var(--color-royal-maroon)',
                    marginBottom: '4px',
                    cursor: 'pointer',
                    lineHeight: 1.25,
                    minHeight: '34px',
                    display: '-webkit-box',
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: 'vertical',
                    overflow: 'hidden'
                  }}
                >
                  {displayName}
                </h3>

                <p
                  className="product-card-subtitle"
                  style={{
                    fontSize: '11px',
                    color: 'var(--color-muted-text)',
                    lineHeight: 1.3,
                    marginBottom: '8px',
                    display: '-webkit-box',
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: 'vertical',
                    overflow: 'hidden',
                    minHeight: '28px'
                  }}
                >
                  {displaySubtitle}
                </p>

                {/* Price & Action Row: EXACT same as laddu card */}
                <div
                  className="product-card-actions"
                  style={{
                    marginTop: 'auto',
                    paddingTop: '8px',
                    borderTop: '1px solid rgba(230, 213, 185, 0.5)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: '4px'
                  }}
                >
                  <div>
                    <div
                      className="product-card-price"
                      style={{
                        fontSize: '15.5px',
                        fontWeight: 800,
                        fontFamily: 'var(--font-heading)',
                        color: 'var(--color-royal-maroon)',
                        lineHeight: 1.1
                      }}
                    >
                      {formatPrice(price, currency)}
                    </div>
                    <div style={{ fontSize: '9.5px', color: 'var(--color-muted-text)' }}>
                      {defaultPack} {language === 'mr' ? 'पॅक' : language === 'hi' ? 'पैक' : 'pack'}
                    </div>
                  </div>

                  <div>
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        setQuickViewProduct(prod);
                      }}
                      className="btn btn-primary product-card-view-btn"
                      style={{ padding: '5px 12px', fontSize: '11px', borderRadius: '9999px', gap: '4px' }}
                    >
                      <Eye size={12} />
                      <span>{language === 'mr' ? 'पहा' : language === 'hi' ? 'देखें' : 'View'}</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Trust & Heritage Banner Strip */}
      <div style={{
        marginTop: '36px',
        backgroundColor: '#FFFFFF',
        border: '1px solid rgba(201, 149, 46, 0.35)',
        borderRadius: '12px',
        padding: '16px 20px',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
        gap: '16px',
        boxShadow: '0 2px 10px rgba(0,0,0,0.03)',
        maxWidth: '1120px',
        margin: '36px auto 0 auto'
      }} className="papad-trust-strip">
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <Sun size={22} color="var(--color-antique-gold-dark)" />
          <div>
            <div style={{ fontSize: '12.5px', fontWeight: 700, color: 'var(--color-royal-maroon)' }}>
              {language === 'mr' ? '१००% उन्हात वाळवलेले' : language === 'hi' ? '100% धूप में सुखाया हुआ' : '100% Sun-Dried (उन्हात वाळवलेले)'}
            </div>
            <div style={{ fontSize: '11px', color: 'var(--color-muted-text)' }}>
              {language === 'mr' ? 'कोणत्याही केमिकल डिहायड्रेटरशिवाय' : language === 'hi' ? 'बिना किसी केमिकल डिहाइड्रेटर के' : 'Zero chemical dehydrators, authentic texture'}
            </div>
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <Sparkles size={22} color="var(--color-antique-gold-dark)" />
          <div>
            <div style={{ fontSize: '12.5px', fontWeight: 700, color: 'var(--color-royal-maroon)' }}>
              {language === 'mr' ? 'गावरान धान्य आणि सैंधव मीठ' : language === 'hi' ? 'शुद्ध देशी अनाज व सेंधा नमक' : 'Pure Farm Grains & Rock Salt'}
            </div>
            <div style={{ fontSize: '11px', color: 'var(--color-muted-text)' }}>
              {language === 'mr' ? 'लोकवन गहू, पांढरी ज्वारी आणि दर्जेदार डाळी' : language === 'hi' ? 'लोकवन गेहूं, सफेद ज्वार और बढ़िया दालें' : 'Lokwan wheat, white jowar & sendha namak'}
            </div>
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <Clock size={22} color="var(--color-antique-gold-dark)" />
          <div>
            <div style={{ fontSize: '12.5px', fontWeight: 700, color: 'var(--color-royal-maroon)' }}>
              {language === 'mr' ? '८ महिने टिकणारे' : language === 'hi' ? '8 महीने तक सुरक्षित' : '8 Months Shelf Life'}
            </div>
            <div style={{ fontSize: '11px', color: 'var(--color-muted-text)' }}>
              {language === 'mr' ? 'वर्षभर टिकणारा कुरकुरीतपणा' : language === 'hi' ? 'साल भर कुरकुरा रहने वाला स्वाद' : 'Naturally preserved for year-round crunch'}
            </div>
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <ShieldCheck size={22} color="var(--color-forest-green)" />
          <div>
            <div style={{ fontSize: '12.5px', fontWeight: 700, color: 'var(--color-royal-maroon)' }}>
              FSSAI Lic: 21520269000423
            </div>
            <div style={{ fontSize: '11px', color: 'var(--color-muted-text)' }}>
              Jyoti Enterprises, Hinganghat (Wardha)
            </div>
          </div>
        </div>
      </div>

      {/* Quick View Modal */}
      {quickViewProduct && (
        <PapadQuickViewModal
          product={quickViewProduct}
          onClose={() => setQuickViewProduct(null)}
          language={language}
          currency={currency}
        />
      )}
    </div>
  );
};
