import React from 'react';
import { ArrowRight, CheckCircle2, MessageCircle } from 'lucide-react';
import { PageView, Language } from '../types';

interface ProductSpotlightProps {
  onNavigate: (page: PageView, productSlug?: string) => void;
  language: Language;
}

export const ProductSpotlight: React.FC<ProductSpotlightProps> = ({ onNavigate, language }) => {
  const handleWhatsAppInquiry = () => {
    const text = encodeURIComponent(
      'Hello Jyotiraj Global! I am interested in your Dry Fruits Khajur Barfi and Roll assortments. Please provide details.'
    );
    window.open(`https://wa.me/919876543210?text=${text}`, '_blank');
  };

  return (
    <section style={{
      backgroundColor: 'var(--color-warm-ivory)',
      padding: '90px 0',
      borderBottom: '1px solid var(--color-border)',
      position: 'relative'
    }}>
      <div className="container">
        {/* Split Asymmetric Editorial Layout */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr',
          gap: '50px',
          alignItems: 'center',
        }} className="spotlight-grid">
          
          {/* Left Column: Rich Visual Presentation */}
          <div style={{ position: 'relative' }}>
            <div style={{
              position: 'relative',
              borderRadius: '20px',
              overflow: 'hidden',
              boxShadow: '0 20px 40px rgba(67, 12, 10, 0.1)',
              border: '2px solid var(--color-border)',
              backgroundColor: 'var(--color-pure-white)'
            }}>
              <img
                src="/assets/product_khajur_barfi.jpg"
                alt="Jyotiraj Dry Fruits Khajur Barfi in transparent protective container"
                style={{
                  width: '100%',
                  height: 'auto',
                  display: 'block',
                  objectFit: 'cover'
                }}
              />

              {/* Decorative Corner Label */}
              <div style={{
                position: 'absolute',
                bottom: '16px',
                right: '16px',
                backgroundColor: 'rgba(67, 12, 10, 0.92)',
                color: 'var(--color-warm-ivory)',
                padding: '8px 16px',
                borderRadius: '8px',
                fontSize: '12px',
                fontWeight: 700,
                letterSpacing: '1px',
                textTransform: 'uppercase',
                backdropFilter: 'blur(4px)'
              }}>
                Airlocked Food-Grade Box
              </div>
            </div>

            {/* Overlapping Secondary Card (Dry Fruits Khajur Roll slice) */}
            <div style={{
              position: 'absolute',
              top: '-25px',
              left: '-25px',
              width: '180px',
              borderRadius: '16px',
              overflow: 'hidden',
              boxShadow: '0 12px 30px rgba(0,0,0,0.18)',
              border: '3px solid var(--color-pure-white)',
              display: 'none'
            }} className="spotlight-overlap-card">
              <img
                src="/assets/product_khajur_roll.jpg"
                alt="Dry Fruits Khajur Roll Slice"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
          </div>

          {/* Right Column: Editorial Narrative & Specifications */}
          <div>
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
                {language === 'mr' ? 'विशेष उत्पादन दालन' : 'PRODUCT VARIETY SPOTLIGHT'}
              </span>
              <span style={{ width: '28px', height: '1px', backgroundColor: 'var(--color-antique-gold)' }} />
            </div>

            <h2 style={{
              fontFamily: 'var(--font-heading)',
              fontSize: '42px',
              fontWeight: 800,
              color: 'var(--color-royal-maroon)',
              lineHeight: 1.2,
              marginBottom: '20px'
            }}>
              {language === 'mr'
                ? 'प्रत्येक गोड क्षणासाठी, एक खास पारंपारिक भेट'
                : 'A Little Something for Every Sweet Moment'}
            </h2>

            <p style={{
              fontSize: '17px',
              color: 'var(--color-espresso-brown)',
              lineHeight: 1.7,
              marginBottom: '20px'
            }}>
              {language === 'mr'
                ? 'आमची ड्राय फ्रुट्स खजूर बर्फी आणि रोल म्हणजे सुकामेवा आणि खजुराचा उत्कृष्ट संगम. यात बदाम, काजू, पिस्ता आणि अक्रोडाचा कुरकुरीतपणा खजुराच्या नैसर्गिक गोडव्यात विलीन होतो.'
                : 'Our date-based sweets—such as the Dry Fruits Khajur Barfi and Khajur Roll—bring together prime quality dates, whole almonds, cashews, pistachios, and walnuts, complemented by toasted poppy seeds.'}
            </p>

            {/* Feature Bullets */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '32px' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                <CheckCircle2 size={20} color="var(--color-forest-green)" style={{ flexShrink: 0, marginTop: '2px' }} />
                <span style={{ fontSize: '15px', color: 'var(--color-espresso-brown)' }}>
                  <strong>Rich Date Matrix:</strong> Naturally sweetened by dates with zero artificial chemical syrups.
                </span>
              </div>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                <CheckCircle2 size={20} color="var(--color-forest-green)" style={{ flexShrink: 0, marginTop: '2px' }} />
                <span style={{ fontSize: '15px', color: 'var(--color-espresso-brown)' }}>
                  <strong>Generous Whole Nut Inclusions:</strong> Crunchy Californian almonds, Mangalorean cashews, and Kashmiri walnuts visible in every slice.
                </span>
              </div>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                <CheckCircle2 size={20} color="var(--color-forest-green)" style={{ flexShrink: 0, marginTop: '2px' }} />
                <span style={{ fontSize: '15px', color: 'var(--color-espresso-brown)' }}>
                  <strong>Hygienic Sealed Presentation:</strong> Packed in tamper-evident food containers engineered for freshness in domestic & international transit.
                </span>
              </div>
            </div>

            {/* Action Buttons */}
            <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: '16px' }}>
              <button
                onClick={() => onNavigate('product-detail', 'dry-fruits-khajur-barfi')}
                className="btn btn-primary btn-lg"
              >
                <span>Explore Khajur Barfi</span>
                <ArrowRight size={16} />
              </button>

              <button
                onClick={handleWhatsAppInquiry}
                className="btn btn-whatsapp-outline btn-lg"
              >
                <MessageCircle size={18} />
                <span>Inquire on WhatsApp</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (min-width: 992px) {
          .spotlight-grid {
            grid-template-columns: 1fr 1fr !important;
          }
          .spotlight-overlap-card {
            display: block !important;
          }
        }
      `}</style>
    </section>
  );
};
