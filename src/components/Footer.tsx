import React from 'react';
import { PageView, Language } from '../types';
import { PRODUCTS } from '../data/products';
import { MessageCircle, ArrowUp } from 'lucide-react';
import { InstagramIcon, FacebookIcon, YoutubeIcon } from './SocialIcons';

interface FooterProps {
  onNavigate: (page: PageView, productSlug?: string) => void;
  language: Language;
}

const CURRENT_YEAR = new Date().getFullYear();

export const Footer: React.FC<FooterProps> = ({ onNavigate, language }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleWhatsAppClick = () => {
    const text = encodeURIComponent('Hello Jyotiraj Global Company! I would like to get in touch.');
    window.open(`https://wa.me/919876543210?text=${text}`, '_blank');
  };

  return (
    <footer className="site-footer" style={{
      backgroundColor: 'var(--color-deep-burgundy)',
      color: 'var(--color-warm-ivory)',
      paddingTop: '32px',
      paddingBottom: '18px',
      borderTop: '2px solid var(--color-antique-gold)',
      position: 'relative'
    }}>
      <div className="container">
        {/* Top Footer Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '24px',
          marginBottom: '20px'
        }}>
          {/* Col 1: Brand & Bio */}
          <div style={{ maxWidth: '300px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
              <div style={{
                width: '38px',
                height: '38px',
                borderRadius: '50%',
                overflow: 'hidden',
                border: '2px solid var(--color-antique-gold)',
                backgroundColor: '#fff',
                flexShrink: 0
              }}>
                <img src="/assets/logo.jpg" alt="Jyotiraj Global" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <div>
                <div style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '17px',
                  fontWeight: 800,
                  color: 'var(--color-warm-ivory)',
                  letterSpacing: '0.6px',
                  lineHeight: 1.15
                }}>
                  JYOTIRAJ
                </div>
                <div style={{
                  fontSize: '9px',
                  letterSpacing: '0.8px',
                  color: 'var(--color-antique-gold-light)',
                  fontWeight: 700
                }}>
                  GLOBAL COMPANY – GRUH UDYOG
                </div>
              </div>
            </div>

            <p style={{
              fontSize: '12.5px',
              color: 'rgba(255, 248, 237, 0.75)',
              lineHeight: 1.45,
              marginBottom: '12px'
            }}>
              {language === 'mr'
                ? '१००% शुद्ध गाईचे तूप, सुकामेवा आणि खजुरापासून बनवलेली अस्सल पारंपारिक भारतीय मिठाई.'
                : language === 'hi'
                ? '१००% शुद्ध गाय के घी, मेवे और खजूर से निर्मित प्रामाणिक पारंपरिक भारतीय मिठाई।'
                : 'Authentic Indian dry-fruit sweets handcrafted with 100% pure cow ghee, dates, and zero white sugar.'}
            </p>

            {/* Social Icons */}
            <div style={{ display: 'flex', gap: '8px' }}>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" style={{
                width: '30px',
                height: '30px',
                borderRadius: '50%',
                backgroundColor: 'rgba(255,255,255,0.08)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--color-warm-ivory)',
                border: '1px solid rgba(201, 149, 46, 0.3)'
              }} aria-label="Instagram">
                <InstagramIcon size={14} color="var(--color-warm-ivory)" />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" style={{
                width: '30px',
                height: '30px',
                borderRadius: '50%',
                backgroundColor: 'rgba(255,255,255,0.08)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--color-warm-ivory)',
                border: '1px solid rgba(201, 149, 46, 0.3)'
              }} aria-label="Facebook">
                <FacebookIcon size={14} color="var(--color-warm-ivory)" />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" style={{
                width: '30px',
                height: '30px',
                borderRadius: '50%',
                backgroundColor: 'rgba(255,255,255,0.08)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--color-warm-ivory)',
                border: '1px solid rgba(201, 149, 46, 0.3)'
              }} aria-label="YouTube">
                <YoutubeIcon size={14} color="var(--color-warm-ivory)" />
              </a>
            </div>
          </div>

          {/* Col 2: Products */}
          <div>
            <h4 style={{
              color: 'var(--color-antique-gold)',
              fontSize: '14px',
              fontWeight: 700,
              letterSpacing: '0.8px',
              textTransform: 'uppercase',
              marginBottom: '10px'
            }}>
              Our Sweets
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '6px', margin: 0, padding: 0 }}>
              {PRODUCTS.map((prod) => (
                <li key={prod.id}>
                  <button
                    onClick={() => onNavigate('product-detail', prod.slug)}
                    style={{
                      background: 'none',
                      border: 'none',
                      color: 'rgba(255, 248, 237, 0.8)',
                      fontSize: '13px',
                      cursor: 'pointer',
                      textAlign: 'left',
                      padding: 0,
                      transition: 'color 0.2s'
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--color-antique-gold-light)')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255, 248, 237, 0.8)')}
                  >
                    {prod.name.replace('Jyotiraj ', '')}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Quick Navigation */}
          <div>
            <h4 style={{
              color: 'var(--color-antique-gold)',
              fontSize: '14px',
              fontWeight: 700,
              letterSpacing: '0.8px',
              textTransform: 'uppercase',
              marginBottom: '10px'
            }}>
              Company & Export
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '6px', margin: 0, padding: 0 }}>
              <li>
                <button
                  onClick={() => onNavigate('about')}
                  style={{ background: 'none', border: 'none', color: 'rgba(255, 248, 237, 0.8)', fontSize: '13px', cursor: 'pointer', padding: 0 }}
                >
                  About Us & Heritage
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('wholesale')}
                  style={{ background: 'none', border: 'none', color: 'rgba(255, 248, 237, 0.8)', fontSize: '13px', cursor: 'pointer', padding: 0 }}
                >
                  Wholesale Enquiries
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('export')}
                  style={{ background: 'none', border: 'none', color: 'rgba(255, 248, 237, 0.8)', fontSize: '13px', cursor: 'pointer', padding: 0 }}
                >
                  International Export Portal
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('contact')}
                  style={{ background: 'none', border: 'none', color: 'rgba(255, 248, 237, 0.8)', fontSize: '13px', cursor: 'pointer', padding: 0 }}
                >
                  Contact & Support
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact & WhatsApp */}
          <div>
            <h4 style={{
              color: 'var(--color-antique-gold)',
              fontSize: '14px',
              fontWeight: 700,
              letterSpacing: '0.8px',
              textTransform: 'uppercase',
              marginBottom: '10px'
            }}>
              Direct Connect
            </h4>
            
            <p style={{ fontSize: '12.5px', color: 'rgba(255,255,255,0.75)', lineHeight: 1.4, marginBottom: '10px' }}>
              Speak directly with our Gruh Udyog team for custom packing, retail inquiries, or bulk orders.
            </p>

            <button
              onClick={handleWhatsAppClick}
              className="btn btn-whatsapp"
              style={{
                width: '100%',
                justifyContent: 'center',
                padding: '8px 14px',
                fontSize: '13px',
                borderRadius: '8px'
              }}
            >
              <MessageCircle size={16} />
              <span>Connect on WhatsApp</span>
            </button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '12px',
          borderTop: '1px solid rgba(255, 255, 255, 0.1)',
          paddingTop: '14px',
          fontSize: '12px',
          color: 'rgba(255, 248, 237, 0.6)'
        }} className="footer-bottom-bar">
          <div>
            © {CURRENT_YEAR} Jyotiraj Global Company – Gruh Udyog. All Rights Reserved.
          </div>

          <div style={{ display: 'flex', gap: '14px' }} className="footer-links">
            <span style={{ cursor: 'pointer' }} onClick={() => onNavigate('contact')}>Privacy Policy</span>
            <span style={{ cursor: 'pointer' }} onClick={() => onNavigate('contact')}>Terms & Conditions</span>
            <span style={{ cursor: 'pointer' }} onClick={() => onNavigate('contact')}>Shipping & Compliance</span>
          </div>

          <button
            onClick={scrollToTop}
            style={{
              background: 'none',
              border: 'none',
              color: 'var(--color-antique-gold-light)',
              display: 'flex',
              alignItems: 'center',
              gap: '4px',
              cursor: 'pointer',
              fontSize: '12px',
              padding: 0
            }}
          >
            <span>Back to top</span>
            <ArrowUp size={13} />
          </button>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .site-footer {
            padding-top: 24px !important;
            padding-bottom: 16px !important;
          }
          .site-footer .container > div:first-child {
            gap: 18px !important;
            margin-bottom: 16px !important;
          }
          .footer-bottom-bar {
            flex-direction: column !important;
            align-items: center !important;
            text-align: center !important;
            gap: 8px !important;
            font-size: 11px !important;
          }
          .footer-links {
            gap: 10px !important;
            flex-wrap: wrap !important;
            justify-content: center !important;
          }
        }
      `}</style>
    </footer>
  );
};
