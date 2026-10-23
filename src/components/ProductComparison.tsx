import React, { useState } from 'react';
import { PageView, Language } from '../types';
import { PRODUCTS } from '../data/products';
import { ArrowRight, Tag, Nut, Sparkles, Layers, Award, Eye } from 'lucide-react';
import { getProductName, t } from '../utils/translations';

interface ProductComparisonProps {
  onNavigate: (page: PageView, productSlug?: string) => void;
  language: Language;
  backgroundColor?: string;
}

export const ProductComparison: React.FC<ProductComparisonProps> = ({
  onNavigate,
  language,
  backgroundColor = 'var(--color-warm-ivory)',
}) => {
  const [selectedMobileProduct, setSelectedMobileProduct] = useState(0);

  return (
    <section className="product-comparison-section" style={{
      backgroundColor,
      padding: '80px 0',
      borderBottom: '1px solid var(--color-border)',
      position: 'relative'
    }}>
      <div className="container">
        {/* Header */}
        <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 40px auto' }}>
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
              {t('comp_badge', language).toUpperCase()}
            </span>
            <span style={{ width: '28px', height: '1px', backgroundColor: 'var(--color-antique-gold)' }} />
          </div>

          <h2 style={{
            fontFamily: 'var(--font-heading)',
            fontSize: '38px',
            fontWeight: 800,
            color: 'var(--color-royal-maroon)',
            marginBottom: '16px'
          }}>
            {t('comp_title', language)}
          </h2>

          <p style={{
            fontSize: '16px',
            color: 'var(--color-muted-text)',
            lineHeight: 1.6
          }}>
            {t('comp_subtitle', language)}
          </p>
        </div>

        {/* Desktop Comparison Table (Table Design A) */}
        <div style={{
          display: 'none',
          overflowX: 'auto',
          borderRadius: '16px',
          border: '1.5px solid rgba(201, 149, 46, 0.45)',
          backgroundColor: '#FFFDF9',
          boxShadow: '0 8px 30px rgba(67, 12, 10, 0.05)'
        }} className="desktop-table-container">
          <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'center', minWidth: '1060px' }}>
            <thead>
              <tr style={{
                background: 'linear-gradient(180deg, #F9F1E2 0%, #F3E4C8 100%)',
                borderBottom: '2px solid rgba(201, 149, 46, 0.35)'
              }}>
                <th style={{
                  padding: '24px 20px',
                  width: '210px',
                  backgroundColor: 'rgba(247, 235, 212, 0.5)',
                  borderRight: '1px solid rgba(201, 149, 46, 0.3)'
                }}>
                  {/* Empty corner header */}
                </th>
                {PRODUCTS.map((p) => (
                  <th key={p.id} style={{
                    padding: '22px 14px',
                    width: '18%',
                    verticalAlign: 'top',
                    borderRight: '1px solid rgba(201, 149, 46, 0.25)'
                  }}>
                    <div style={{
                      width: '74px',
                      height: '74px',
                      borderRadius: '50%',
                      margin: '0 auto 10px auto',
                      border: '2.5px solid var(--color-antique-gold)',
                      padding: '3px',
                      backgroundColor: '#FFFFFF',
                      boxShadow: '0 4px 12px rgba(201, 149, 46, 0.25)'
                    }}>
                      <img
                        src={p.image}
                        alt={p.name}
                        style={{
                          width: '100%',
                          height: '100%',
                          borderRadius: '50%',
                          objectFit: 'cover'
                        }}
                      />
                    </div>
                    <div style={{
                      fontFamily: 'var(--font-heading)',
                      fontSize: '15px',
                      fontWeight: 800,
                      color: 'var(--color-royal-maroon)',
                      lineHeight: 1.25
                    }}>
                      {getProductName(p, language).replace('Jyotiraj ', '').replace('ज्योतीराज ', '')}
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {/* Row 1: Category */}
              <tr style={{
                borderBottom: '1px solid rgba(230, 213, 185, 0.5)',
                backgroundColor: '#FFFFFF'
              }}>
                <td style={{
                  padding: '16px 20px',
                  textAlign: 'left',
                  fontWeight: 700,
                  fontSize: '14.5px',
                  color: 'var(--color-royal-maroon)',
                  backgroundColor: 'rgba(247, 235, 212, 0.45)',
                  borderRight: '1px solid rgba(201, 149, 46, 0.3)'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <Tag size={17} color="var(--color-antique-gold-dark)" />
                    <span>Category</span>
                  </div>
                </td>
                {PRODUCTS.map((p) => (
                  <td key={p.id} style={{
                    padding: '16px 12px',
                    borderRight: '1px solid rgba(230, 213, 185, 0.4)'
                  }}>
                    <span style={{
                      display: 'inline-block',
                      backgroundColor: '#F5EFE6',
                      color: 'var(--color-espresso-brown)',
                      padding: '5px 12px',
                      borderRadius: '9999px',
                      fontSize: '12.5px',
                      fontWeight: 700
                    }}>
                      {p.categoryLabel}
                    </span>
                  </td>
                ))}
              </tr>

              {/* Row 2: Ingredients */}
              <tr style={{
                borderBottom: '1px solid rgba(230, 213, 185, 0.5)',
                backgroundColor: 'rgba(255, 248, 237, 0.65)'
              }}>
                <td style={{
                  padding: '16px 20px',
                  textAlign: 'left',
                  fontWeight: 700,
                  fontSize: '14.5px',
                  color: 'var(--color-royal-maroon)',
                  backgroundColor: 'rgba(247, 235, 212, 0.45)',
                  borderRight: '1px solid rgba(201, 149, 46, 0.3)'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <Nut size={17} color="var(--color-antique-gold-dark)" />
                    <span>Ingredients</span>
                  </div>
                </td>
                {PRODUCTS.map((p) => (
                  <td key={p.id} style={{
                    padding: '16px 14px',
                    fontSize: '13px',
                    color: 'var(--color-espresso-brown)',
                    lineHeight: 1.5,
                    borderRight: '1px solid rgba(230, 213, 185, 0.4)'
                  }}>
                    {p.id === 'prod-1' && 'Mixed nuts, dried fruits, seeds'}
                    {p.id === 'prod-2' && 'Dates, almonds, cashews, pista, poppy'}
                    {p.id === 'prod-3' && 'Nuts, dates, chia, flax & pumpkin seeds'}
                    {p.id === 'prod-4' && 'Nuts, dates, sesame, figs & spices'}
                    {p.id === 'prod-5' && 'Dates, almonds, cashews, pista, walnuts'}
                    {p.id === 'prod-6' && 'Toasted sesame, pure cow ghee, dates/jaggery'}
                    {p.id === 'prod-7' && 'Roasted peanuts, jaggery, pure cow ghee'}
                    {p.id === 'prod-8' && 'Gond, dry fruits, cow ghee & maternal herbs'}
                  </td>
                ))}
              </tr>

              {/* Row 3: Expected Flavour (Shape row removed as requested) */}
              <tr style={{
                borderBottom: '1px solid rgba(230, 213, 185, 0.5)',
                backgroundColor: '#FFFFFF'
              }}>
                <td style={{
                  padding: '16px 20px',
                  textAlign: 'left',
                  fontWeight: 700,
                  fontSize: '14.5px',
                  color: 'var(--color-royal-maroon)',
                  backgroundColor: 'rgba(247, 235, 212, 0.45)',
                  borderRight: '1px solid rgba(201, 149, 46, 0.3)'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <Sparkles size={17} color="var(--color-antique-gold-dark)" />
                    <span>Flavour</span>
                  </div>
                </td>
                {PRODUCTS.map((p) => (
                  <td key={p.id} style={{
                    padding: '16px 14px',
                    fontSize: '13px',
                    color: 'var(--color-espresso-brown)',
                    lineHeight: 1.45,
                    borderRight: '1px solid rgba(230, 213, 185, 0.4)'
                  }}>
                    {p.expectedFlavour}
                  </td>
                ))}
              </tr>

              {/* Row 4: Expected Texture */}
              <tr style={{
                borderBottom: '1px solid rgba(230, 213, 185, 0.5)',
                backgroundColor: 'rgba(255, 248, 237, 0.65)'
              }}>
                <td style={{
                  padding: '16px 20px',
                  textAlign: 'left',
                  fontWeight: 700,
                  fontSize: '14.5px',
                  color: 'var(--color-royal-maroon)',
                  backgroundColor: 'rgba(247, 235, 212, 0.45)',
                  borderRight: '1px solid rgba(201, 149, 46, 0.3)'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <Layers size={17} color="var(--color-antique-gold-dark)" />
                    <span>Texture</span>
                  </div>
                </td>
                {PRODUCTS.map((p) => (
                  <td key={p.id} style={{
                    padding: '16px 14px',
                    fontSize: '13px',
                    color: 'var(--color-espresso-brown)',
                    borderRight: '1px solid rgba(230, 213, 185, 0.4)'
                  }}>
                    {p.expectedTexture}
                  </td>
                ))}
              </tr>

              {/* Row 5: Suggested Positioning */}
              <tr style={{
                borderBottom: '1px solid rgba(230, 213, 185, 0.5)',
                backgroundColor: '#FFFFFF'
              }}>
                <td style={{
                  padding: '16px 20px',
                  textAlign: 'left',
                  fontWeight: 700,
                  fontSize: '14.5px',
                  color: 'var(--color-royal-maroon)',
                  backgroundColor: 'rgba(247, 235, 212, 0.45)',
                  borderRight: '1px solid rgba(201, 149, 46, 0.3)'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <Award size={17} color="var(--color-antique-gold-dark)" />
                    <span>Positioning</span>
                  </div>
                </td>
                {PRODUCTS.map((p) => (
                  <td key={p.id} style={{
                    padding: '16px 12px',
                    borderRight: '1px solid rgba(230, 213, 185, 0.4)'
                  }}>
                    <span style={{
                      display: 'inline-block',
                      backgroundColor: 'rgba(24, 85, 46, 0.08)',
                      color: 'var(--color-forest-green)',
                      border: '1px solid rgba(24, 85, 46, 0.22)',
                      padding: '5px 12px',
                      borderRadius: '9999px',
                      fontSize: '12px',
                      fontWeight: 700
                    }}>
                      {p.suggestedPositioning}
                    </span>
                  </td>
                ))}
              </tr>

              {/* Row 6: Actions (View Details Buttons) */}
              <tr style={{
                backgroundColor: 'rgba(255, 248, 237, 0.65)'
              }}>
                <td style={{
                  padding: '18px 20px',
                  textAlign: 'left',
                  fontWeight: 700,
                  fontSize: '14.5px',
                  color: 'var(--color-royal-maroon)',
                  backgroundColor: 'rgba(247, 235, 212, 0.45)',
                  borderRight: '1px solid rgba(201, 149, 46, 0.3)'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <Eye size={17} color="var(--color-antique-gold-dark)" />
                    <span>Actions</span>
                  </div>
                </td>
                {PRODUCTS.map((p) => (
                  <td key={p.id} style={{
                    padding: '18px 14px',
                    borderRight: '1px solid rgba(230, 213, 185, 0.4)'
                  }}>
                    <button
                      type="button"
                      onClick={() => onNavigate('product-detail', p.slug)}
                      className="btn btn-primary"
                      style={{
                        padding: '8px 16px',
                        fontSize: '12.5px',
                        fontWeight: 700,
                        borderRadius: '9999px',
                        display: 'inline-flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '6px',
                        boxShadow: '0 3px 10px rgba(107, 18, 15, 0.2)'
                      }}
                    >
                      <span>View Details</span>
                      <ArrowRight size={13} />
                    </button>
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>

        {/* Mobile Interactive Tab View */}
        <div style={{ display: 'none' }} className="mobile-comparison-view">
          <div style={{ display: 'flex', gap: '8px', overflowX: 'auto', paddingBottom: '12px', marginBottom: '20px' }}>
            {PRODUCTS.map((p, idx) => (
              <button
                key={p.id}
                onClick={() => setSelectedMobileProduct(idx)}
                style={{
                  padding: '8px 16px',
                  borderRadius: '8px',
                  fontSize: '13px',
                  fontWeight: 700,
                  border: selectedMobileProduct === idx ? '1px solid var(--color-royal-maroon)' : '1px solid var(--color-border)',
                  backgroundColor: selectedMobileProduct === idx ? 'var(--color-royal-maroon)' : 'var(--color-pure-white)',
                  color: selectedMobileProduct === idx ? '#fff' : 'var(--color-espresso-brown)',
                  whiteSpace: 'nowrap',
                  cursor: 'pointer'
                }}
              >
                {p.name.replace('Jyotiraj ', '')}
              </button>
            ))}
          </div>

          {/* Active Card for Mobile */}
          {(() => {
            const p = PRODUCTS[selectedMobileProduct];
            return (
              <div style={{
                backgroundColor: 'var(--color-pure-white)',
                border: '1px solid var(--color-border)',
                borderRadius: '12px',
                padding: '24px',
                boxShadow: '0 4px 16px rgba(0,0,0,0.04)'
              }}>
                <div style={{ display: 'flex', gap: '16px', marginBottom: '18px' }}>
                  <img
                    src={p.image}
                    alt={p.name}
                    style={{ width: '80px', height: '80px', borderRadius: '50%', objectFit: 'cover', border: '2px solid var(--color-antique-gold)' }}
                  />
                  <div>
                    <h4 style={{ fontSize: '18px', color: 'var(--color-royal-maroon)' }}>{p.name}</h4>
                    <div style={{ fontSize: '13px', color: 'var(--color-muted-text)' }}>{p.categoryLabel}</div>
                    <div style={{ fontSize: '14px', fontWeight: 700, color: 'var(--color-forest-green)', marginTop: '4px' }}>
                      {p.suggestedPositioning}
                    </div>
                  </div>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '14px', marginBottom: '20px' }}>
                  <div><strong>Flavour:</strong> {p.expectedFlavour}</div>
                  <div><strong>Texture:</strong> {p.expectedTexture}</div>
                </div>

                <button
                  onClick={() => onNavigate('product-detail', p.slug)}
                  className="btn btn-primary"
                  style={{ width: '100%', justifyContent: 'center' }}
                >
                  <span>View Details</span>
                  <ArrowRight size={16} />
                </button>
              </div>
            );
          })()}
        </div>

        {/* Disclaimer Note */}
        <div style={{
          marginTop: '24px',
          textAlign: 'center',
          fontSize: '12.5px',
          color: 'var(--color-muted-text)',
          fontStyle: 'italic'
        }}>
          * Note: All our sweets are handcrafted in small batches using 100% natural dry fruits, pure desi cow ghee, and soft dates with zero added white sugar.
        </div>
      </div>

      <style>{`
        @media (min-width: 900px) {
          .desktop-table-container {
            display: block !important;
          }
        }
        @media (max-width: 899px) {
          .product-comparison-section {
            padding: 36px 0 !important;
          }
          .mobile-comparison-view {
            display: block !important;
          }
        }
      `}</style>
    </section>
  );
};
