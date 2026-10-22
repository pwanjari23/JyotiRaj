import React, { useState } from 'react';
import { Search, ShoppingBag, Menu, X, ArrowRight, MessageCircle } from 'lucide-react';
import { PageView, Language } from '../types';
import { t } from '../utils/translations';

import { CONTACT_INFO } from '../data/contactInfo';

interface HeaderProps {
  currentPage: PageView;
  onNavigate: (page: PageView, productSlug?: string) => void;
  cartCount: number;
  onOpenCart: () => void;
  onOpenSearch: () => void;
  language: Language;
}

export const Header: React.FC<HeaderProps> = ({
  currentPage,
  onNavigate,
  cartCount,
  onOpenCart,
  onOpenSearch,
  language,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(
      'Hello Jyotiraj Global Company! I would like to inquire about your authentic traditional dry fruit sweets & laddus.'
    );
    window.open(`https://wa.me/${CONTACT_INFO.whatsappRaw}?text=${message}`, '_blank');
  };

  return (
    <header style={{
      backgroundColor: 'var(--color-warm-ivory)',
      borderBottom: '1px solid var(--color-border)',
      position: 'sticky',
      top: 0,
      zIndex: 50,
      boxShadow: '0 2px 10px rgba(67, 12, 10, 0.03)'
    }}>
      <div className="container header-container" style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingTop: '12px',
        paddingBottom: '12px',
        gap: '20px'
      }}>
        {/* Brand Logo & Title */}
        <div
          onClick={() => onNavigate('home')}
          className="header-logo-container"
          style={{ display: 'flex', alignItems: 'center', gap: '14px', cursor: 'pointer' }}
        >
          <div className="header-logo-img-wrapper" style={{
            width: '56px',
            height: '56px',
            borderRadius: '50%',
            overflow: 'hidden',
            border: '2px solid var(--color-antique-gold)',
            boxShadow: '0 2px 8px rgba(201, 149, 46, 0.2)',
            flexShrink: 0
          }}>
            <img
              src="/assets/logo.jpg"
              alt="Jyotiraj Global Company Logo"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>

          <div>
            <div className="header-brand-title" style={{
              fontFamily: 'var(--font-heading)',
              fontSize: '22px',
              fontWeight: 800,
              color: 'var(--color-royal-maroon)',
              letterSpacing: '1px',
              lineHeight: 1.1
            }}>
              JYOTIRAJ
            </div>
            <div className="header-brand-sub" style={{
              fontSize: '11px',
              fontWeight: 700,
              letterSpacing: '1.5px',
              color: 'var(--color-espresso-brown)',
              textTransform: 'uppercase',
              lineHeight: 1.2
            }}>
              GLOBAL COMPANY
            </div>

          </div>
        </div>

        {/* Desktop Navigation */}
        <nav style={{
          display: 'none',
          alignItems: 'center',
          gap: '28px',
        }} className="desktop-nav">
          <button
            onClick={() => onNavigate('home')}
            style={{
              background: 'none',
              border: 'none',
              fontFamily: 'var(--font-body)',
              fontSize: '15px',
              fontWeight: 700,
              color: currentPage === 'home' ? 'var(--color-royal-maroon)' : 'var(--color-espresso-brown)',
              cursor: 'pointer',
              position: 'relative',
              padding: '6px 0',
              borderBottom: currentPage === 'home' ? '2px solid var(--color-royal-maroon)' : '2px solid transparent'
            }}
          >
            {t('nav_home', language)}
          </button>

          <button
            onClick={() => onNavigate('shop')}
            style={{
              background: 'none',
              border: 'none',
              fontFamily: 'var(--font-body)',
              fontSize: '15px',
              fontWeight: 700,
              color: currentPage === 'shop' ? 'var(--color-royal-maroon)' : 'var(--color-espresso-brown)',
              cursor: 'pointer',
              padding: '6px 0',
              borderBottom: currentPage === 'shop' ? '2px solid var(--color-royal-maroon)' : '2px solid transparent'
            }}
          >
            {t('nav_shop', language)}
          </button>

          <button
            onClick={() => onNavigate('about')}
            style={{
              background: 'none',
              border: 'none',
              fontFamily: 'var(--font-body)',
              fontSize: '15px',
              fontWeight: 700,
              color: currentPage === 'about' ? 'var(--color-royal-maroon)' : 'var(--color-espresso-brown)',
              cursor: 'pointer',
              padding: '6px 0',
              borderBottom: currentPage === 'about' ? '2px solid var(--color-royal-maroon)' : '2px solid transparent'
            }}
          >
            {t('nav_about', language)}
          </button>

          <button
            onClick={() => onNavigate('wholesale')}
            style={{
              background: 'none',
              border: 'none',
              fontFamily: 'var(--font-body)',
              fontSize: '15px',
              fontWeight: 700,
              color: currentPage === 'wholesale' ? 'var(--color-royal-maroon)' : 'var(--color-espresso-brown)',
              cursor: 'pointer',
              padding: '6px 0',
              borderBottom: currentPage === 'wholesale' ? '2px solid var(--color-royal-maroon)' : '2px solid transparent'
            }}
          >
            {t('nav_wholesale', language)}
          </button>

          <button
            onClick={() => onNavigate('export')}
            style={{
              background: 'none',
              border: 'none',
              fontFamily: 'var(--font-body)',
              fontSize: '15px',
              fontWeight: 700,
              color: currentPage === 'export' ? 'var(--color-royal-maroon)' : 'var(--color-espresso-brown)',
              cursor: 'pointer',
              padding: '6px 0',
              borderBottom: currentPage === 'export' ? '2px solid var(--color-royal-maroon)' : '2px solid transparent'
            }}
          >
            {t('nav_export', language)}
          </button>

          <button
            onClick={() => onNavigate('contact')}
            style={{
              background: 'none',
              border: 'none',
              fontFamily: 'var(--font-body)',
              fontSize: '15px',
              fontWeight: 700,
              color: currentPage === 'contact' ? 'var(--color-royal-maroon)' : 'var(--color-espresso-brown)',
              cursor: 'pointer',
              padding: '6px 0',
              borderBottom: currentPage === 'contact' ? '2px solid var(--color-royal-maroon)' : '2px solid transparent'
            }}
          >
            {t('nav_contact', language)}
          </button>
        </nav>

        {/* Right Actions & WhatsApp Button */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
          {/* Search Icon */}
          <button
            onClick={onOpenSearch}
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              color: 'var(--color-espresso-brown)',
              display: 'flex',
              padding: '6px'
            }}
            aria-label="Search Sweets"
            title="Search"
          >
            <Search size={20} />
          </button>

          {/* Cart Icon with Counter */}
          <button
            onClick={onOpenCart}
            style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--color-espresso-brown)', display: 'flex', padding: '6px', position: 'relative' }}
            aria-label="Cart"
          >
            <ShoppingBag size={20} />
            {cartCount > 0 && (
              <span style={{
                position: 'absolute',
                top: 0,
                right: 0,
                backgroundColor: 'var(--color-royal-maroon)',
                color: 'var(--color-pure-white)',
                fontSize: '10px',
                fontWeight: 700,
                width: '18px',
                height: '18px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                border: '2px solid var(--color-warm-ivory)'
              }}>
                {cartCount}
              </span>
            )}
          </button>

          {/* WhatsApp CTA Button */}
          <button
            onClick={handleWhatsAppClick}
            className="btn btn-whatsapp"
            style={{
              padding: '9px 18px',
              fontSize: '13.5px',
              display: 'none',
            }}
            id="header-whatsapp-btn"
          >
            <MessageCircle size={16} />
          </button>

          {/* Mobile Menu Hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              color: 'var(--color-espresso-brown)',
              display: 'flex',
              padding: '6px'
            }}
            className="mobile-menu-btn"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div style={{
          backgroundColor: 'var(--color-warm-ivory)',
          borderTop: '1px solid var(--color-border)',
          padding: '20px 24px',
          display: 'flex',
          flexDirection: 'column',
          gap: '16px'
        }}>
          <button
            onClick={() => { setMobileMenuOpen(false); onOpenSearch(); }}
            style={{
              textAlign: 'left',
              background: 'rgba(107, 18, 15, 0.05)',
              border: '1px solid var(--color-border)',
              borderRadius: '8px',
              padding: '10px 14px',
              fontSize: '14px',
              fontWeight: 600,
              color: 'var(--color-espresso-brown)',
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              cursor: 'pointer'
            }}
          >
            <Search size={16} color="var(--color-royal-maroon)" />
            <span>{language === 'mr' ? 'मिठाई शोधा...' : language === 'hi' ? 'मिठाई खोजें...' : 'Search sweets...'}</span>
          </button>

          <button
            onClick={() => { onNavigate('home'); setMobileMenuOpen(false); }}
            style={{ textAlign: 'left', background: 'none', border: 'none', fontSize: '16px', fontWeight: 700, color: 'var(--color-royal-maroon)' }}
          >
            {t('nav_home', language)}
          </button>
          <button
            onClick={() => { onNavigate('shop'); setMobileMenuOpen(false); }}
            style={{ textAlign: 'left', background: 'none', border: 'none', fontSize: '16px', fontWeight: 600, color: 'var(--color-espresso-brown)' }}
          >
            {t('nav_shop', language)}
          </button>
          <button
            onClick={() => { onNavigate('about'); setMobileMenuOpen(false); }}
            style={{ textAlign: 'left', background: 'none', border: 'none', fontSize: '16px', fontWeight: 600, color: 'var(--color-espresso-brown)' }}
          >
            {t('nav_about', language)}
          </button>
          <button
            onClick={() => { onNavigate('wholesale'); setMobileMenuOpen(false); }}
            style={{ textAlign: 'left', background: 'none', border: 'none', fontSize: '16px', fontWeight: 600, color: 'var(--color-espresso-brown)' }}
          >
            {t('nav_wholesale', language)}
          </button>
          <button
            onClick={() => { onNavigate('export'); setMobileMenuOpen(false); }}
            style={{ textAlign: 'left', background: 'none', border: 'none', fontSize: '16px', fontWeight: 600, color: 'var(--color-espresso-brown)' }}
          >
            {t('nav_export', language)}
          </button>
          <button
            onClick={() => { onNavigate('contact'); setMobileMenuOpen(false); }}
            style={{ textAlign: 'left', background: 'none', border: 'none', fontSize: '16px', fontWeight: 600, color: 'var(--color-espresso-brown)' }}
          >
            {t('nav_contact', language)}
          </button>

          <div style={{ paddingTop: '10px' }}>
            <button
              onClick={handleWhatsAppClick}
              className="btn btn-whatsapp"
              style={{ width: '100%', justifyContent: 'center' }}
            >
              <MessageCircle size={18} />
              <span>Order on WhatsApp</span>
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      )}

      {/* Responsive CSS for Header */}
      <style>{`
        @media (min-width: 992px) {
          .desktop-nav {
            display: flex !important;
          }
          #header-whatsapp-btn {
            display: inline-flex !important;
          }
          .mobile-menu-btn {
            display: none !important;
          }
        }
        @media (max-width: 768px) {
          .header-container {
            padding-top: 8px !important;
            padding-bottom: 8px !important;
          }
          .header-logo-container {
            gap: 10px !important;
          }
          .header-logo-img-wrapper {
            width: 42px !important;
            height: 42px !important;
          }
          .header-brand-title {
            font-size: 18px !important;
          }
          .header-brand-sub {
            font-size: 9.5px !important;
            letter-spacing: 1px !important;
          }
        }
      `}</style>
    </header>
  );
};
