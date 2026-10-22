import React, { useState } from 'react';
import { X, ShoppingBag, MessageCircle, ArrowRight, Check } from 'lucide-react';
import { Product, PageView, Language, Currency } from '../types';
import { formatPrice } from '../utils/currency';
import { getProductName, getProductSubtitle } from '../utils/translations';

interface QuickViewModalProps {
  product: Product | null;
  onClose: () => void;
  onAddToCart: (product: Product, packSize: '250g' | '500g' | '1kg', quantity: number) => void;
  onNavigate: (page: PageView, productSlug?: string) => void;
  language: Language;
  currency?: Currency;
}

export const QuickViewModal: React.FC<QuickViewModalProps> = ({
  product,
  onClose,
  onAddToCart,
  onNavigate,
  language,
  currency = 'INR',
}) => {
  const [packSize, setPackSize] = useState<'250g' | '500g' | '1kg'>('500g');
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  if (!product) return null;

  const price = product.provisionalPrice[packSize];

  const handleAdd = () => {
    onAddToCart(product, packSize, quantity);
    setAdded(true);
    setTimeout(() => {
      setAdded(false);
      onClose();
    }, 1200);
  };

  const handleWhatsApp = () => {
    const formatted = formatPrice(price * quantity, currency);
    const prodName = getProductName(product, language);
    const text = encodeURIComponent(
      `Hello Jyotiraj Global! I am interested in ${quantity}x ${prodName} (${packSize}) for ${formatted}. Please provide stock details.`
    );
    window.open(`https://wa.me/919876543210?text=${text}`, '_blank');
  };

  return (
    <div className="quickview-overlay" style={{
      position: 'fixed',
      inset: 0,
      backgroundColor: 'rgba(57, 35, 27, 0.65)',
      zIndex: 100,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '20px',
      backdropFilter: 'blur(3px)'
    }}>
      <div className="quickview-card" style={{
        backgroundColor: 'var(--color-warm-ivory)',
        borderRadius: '20px',
        maxWidth: '750px',
        width: '100%',
        maxHeight: '90vh',
        overflowY: 'auto',
        position: 'relative',
        boxShadow: '0 20px 50px rgba(0,0,0,0.3)',
        border: '1.5px solid var(--color-border)'
      }}>
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '16px',
            right: '16px',
            background: 'var(--color-pure-white)',
            border: '1px solid var(--color-border)',
            borderRadius: '50%',
            width: '36px',
            height: '36px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            zIndex: 10
          }}
          aria-label="Close"
        >
          <X size={18} />
        </button>

        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr',
          gap: '24px',
          padding: '30px'
        }} className="quickview-grid">
          {/* Image */}
          <div style={{
            borderRadius: '14px',
            overflow: 'hidden',
            backgroundColor: '#fff',
            border: '1px solid var(--color-border)'
          }}>
            <img
              src={product.image}
              alt={product.name}
              style={{ width: '100%', height: '100%', objectFit: 'cover', maxHeight: '360px' }}
            />
          </div>

          {/* Details */}
          <div>
            <div style={{ fontSize: '11px', color: 'var(--color-antique-gold-dark)', fontWeight: 700, textTransform: 'uppercase' }}>
              {product.categoryLabel}
            </div>
            <h3 style={{ fontSize: '24px', color: 'var(--color-royal-maroon)', marginTop: '4px', marginBottom: '8px' }}>
              {getProductName(product, language)}
            </h3>
            <p style={{ fontSize: '13.5px', color: 'var(--color-muted-text)', marginBottom: '16px' }}>
              {getProductSubtitle(product, language)}
            </p>

            <div style={{ fontSize: '26px', fontWeight: 800, color: 'var(--color-royal-maroon)', fontFamily: 'var(--font-heading)', marginBottom: '16px' }}>
              {formatPrice(price, currency)} <span style={{ fontSize: '12px', color: 'var(--color-muted-text)', fontWeight: 400 }}>/ {packSize}</span>
            </div>

            {/* Pack Size Buttons */}
            <div style={{ marginBottom: '14px' }}>
              <div style={{ fontSize: '12.5px', fontWeight: 700, marginBottom: '6px' }}>Pack Size:</div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '6px' }}>
                {(['250g', '500g', '1kg'] as const).map((s) => (
                  <button
                    key={s}
                    type="button"
                    onClick={() => setPackSize(s)}
                    style={{
                      padding: '8px 0',
                      borderRadius: '6px',
                      fontSize: '13px',
                      fontWeight: 700,
                      border: packSize === s ? '1.5px solid var(--color-royal-maroon)' : '1px solid var(--color-border)',
                      backgroundColor: packSize === s ? 'rgba(107, 18, 15, 0.08)' : '#fff',
                      color: packSize === s ? 'var(--color-royal-maroon)' : 'var(--color-espresso-brown)',
                      cursor: 'pointer'
                    }}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity Selector */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
              <span style={{ fontSize: '12.5px', fontWeight: 700, color: 'var(--color-espresso-brown)' }}>Quantity:</span>
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                backgroundColor: '#fff',
                border: '1px solid var(--color-border)',
                borderRadius: '6px',
                overflow: 'hidden'
              }}>
                <button
                  type="button"
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  style={{
                    width: '32px',
                    height: '30px',
                    border: 'none',
                    background: 'none',
                    fontSize: '16px',
                    fontWeight: 700,
                    cursor: 'pointer',
                    color: 'var(--color-royal-maroon)'
                  }}
                  aria-label="Decrease quantity"
                >
                  -
                </button>
                <span style={{ minWidth: '32px', textAlign: 'center', fontSize: '13px', fontWeight: 700 }}>
                  {quantity}
                </span>
                <button
                  type="button"
                  onClick={() => setQuantity((q) => q + 1)}
                  style={{
                    width: '32px',
                    height: '30px',
                    border: 'none',
                    background: 'none',
                    fontSize: '16px',
                    fontWeight: 700,
                    cursor: 'pointer',
                    color: 'var(--color-royal-maroon)'
                  }}
                  aria-label="Increase quantity"
                >
                  +
                </button>
              </div>
            </div>

            {/* Actions */}
            <div style={{ display: 'flex', gap: '10px', marginBottom: '16px' }}>
              <button
                onClick={handleAdd}
                className="btn btn-primary"
                style={{ flex: 1, justifyContent: 'center' }}
              >
                {added ? (
                  <>
                    <Check size={16} /> Added!
                  </>
                ) : (
                  <>
                    <ShoppingBag size={16} /> Add to Cart
                  </>
                )}
              </button>

              <button
                onClick={handleWhatsApp}
                className="btn btn-whatsapp"
                style={{ flex: 1, justifyContent: 'center' }}
              >
                <MessageCircle size={16} />
                <span>WhatsApp</span>
              </button>
            </div>

            <button
              onClick={() => {
                onClose();
                onNavigate('product-detail', product.slug);
              }}
              style={{
                width: '100%',
                background: 'none',
                border: 'none',
                color: 'var(--color-royal-maroon)',
                fontSize: '13.5px',
                fontWeight: 700,
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '6px'
              }}
            >
              <span>View full details & pure ingredients</span>
              <ArrowRight size={14} />
            </button>
          </div>
        </div>
      </div>

      <style>{`
        @media (min-width: 650px) {
          .quickview-grid {
            grid-template-columns: 1fr 1.1fr !important;
          }
        }
        @media (max-width: 649px) {
          .quickview-overlay {
            padding: 10px !important;
          }
          .quickview-card {
            border-radius: 16px !important;
          }
          .quickview-grid {
            padding: 20px 16px !important;
            gap: 16px !important;
          }
        }
      `}</style>
    </div>
  );
};
