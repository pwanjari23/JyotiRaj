import React from 'react';
import { Sparkles, Truck, Globe2, Leaf, ShieldCheck } from 'lucide-react';
import { InstagramIcon, FacebookIcon, LinkedinIcon } from './SocialIcons';
import { CONTACT_INFO } from '../data/contactInfo';
import { Language, Currency } from '../types';
import { t } from '../utils/translations';

interface AnnouncementBarProps {
  language: Language;
  onLanguageChange: (lang: Language) => void;
  currency: Currency;
  onCurrencyChange: (curr: Currency) => void;
}

export const AnnouncementBar: React.FC<AnnouncementBarProps> = ({
  language,
  onLanguageChange,
  currency,
  onCurrencyChange,
}) => {
  return (
    <div style={{
      backgroundColor: 'var(--color-deep-burgundy)',
      color: 'var(--color-warm-ivory)',
      fontSize: '12px',
      padding: '7px 0',
      borderBottom: '1px solid rgba(201, 149, 46, 0.25)',
      position: 'relative',
      zIndex: 40
    }}>
      <div className="container announcement-bar-container" style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: '8px'
      }}>
        {/* Left Badges */}
        <div className="announcement-left-badges" style={{
          display: 'flex',
          alignItems: 'center',
          gap: '16px',
          overflowX: 'auto',
          whiteSpace: 'nowrap',
          paddingBottom: '2px'
        }}>
          <span style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
            <Sparkles size={13} color="var(--color-antique-gold)" />
            {t('ann_taste', language)}
          </span>
          <span style={{ opacity: 0.3 }}>|</span>
          <span style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
            <Truck size={13} color="var(--color-antique-gold)" />
            {t('ann_delivery', language)}
          </span>
          <span style={{ opacity: 0.3 }}>|</span>
          <span style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
            <Globe2 size={13} color="var(--color-antique-gold)" />
            {t('ann_global', language)}
          </span>
          <span style={{ opacity: 0.3 }}>|</span>
          <span style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
            <Leaf size={13} color="var(--color-antique-gold)" />
            {t('ann_ingredients', language)}
          </span>
          <span style={{ opacity: 0.3 }}>|</span>
          <span style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
            <ShieldCheck size={13} color="var(--color-antique-gold)" />
            {t('ann_preservatives', language)}
          </span>
        </div>

        {/* Right Settings & Socials */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '14px',
          marginLeft: 'auto'
        }}>
          {/* Currency Dropdown */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '4px', cursor: 'pointer', position: 'relative' }}>
            <select
              value={currency}
              onChange={(e) => onCurrencyChange(e.target.value as Currency)}
              aria-label="Select Currency"
              style={{
                background: 'transparent',
                border: 'none',
                color: 'var(--color-warm-ivory)',
                fontSize: '12px',
                cursor: 'pointer',
                outline: 'none',
                paddingRight: '2px',
                fontWeight: 600
              }}
            >
              <option value="INR" style={{ color: '#000' }}>INR ₹</option>
              <option value="USD" style={{ color: '#000' }}>USD $</option>
              <option value="AED" style={{ color: '#000' }}>AED د.إ</option>
            </select>
          </div>

          <span style={{ opacity: 0.3 }}>|</span>

          {/* Language Selector */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '4px', cursor: 'pointer' }}>
            <select
              value={language}
              onChange={(e) => onLanguageChange(e.target.value as Language)}
              aria-label="Select Language"
              style={{
                background: 'transparent',
                border: 'none',
                color: 'var(--color-warm-ivory)',
                fontSize: '12px',
                cursor: 'pointer',
                outline: 'none',
                paddingRight: '2px',
                fontWeight: 600
              }}
            >
              <option value="en" style={{ color: '#000' }}>English</option>
              <option value="mr" style={{ color: '#000' }}>मराठी</option>
              <option value="hi" style={{ color: '#000' }}>हिंदी</option>
            </select>
          </div>

          <span style={{ opacity: 0.3 }} className="announcement-socials-divider">|</span>

          {/* Social Icons */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }} className="announcement-socials">
            <a
              href={CONTACT_INFO.instagram.url}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: 'inherit', display: 'flex' }}
              aria-label="Instagram @jyotirajglobal"
              title="Instagram @jyotirajglobal"
            >
              <InstagramIcon size={14} color="var(--color-warm-ivory)" />
            </a>
            <a
              href={CONTACT_INFO.facebook.url}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: 'inherit', display: 'flex' }}
              aria-label="Facebook Jyotiraj Global"
              title="Facebook Jyotiraj Global"
            >
              <FacebookIcon size={14} color="var(--color-warm-ivory)" />
            </a>
            <a
              href={CONTACT_INFO.linkedin.url}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: 'inherit', display: 'flex' }}
              aria-label="LinkedIn Jyotiraj Global"
              title="LinkedIn Jyotiraj Global"
            >
              <LinkedinIcon size={14} color="var(--color-warm-ivory)" />
            </a>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .announcement-bar-container {
            flex-wrap: nowrap !important;
            gap: 8px !important;
            font-size: 11px !important;
          }
          .announcement-left-badges {
            flex: 1 !important;
            overflow-x: auto !important;
            gap: 10px !important;
            scrollbar-width: none;
            -webkit-overflow-scrolling: touch;
          }
          .announcement-left-badges::-webkit-scrollbar {
            display: none;
          }
          .announcement-socials,
          .announcement-socials-divider {
            display: none !important;
          }
        }
      `}</style>
    </div>
  );
};
