import React, { useState } from 'react';
import { Eye } from 'lucide-react';
import { Product, PageView, Language, Currency } from '../types';
import { PRODUCTS, CATEGORIES } from '../data/products';
import { formatPrice } from '../utils/currency';
import { getProductName, getProductSubtitle, t } from '../utils/translations';
import { HomemadePapadSection } from './HomemadePapadSection';

interface SignatureCollectionProps {
  onNavigate: (page: PageView, productSlug?: string) => void;
  onAddToCart?: (product: Product, packSize: '250g' | '500g' | '1kg') => void;
  onQuickView: (product: Product) => void;
  language: Language;
  currency?: Currency;
  initialCategory?: string;
  backgroundColor?: string;
  padding?: string;
}

export const SignatureCollection: React.FC<SignatureCollectionProps> = ({
  onNavigate,
  onAddToCart,
  onQuickView,
  language,
  currency = 'INR',
  initialCategory = 'all',
  backgroundColor = 'var(--color-warm-ivory)',
  padding = '80px 0',
}) => {
  const [activeCategory, setActiveCategory] = useState<string>(initialCategory);
  const [selectedPackSizes] = useState<Record<string, '250g' | '500g' | '1kg'>>({
    'prod-1': '500g',
    'prod-2': '500g',
    'prod-3': '500g',
    'prod-4': '500g',
    'prod-5': '500g',
    'prod-6': '500g',
    'prod-7': '500g',
    'prod-8': '500g',
  });
  const filteredProducts = PRODUCTS.filter((item) => {
    if (activeCategory === 'all') return true;
    if (activeCategory === 'laddu') return item.category === 'laddu';
    if (activeCategory === 'roll-barfi') return item.category === 'roll-barfi';
    if (activeCategory === 'hamper') return true; // show all for festive hamper curation
    return true;
  });

  return (
    <section id="collection" className="signature-collection-section" style={{
      backgroundColor,
      padding,
      borderBottom: '1px solid var(--color-border)',
      position: 'relative'
    }}>
      <div className="container" style={{ maxWidth: '1400px' }}>
        {/* Section Header */}
        <div className="signature-collection-header" style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 44px auto' }}>
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
              {t('col_badge', language).toUpperCase()}
            </span>
            <span style={{ width: '36px', height: '1px', backgroundColor: 'var(--color-antique-gold)' }} />
          </div>

          <h2 className="section-title" style={{
            fontFamily: 'var(--font-heading)',
            fontSize: '40px',
            fontWeight: 800,
            color: 'var(--color-royal-maroon)',
            marginBottom: '16px'
          }}>
            {t('col_title', language)}
          </h2>

          <p className="section-subtitle" style={{
            fontSize: '17px',
            color: 'var(--color-muted-text)',
            lineHeight: 1.6
          }}>
            {t('col_subtitle', language)}
          </p>

          {/* Category Filter Tabs */}
          <div className="signature-category-tabs" style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexWrap: 'wrap',
            gap: '10px',
            marginTop: '32px'
          }}>
            {CATEGORIES.map((cat) => {
              const label = cat.id === 'all'
                ? t('cat_all', language)
                : cat.id === 'laddu'
                ? t('cat_laddu', language)
                : cat.id === 'roll-barfi'
                ? t('cat_roll_barfi', language)
                : t('cat_hamper', language);
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className="signature-category-tab-btn"
                  style={{
                    padding: '9px 20px',
                    borderRadius: '9999px',
                    border: activeCategory === cat.id ? '1px solid var(--color-royal-maroon)' : '1px solid var(--color-border)',
                    backgroundColor: activeCategory === cat.id ? 'var(--color-royal-maroon)' : 'var(--color-pure-white)',
                    color: activeCategory === cat.id ? 'var(--color-pure-white)' : 'var(--color-espresso-brown)',
                    fontFamily: 'var(--font-body)',
                    fontSize: '14px',
                    fontWeight: 700,
                    cursor: 'pointer',
                    boxShadow: activeCategory === cat.id ? '0 4px 12px rgba(107, 18, 15, 0.2)' : '0 2px 6px rgba(0,0,0,0.02)',
                    transition: 'var(--transition-smooth)'
                  }}
                >
                  {label}
                </button>
              );
            })}

            <button
              type="button"
              onClick={() => {
                const el = document.getElementById('homemade-papads');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              className="signature-category-tab-btn"
              style={{
                padding: '9px 18px',
                borderRadius: '9999px',
                border: '1px solid var(--color-antique-gold)',
                backgroundColor: 'rgba(247, 235, 212, 0.75)',
                color: 'var(--color-royal-maroon)',
                fontFamily: 'var(--font-body)',
                fontSize: '13.5px',
                fontWeight: 700,
                cursor: 'pointer',
                boxShadow: '0 2px 6px rgba(0,0,0,0.02)',
                transition: 'var(--transition-smooth)',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px'
              }}
            >
              <span>{language === 'mr' ? 'अस्सल पापड व कुरडई' : 'Homemade Papads & Kurdai'}</span>
              <span style={{ fontSize: '10px', backgroundColor: 'var(--color-royal-maroon)', color: '#fff', padding: '1px 7px', borderRadius: '8px', fontWeight: 800 }}>New</span>
            </button>
          </div>
        </div>

        {/* 5-Column Compact Product Grid */}
        <div className="product-grid-5">
          {filteredProducts.map((product) => {
            const currentSize = selectedPackSizes[product.id] || '500g';
            const price = product.provisionalPrice[currentSize];

            return (
              <div
                key={product.id}
                className="card-premium"
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  backgroundColor: 'var(--color-pure-white)',
                  borderRadius: '14px',
                  overflow: 'hidden',
                  border: '1px solid rgba(230, 213, 185, 0.85)',
                  boxShadow: '0 3px 14px rgba(67, 12, 10, 0.04)',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease'
                }}
              >
                {/* Product Image Area (Compact height instead of huge 1/1 square) */}
                <div style={{
                  position: 'relative',
                  width: '100%',
                  height: '170px',
                  overflow: 'hidden',
                  backgroundColor: 'var(--color-pure-white)',
                  borderBottom: '1px solid var(--color-border)',
                  cursor: 'pointer'
                }}
                onClick={() => onNavigate('product-detail', product.slug)}
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      transition: 'transform 0.5s ease'
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.06)')}
                    onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                  />

                  {/* Badge */}
                  {product.badge && (
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
                      textTransform: 'uppercase'
                    }}>
                      {product.badge}
                    </div>
                  )}

                  {/* Quick View Button */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onQuickView(product);
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
                    title="Quick View"
                    aria-label={`Quick View ${product.name}`}
                  >
                    <Eye size={13} />
                  </button>
                </div>

                {/* Card Content Area (Compact, refined) */}
                <div className="product-card-body" style={{ padding: '10px 10px 12px 10px', display: 'flex', flexDirection: 'column', flex: 1 }}>
                  <div style={{
                    fontSize: '9px',
                    fontWeight: 800,
                    color: 'var(--color-antique-gold-dark)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.6px',
                    marginBottom: '2px'
                  }}>
                    {product.categoryLabel}
                  </div>

                  <h3
                    className="product-card-title"
                    onClick={() => onNavigate('product-detail', product.slug)}
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
                    {getProductName(product, language)}
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
                    {getProductSubtitle(product, language)}
                  </p>

                  {/* Price & Action Row */}
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
                        {language === 'mr' ? '५०० ग्रॅम पॅक' : language === 'hi' ? '५०० ग्राम पैक' : '500g pack'}
                      </div>
                    </div>

                    <div>
                      <button
                        onClick={() => onNavigate('product-detail', product.slug)}
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

        {/* Dedicated Section: Meghare's Homemade Papads, Kurdai & Sun-Dried Delicacies */}
        <HomemadePapadSection language={language} currency={currency} />
      </div>

      <style>{`
        @media (max-width: 768px) {
          .signature-collection-section {
            padding: 36px 0 !important;
          }
          .signature-collection-header {
            margin-bottom: 24px !important;
          }
          .signature-collection-header .section-title {
            font-size: clamp(23px, 6vw, 28px) !important;
            margin-bottom: 8px !important;
          }
          .signature-collection-header .section-subtitle {
            font-size: 13.5px !important;
            line-height: 1.45 !important;
          }
          .signature-category-tabs {
            flex-wrap: nowrap !important;
            overflow-x: auto !important;
            justify-content: flex-start !important;
            padding: 4px 2px 6px 2px !important;
            margin-top: 18px !important;
            gap: 8px !important;
            -webkit-overflow-scrolling: touch;
            scrollbar-width: none;
          }
          .signature-category-tabs::-webkit-scrollbar {
            display: none;
          }
          .signature-category-tab-btn {
            flex-shrink: 0 !important;
            padding: 7px 14px !important;
            font-size: 12.5px !important;
          }
          .product-card-body {
            padding: 10px 8px !important;
          }
          .product-card-title {
            font-size: 13px !important;
            min-height: 32px !important;
            line-height: 1.2 !important;
            margin-bottom: 4px !important;
          }
          .product-card-subtitle {
            font-size: 10.5px !important;
            line-height: 1.25 !important;
            margin-bottom: 6px !important;
            display: -webkit-box !important;
            -webkit-line-clamp: 1 !important;
            -webkit-box-orient: vertical !important;
            overflow: hidden !important;
          }
          .product-card-actions {
            padding-top: 8px !important;
          }
          .product-card-price {
            font-size: 15px !important;
          }
          .product-card-view-btn {
            padding: 5px 10px !important;
            font-size: 11px !important;
          }
        }
      `}</style>
    </section>
  );
};
