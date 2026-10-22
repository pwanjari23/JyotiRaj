import React from 'react';
import { ShoppingBag, PhoneCall, ArrowRight } from 'lucide-react';
import { PageView, Language } from '../types';

interface FinalCTAProps {
  onNavigate: (page: PageView) => void;
  language: Language;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ onNavigate, language }) => {
  return (
    <section className="final-cta-section" style={{
      backgroundColor: 'var(--color-warm-ivory)',
      padding: '60px 0',
      position: 'relative',
      borderBottom: '1px solid var(--color-border)',
      textAlign: 'center'
    }}>
      <div className="container">
        <div className="final-cta-card" style={{
          maxWidth: '640px',
          margin: '0 auto',
          backgroundColor: 'var(--color-pure-white)',
          padding: '38px 28px',
          borderRadius: '20px',
          border: '1.5px solid var(--color-antique-gold)',
          boxShadow: '0 12px 32px rgba(67, 12, 10, 0.05)',
          position: 'relative'
        }}>
          <h2 className="final-cta-title" style={{
            fontFamily: 'var(--font-heading)',
            fontSize: 'clamp(24px, 2.6vw, 32px)',
            fontWeight: 800,
            color: 'var(--color-royal-maroon)',
            lineHeight: 1.25,
            marginBottom: '12px'
          }}>
            {language === 'mr'
              ? 'आपली आवडती पारंपारिक मिठाई शोधा'
              : language === 'hi'
              ? 'अपनी पसंदीदा पारंपरिक मिठाई खोजें'
              : 'Discover Your Favourite Indian Sweet'}
          </h2>

          <p className="final-cta-desc" style={{
            fontSize: '15px',
            color: 'var(--color-espresso-brown)',
            lineHeight: 1.6,
            marginBottom: '24px',
            maxWidth: '520px',
            margin: '0 auto 24px auto'
          }}>
            {language === 'mr'
              ? 'आमच्या संपूर्ण संग्रहाचा आस्वाद घ्या किंवा वैयक्तिक व घाऊक चौकशीसाठी आमच्या टीमशी थेट संवाद साधा.'
              : language === 'hi'
              ? 'हमारे संपूर्ण संग्रह का आनंद लें या व्यक्तिगत और थोक पूछताछ के लिए हमारी टीम से संपर्क करें।'
              : 'Explore our collection or connect with us for product and wholesale enquiries.'}
          </p>

          <div className="final-cta-actions" style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexWrap: 'wrap',
            gap: '14px'
          }}>
            <button
              onClick={() => onNavigate('shop')}
              className="btn btn-primary final-cta-btn"
              style={{ padding: '12px 24px', fontSize: '15px' }}
            >
              <ShoppingBag size={17} />
              <span>{language === 'mr' ? 'उत्पादने पहा' : language === 'hi' ? 'उत्पाद देखें' : 'Explore Products'}</span>
              <ArrowRight size={15} />
            </button>

            <button
              onClick={() => onNavigate('contact')}
              className="btn btn-secondary final-cta-btn"
              style={{ padding: '12px 24px', fontSize: '15px' }}
            >
              <PhoneCall size={17} />
              <span>{language === 'mr' ? 'संपर्क साधा' : language === 'hi' ? 'संपर्क करें' : 'Contact Our Team'}</span>
            </button>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .final-cta-section {
            padding: 30px 0 !important;
          }
          .final-cta-card {
            padding: 22px 16px !important;
            border-radius: 14px !important;
          }
          .final-cta-title {
            font-size: clamp(20px, 5vw, 24px) !important;
            margin-bottom: 8px !important;
          }
          .final-cta-desc {
            font-size: 13px !important;
            margin-bottom: 16px !important;
            line-height: 1.45 !important;
          }
          .final-cta-actions {
            gap: 10px !important;
          }
          .final-cta-btn {
            padding: 10px 18px !important;
            font-size: 13.5px !important;
            width: 100% !important;
          }
        }
      `}</style>
    </section>
  );
};
