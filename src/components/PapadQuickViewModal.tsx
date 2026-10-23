import React, { useState } from 'react';
import { X, ShieldCheck, Clock, MessageCircle } from 'lucide-react';
import { PapadProduct } from '../data/papadProducts';
import { Language, Currency } from '../types';
import { formatPrice } from '../utils/currency';
import { CONTACT_INFO } from '../data/contactInfo';
import { getPapadName, getPapadSubtitle, getPapadOverview } from '../utils/translations';

interface PapadQuickViewModalProps {
  product: PapadProduct | null;
  onClose: () => void;
  language: Language;
  currency?: Currency;
}

export const PapadQuickViewModal: React.FC<PapadQuickViewModalProps> = ({
  product,
  onClose,
  language,
  currency = 'INR',
}) => {
  const [selectedPack, setSelectedPack] = useState<'100g' | '200g' | '500g'>('200g');
  const [activeImage, setActiveImage] = useState<'food' | 'label'>('food');

  if (!product) return null;

  const currentPrice = product.provisionalPrice[selectedPack];
  const displayName = getPapadName(product, language);
  const displaySubtitle = getPapadSubtitle(product, language);
  const displayOverview = getPapadOverview(product, language);

  const handleWhatsAppOrder = () => {
    const text = encodeURIComponent(
      `Hello Jyoti Enterprises / Jyotiraj Global! I would like to order ${displayName} (${product.name}), Pack Size: ${selectedPack} (Approx ${formatPrice(currentPrice, currency)}). Please share availability and delivery details.`
    );
    window.open(`https://wa.me/${CONTACT_INFO.whatsappRaw}?text=${text}`, '_blank');
  };

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 1000,
        backgroundColor: 'rgba(28, 8, 7, 0.72)',
        backdropFilter: 'blur(5px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '16px',
        animation: 'fadeIn 0.2s ease-out'
      }}
      onClick={onClose}
    >
      <div
        style={{
          backgroundColor: '#FFFFFF',
          borderRadius: '16px',
          maxWidth: '740px',
          width: '100%',
          maxHeight: '90vh',
          overflowY: 'auto',
          boxShadow: '0 24px 60px rgba(0,0,0,0.3)',
          border: '1px solid var(--color-antique-gold)',
          position: 'relative'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '14px',
            right: '14px',
            width: '34px',
            height: '34px',
            borderRadius: '50%',
            backgroundColor: 'rgba(0,0,0,0.06)',
            border: 'none',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            zIndex: 10,
            color: 'var(--color-espresso-brown)'
          }}
          aria-label="Close"
        >
          <X size={18} />
        </button>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '20px', padding: '24px' }}>
          {/* Left Column: Product Image & Label Toggle */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <div style={{
              borderRadius: '12px',
              overflow: 'hidden',
              border: '1px solid var(--color-border)',
              backgroundColor: '#FFFDF9',
              position: 'relative',
              boxShadow: '0 4px 14px rgba(0,0,0,0.06)'
            }}>
              <img
                src={activeImage === 'food' ? product.image : (product.labelImage || product.image)}
                alt={displayName}
                style={{
                  width: '100%',
                  height: '240px',
                  objectFit: activeImage === 'food' ? 'cover' : 'contain',
                  display: 'block',
                  backgroundColor: '#FFF'
                }}
              />
              <span style={{
                position: 'absolute',
                top: '10px',
                left: '10px',
                backgroundColor: 'var(--color-forest-green)',
                color: '#fff',
                fontSize: '10px',
                fontWeight: 700,
                padding: '3px 8px',
                borderRadius: '4px',
                letterSpacing: '0.4px',
                textTransform: 'uppercase'
              }}>
                {product.badge}
              </span>
            </div>

            {/* Thumbnail toggle: Dish Photo vs Packet Label */}
            {product.labelImage && (
              <div style={{ display: 'flex', gap: '8px' }}>
                <button
                  type="button"
                  onClick={() => setActiveImage('food')}
                  style={{
                    flex: 1,
                    padding: '7px 10px',
                    borderRadius: '8px',
                    border: activeImage === 'food' ? '2px solid var(--color-royal-maroon)' : '1px solid var(--color-border)',
                    backgroundColor: activeImage === 'food' ? 'rgba(107, 18, 15, 0.05)' : '#FFF',
                    cursor: 'pointer',
                    fontSize: '11px',
                    fontWeight: 700,
                    color: activeImage === 'food' ? 'var(--color-royal-maroon)' : 'var(--color-muted-text)',
                    transition: 'all 0.15s ease'
                  }}
                >
                  🍲 {language === 'mr' ? 'पदार्थ फोटो' : language === 'hi' ? 'व्यंजन फोटो' : 'Food Photo'}
                </button>
                <button
                  type="button"
                  onClick={() => setActiveImage('label')}
                  style={{
                    flex: 1,
                    padding: '7px 10px',
                    borderRadius: '8px',
                    border: activeImage === 'label' ? '2px solid var(--color-royal-maroon)' : '1px solid var(--color-border)',
                    backgroundColor: activeImage === 'label' ? 'rgba(107, 18, 15, 0.05)' : '#FFF',
                    cursor: 'pointer',
                    fontSize: '11px',
                    fontWeight: 700,
                    color: activeImage === 'label' ? 'var(--color-royal-maroon)' : 'var(--color-muted-text)',
                    transition: 'all 0.15s ease'
                  }}
                >
                  🏷️ {language === 'mr' ? 'पॅकिंग लेबल (FSSAI)' : language === 'hi' ? 'पैकेट लेबल (FSSAI)' : 'Packet Label'}
                </button>
              </div>
            )}

            {/* Quick Badges Strip */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              backgroundColor: '#F9F6F0',
              padding: '10px 14px',
              borderRadius: '10px',
              fontSize: '11.5px',
              color: 'var(--color-espresso-brown)'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <Clock size={14} color="var(--color-antique-gold-dark)" />
                <span>
                  {language === 'mr' ? 'टिकवण क्षमता:' : language === 'hi' ? 'सुरक्षित अवधि:' : 'Best for:'}{' '}
                  <strong>{language === 'mr' ? '८ महिने' : language === 'hi' ? '8 महीने' : '8 Months'}</strong>
                </span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <ShieldCheck size={14} color="var(--color-forest-green)" />
                <span>FSSAI Certified</span>
              </div>
            </div>
          </div>

          {/* Right Column: Details & Order Options */}
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              <div style={{
                fontSize: '11px',
                fontWeight: 700,
                color: 'var(--color-antique-gold-dark)',
                textTransform: 'uppercase',
                letterSpacing: '0.8px',
                marginBottom: '4px'
              }}>
                Meghare's Megha Madhur • Gruh Udyog
              </div>

              <h3 style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '22px',
                fontWeight: 800,
                color: 'var(--color-royal-maroon)',
                lineHeight: 1.2,
                marginBottom: '4px'
              }}>
                {displayName}
              </h3>

              <div style={{
                fontSize: '13px',
                color: 'var(--color-forest-green)',
                fontWeight: 700,
                marginBottom: '12px'
              }}>
                {displaySubtitle}
              </div>

              <p style={{
                fontSize: '13px',
                color: 'var(--color-espresso-brown)',
                lineHeight: 1.55,
                marginBottom: '14px'
              }}>
                {displayOverview}
              </p>

              {/* Ingredients Box */}
              <div style={{
                backgroundColor: 'rgba(247, 235, 212, 0.4)',
                border: '1px solid rgba(201, 149, 46, 0.3)',
                borderRadius: '10px',
                padding: '10px 12px',
                marginBottom: '16px'
              }}>
                <div style={{ fontSize: '11px', fontWeight: 700, color: 'var(--color-royal-maroon)', marginBottom: '4px', textTransform: 'uppercase' }}>
                  {language === 'mr' ? 'सामग्री (घटक)' : language === 'hi' ? 'सामग्री व घटक' : 'Pure Ingredients'}
                </div>
                <div style={{ fontSize: '12.5px', color: 'var(--color-espresso-brown)', lineHeight: 1.4 }}>
                  {product.ingredients.join(' • ')}
                </div>
              </div>

              {/* Pack Size Selector */}
              <div style={{ marginBottom: '16px' }}>
                <div style={{ fontSize: '12px', fontWeight: 700, color: 'var(--color-espresso-brown)', marginBottom: '8px' }}>
                  {language === 'mr' ? 'पॅक वजन निवडा:' : language === 'hi' ? 'पैक वजन चुनें:' : 'Select Pack Size:'}
                </div>
                <div style={{ display: 'flex', gap: '8px' }}>
                  {(['100g', '200g', '500g'] as const).map((pack) => (
                    <button
                      key={pack}
                      type="button"
                      onClick={() => setSelectedPack(pack)}
                      style={{
                        flex: 1,
                        padding: '8px 10px',
                        borderRadius: '8px',
                        border: selectedPack === pack ? '2px solid var(--color-royal-maroon)' : '1px solid var(--color-border)',
                        backgroundColor: selectedPack === pack ? 'rgba(107, 18, 15, 0.05)' : '#FFF',
                        color: selectedPack === pack ? 'var(--color-royal-maroon)' : 'var(--color-espresso-brown)',
                        fontWeight: 700,
                        fontSize: '12.5px',
                        cursor: 'pointer',
                        textAlign: 'center',
                        transition: 'all 0.2s'
                      }}
                    >
                      <div>{pack}</div>
                      <div style={{ fontSize: '11px', color: selectedPack === pack ? 'var(--color-royal-maroon)' : 'var(--color-muted-text)', marginTop: '2px' }}>
                        {formatPrice(product.provisionalPrice[pack], currency)}
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Price & Action Bottom */}
            <div>
              <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: '12px' }}>
                <div>
                  <span style={{ fontSize: '11px', color: 'var(--color-muted-text)', textTransform: 'uppercase' }}>
                    {language === 'mr' ? 'किंमत' : language === 'hi' ? 'मूल्य' : 'Price'} ({selectedPack}):{' '}
                  </span>
                  <span style={{ fontSize: '24px', fontWeight: 800, color: 'var(--color-royal-maroon)', marginLeft: '6px' }}>
                    {formatPrice(currentPrice, currency)}
                  </span>
                </div>
                <span style={{ fontSize: '11px', color: 'var(--color-forest-green)', fontWeight: 700 }}>
                  {language === 'mr' ? '✓ उपलब्ध • ताजी बॅच' : language === 'hi' ? '✓ उपलब्ध • ताजा बैच' : '✓ In Stock • Fresh Batch'}
                </span>
              </div>

              <button
                type="button"
                onClick={handleWhatsAppOrder}
                className="btn btn-whatsapp"
                style={{
                  width: '100%',
                  justifyContent: 'center',
                  padding: '12px 18px',
                  fontSize: '14px',
                  borderRadius: '10px',
                  fontWeight: 700,
                  boxShadow: '0 4px 14px rgba(37, 211, 102, 0.3)'
                }}
              >
                <MessageCircle size={18} />
                <span>
                  {language === 'mr'
                    ? `व्हॉट्सॲपवर ऑर्डर करा (${selectedPack})`
                    : language === 'hi'
                    ? `व्हाट्सएप पर ऑर्डर करें (${selectedPack})`
                    : `Order on WhatsApp (${selectedPack})`}
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
