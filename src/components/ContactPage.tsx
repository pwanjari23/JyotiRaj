import React, { useState } from 'react';
import { PageView, Language } from '../types';
import {
  Mail,
  Phone,
  MessageCircle,
  Send,
  CheckCircle2,
  Navigation,
  Plus,
  Minus,
  Globe,
  Share2
} from 'lucide-react';
import { InstagramIcon, FacebookIcon, LinkedinIcon } from './SocialIcons';
import { CONTACT_INFO } from '../data/contactInfo';

interface ContactPageProps {
  onNavigate: (page: PageView) => void;
  language: Language;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onNavigate, language }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'Retail Order Support',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [zoomLevel, setZoomLevel] = useState(11);
  const [isSatellite, setIsSatellite] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      alert(language === 'mr' ? 'कृपया आवश्यक माहिती भरा.' : 'Please fill in required fields.');
      return;
    }
    setSubmitted(true);
  };

  const handleWhatsAppChat = () => {
    const text = encodeURIComponent(
      'Hello Jyotiraj Global Company! I have a question regarding your dry fruit sweets, laddus, and ordering.'
    );
    window.open(`https://wa.me/${CONTACT_INFO.whatsappRaw}?text=${text}`, '_blank');
  };

  const handleDirectionsClick = () => {
    window.open(
      'https://www.google.com/maps/dir/?api=1&destination=Maharashtra,+India',
      '_blank'
    );
  };

  const handleOpenGoogleMaps = () => {
    window.open(
      'https://www.google.com/maps/search/?api=1&query=Jyotiraj+Global+Company+Gruh+Udyog+Maharashtra+India',
      '_blank'
    );
  };

  return (
    <div className="contact-page-wrapper" style={{ backgroundColor: 'var(--color-warm-ivory)', minHeight: '100vh', padding: '44px 0 80px 0' }}>
      <div className="container" style={{ maxWidth: '1240px' }}>

        {/* 1. Page Header (Exact Title & Subtitle from Reference) */}
        <div style={{ textAlign: 'center', marginBottom: '36px' }}>
          <h1 style={{
            fontFamily: 'var(--font-heading)',
            fontSize: 'clamp(32px, 3.5vw, 44px)',
            color: 'var(--color-royal-maroon)',
            fontWeight: 800,
            marginBottom: '12px',
            lineHeight: 1.2
          }}>
            {language === 'mr' ? 'आमच्याशी संपर्क साधा' : 'Contact Our Team'}
          </h1>
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: 'clamp(14px, 1.2vw, 16px)',
            color: 'var(--color-espresso-brown)',
            maxWidth: '720px',
            margin: '0 auto',
            lineHeight: 1.5,
            opacity: 0.9
          }}>
            {language === 'mr'
              ? 'आम्ही किरकोळ चौकशी, भेटवस्तूंची निवड, ऑर्डर ट्रॅकिंग आणि व्यवसाय भागीदारीसाठी उपलब्ध आहोत.'
              : 'We are here to assist with retail inquiries, gifting assortments, order tracking, and business partnerships.'}
          </p>
        </div>

        {/* 2. Top Info Cards Row (4 Sleek Horizontal Rectangular Cards) */}
        <div
          className="contact-info-cards-row"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '14px',
            marginBottom: '28px'
          }}
        >
          {/* Card 1: Phone & WhatsApp */}
          <div
            style={{
              backgroundColor: '#FFFFFF',
              borderRadius: '12px',
              border: '1px solid rgba(230, 213, 185, 0.85)',
              padding: '12px 16px',
              boxShadow: '0 2px 8px rgba(67, 12, 10, 0.03)',
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              minHeight: '72px',
              transition: 'all 0.25s ease'
            }}
          >
            <div
              style={{
                width: '38px',
                height: '38px',
                borderRadius: '10px',
                backgroundColor: '#F5EBEA',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#6B120F',
                flexShrink: 0
              }}
            >
              <Phone size={18} />
            </div>

            <div style={{ flex: 1, minWidth: 0 }}>
              <div
                style={{
                  fontSize: '10px',
                  fontWeight: 700,
                  letterSpacing: '0.8px',
                  color: '#8C7D73',
                  textTransform: 'uppercase',
                  marginBottom: '2px'
                }}
              >
                {language === 'mr' ? 'कॉल / व्हॉट्सअॅप' : 'CALL / WHATSAPP'}
              </div>

              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px'
                }}
              >
                <a
                  href={`tel:${CONTACT_INFO.phoneRaw}`}
                  style={{
                    fontSize: '14px',
                    fontWeight: 700,
                    color: '#39231B',
                    textDecoration: 'none',
                    whiteSpace: 'nowrap'
                  }}
                  title={`Call ${CONTACT_INFO.phoneDisplay}`}
                >
                  {CONTACT_INFO.phoneDisplay}
                </a>

                {/* Compact WhatsApp Pill */}
                <button
                  type="button"
                  onClick={handleWhatsAppChat}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '3px',
                    backgroundColor: '#E6F4EA',
                    border: '1px solid #B8E2C8',
                    borderRadius: '14px',
                    padding: '2px 7px',
                    color: '#18552E',
                    fontSize: '10.5px',
                    fontWeight: 700,
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                    fontFamily: 'var(--font-body)',
                    flexShrink: 0
                  }}
                  title={`WhatsApp: ${CONTACT_INFO.whatsappDisplay}`}
                >
                  <MessageCircle size={11} fill="#18552E" color="#18552E" />
                  <span>WhatsApp</span>
                </button>
              </div>
            </div>
          </div>

          {/* Card 2: Email Enquiries */}
          <div
            style={{
              backgroundColor: '#FFFFFF',
              borderRadius: '12px',
              border: '1px solid rgba(230, 213, 185, 0.85)',
              padding: '12px 16px',
              boxShadow: '0 2px 8px rgba(67, 12, 10, 0.03)',
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              minHeight: '72px',
              transition: 'all 0.25s ease'
            }}
          >
            <div
              style={{
                width: '38px',
                height: '38px',
                borderRadius: '10px',
                backgroundColor: '#FAF3E7',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#9F721B',
                flexShrink: 0
              }}
            >
              <Mail size={18} />
            </div>

            <div style={{ flex: 1, minWidth: 0 }}>
              <div
                style={{
                  fontSize: '10px',
                  fontWeight: 700,
                  letterSpacing: '0.8px',
                  color: '#8C7D73',
                  textTransform: 'uppercase',
                  marginBottom: '2px'
                }}
              >
                {language === 'mr' ? 'ईमेल पत्रव्यवहार' : 'EMAIL ENQUIRIES'}
              </div>

              <div>
                <a
                  href={`mailto:${CONTACT_INFO.email}`}
                  style={{
                    fontSize: '12.5px',
                    fontWeight: 700,
                    color: '#39231B',
                    textDecoration: 'none',
                    display: 'block',
                    whiteSpace: 'nowrap',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    letterSpacing: '-0.2px'
                  }}
                  title={CONTACT_INFO.email}
                >
                  {CONTACT_INFO.email}
                </a>
              </div>
            </div>
          </div>

          {/* Card 3: Follow & Connect */}
          <div
            style={{
              backgroundColor: '#FFFFFF',
              borderRadius: '12px',
              border: '1px solid rgba(230, 213, 185, 0.85)',
              padding: '12px 16px',
              boxShadow: '0 2px 8px rgba(67, 12, 10, 0.03)',
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              minHeight: '72px',
              transition: 'all 0.25s ease'
            }}
          >
            <div
              style={{
                width: '38px',
                height: '38px',
                borderRadius: '10px',
                backgroundColor: '#F5EBF3',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#83286B',
                flexShrink: 0
              }}
            >
              <Share2 size={18} />
            </div>

            <div style={{ flex: 1, minWidth: 0 }}>
              <div
                style={{
                  fontSize: '10px',
                  fontWeight: 700,
                  letterSpacing: '0.8px',
                  color: '#8C7D73',
                  textTransform: 'uppercase',
                  marginBottom: '4px'
                }}
              >
                {language === 'mr' ? 'सोशल मीडिया' : 'FOLLOW & CONNECT'}
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <a
                  href={CONTACT_INFO.instagram.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    width: '28px',
                    height: '28px',
                    borderRadius: '50%',
                    backgroundColor: '#FAF3E7',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    border: '1px solid rgba(201, 149, 46, 0.3)',
                    transition: 'transform 0.2s'
                  }}
                  title="Instagram @jyotirajglobal"
                  aria-label="Instagram"
                >
                  <InstagramIcon size={14} color="#C13584" />
                </a>

                <a
                  href={CONTACT_INFO.facebook.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    width: '28px',
                    height: '28px',
                    borderRadius: '50%',
                    backgroundColor: '#FAF3E7',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    border: '1px solid rgba(201, 149, 46, 0.3)',
                    transition: 'transform 0.2s'
                  }}
                  title="Facebook Jyotiraj Global"
                  aria-label="Facebook"
                >
                  <FacebookIcon size={14} color="#1877F2" />
                </a>

                <a
                  href={CONTACT_INFO.linkedin.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    width: '28px',
                    height: '28px',
                    borderRadius: '50%',
                    backgroundColor: '#FAF3E7',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    border: '1px solid rgba(201, 149, 46, 0.3)',
                    transition: 'transform 0.2s'
                  }}
                  title="LinkedIn Jyotiraj Global"
                  aria-label="LinkedIn"
                >
                  <LinkedinIcon size={14} color="#0A66C2" />
                </a>
              </div>
            </div>
          </div>

          {/* Card 4: Official Portal */}
          <div
            style={{
              backgroundColor: '#FFFFFF',
              borderRadius: '12px',
              border: '1px solid rgba(230, 213, 185, 0.85)',
              padding: '12px 16px',
              boxShadow: '0 2px 8px rgba(67, 12, 10, 0.03)',
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              minHeight: '72px',
              transition: 'all 0.25s ease'
            }}
          >
            <div
              style={{
                width: '38px',
                height: '38px',
                borderRadius: '10px',
                backgroundColor: '#EAF3ED',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#18552E',
                flexShrink: 0
              }}
            >
              <Globe size={18} />
            </div>

            <div style={{ flex: 1, minWidth: 0 }}>
              <div
                style={{
                  fontSize: '10px',
                  fontWeight: 700,
                  letterSpacing: '0.8px',
                  color: '#8C7D73',
                  textTransform: 'uppercase',
                  marginBottom: '2px'
                }}
              >
                {language === 'mr' ? 'अधिकृत संकेतस्थळ' : 'OFFICIAL PORTAL'}
              </div>

              <div>
                <a
                  href={CONTACT_INFO.websiteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    fontSize: '13.5px',
                    fontWeight: 700,
                    color: '#18552E',
                    textDecoration: 'none',
                    display: 'block',
                    whiteSpace: 'nowrap',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis'
                  }}
                  title="Visit Jyotiraj Global Website"
                >
                  {CONTACT_INFO.websiteDisplay}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* 3. Main Two-Column Row (Map on Left + Send Us an Inquiry on Right) */}
        <div
          className="contact-main-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '24px',
            alignItems: 'stretch'
          }}
        >
          {/* Left Column: Authentic Styled Google Map */}
          <div
            style={{
              backgroundColor: '#E5E3DF',
              borderRadius: '16px',
              border: '1px solid rgba(230, 213, 185, 0.75)',
              boxShadow: '0 4px 20px rgba(67, 12, 10, 0.04)',
              overflow: 'hidden',
              position: 'relative',
              minHeight: '520px',
              display: 'flex',
              flexDirection: 'column'
            }}
          >
            {/* Live Interactive Map Iframe */}
            <iframe
              title="Jyotiraj Global Company Location Map"
              src={`https://maps.google.com/maps?q=19.7515,75.7139&t=${isSatellite ? 'k' : 'm'}&z=${zoomLevel}&ie=UTF8&iwloc=&output=embed`}
              width="100%"
              height="100%"
              style={{
                border: 0,
                flex: 1,
                width: '100%',
                height: '100%',
                minHeight: '520px',
                display: 'block'
              }}
              allowFullScreen
              loading="lazy"
            />

            {/* Top-Left Floating Google Maps Business Info Card */}
            <div
              style={{
                position: 'absolute',
                top: '14px',
                left: '14px',
                backgroundColor: '#FFFFFF',
                borderRadius: '8px',
                boxShadow: '0 2px 8px rgba(0,0,0,0.22)',
                padding: '10px 14px',
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                zIndex: 10,
                maxWidth: 'calc(100% - 28px)'
              }}
            >
              <div style={{ minWidth: 0 }}>
                <div style={{
                  fontSize: '13px',
                  fontWeight: 700,
                  color: '#202124',
                  whiteSpace: 'nowrap',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis'
                }}>
                  Jyotiraj Global Company – Gruh ...
                </div>
                <div
                  onClick={handleOpenGoogleMaps}
                  style={{
                    fontSize: '12px',
                    color: '#1A73E8',
                    cursor: 'pointer',
                    textDecoration: 'none'
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.textDecoration = 'underline')}
                  onMouseLeave={(e) => (e.currentTarget.style.textDecoration = 'none')}
                >
                  Maharashtra, India
                </div>
              </div>

              {/* Blue Diamond Directions Button */}
              <button
                type="button"
                onClick={handleDirectionsClick}
                style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '6px',
                  backgroundColor: '#1A73E8',
                  border: 'none',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#FFFFFF',
                  cursor: 'pointer',
                  flexShrink: 0,
                  boxShadow: '0 1px 3px rgba(0,0,0,0.2)'
                }}
                title="Get Directions on Google Maps"
              >
                <Navigation size={16} fill="#FFFFFF" style={{ transform: 'rotate(45deg)' }} />
              </button>
            </div>

            {/* Red Pin Overlay Marker with Company Label */}
            <div
              style={{
                position: 'absolute',
                top: '50%',
                left: '52%',
                transform: 'translate(-50%, -100%)',
                zIndex: 9,
                pointerEvents: 'none',
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
              }}
            >
              {/* Google Style Teardrop Red Pin */}
              <div style={{
                position: 'relative',
                width: '32px',
                height: '42px',
                filter: 'drop-shadow(0 3px 6px rgba(0,0,0,0.35))'
              }}>
                <svg viewBox="0 0 24 32" width="32" height="42" fill="none">
                  <path
                    d="M12 0C5.37 0 0 5.37 0 12C0 21 12 32 12 32C12 32 24 21 24 12C24 5.37 18.63 0 12 0Z"
                    fill="#EA4335"
                  />
                  <circle cx="12" cy="11" r="5" fill="#B31412" />
                  <circle cx="12" cy="11" r="4" fill="#FFFFFF" />
                </svg>
              </div>

              {/* Location Pill Label */}
              <div style={{
                backgroundColor: 'rgba(255, 255, 255, 0.94)',
                backdropFilter: 'blur(4px)',
                padding: '4px 10px',
                borderRadius: '6px',
                boxShadow: '0 2px 6px rgba(0,0,0,0.18)',
                border: '1px solid rgba(0,0,0,0.08)'
              }}>
                <div style={{ fontSize: '11px', fontWeight: 700, color: '#39231B', lineHeight: 1.2 }}>
                  Jyotiraj Global Company
                </div>
                <div style={{ fontSize: '10px', color: '#5F6368', lineHeight: 1.2 }}>
                  Gruh Udyog, Maharashtra, India
                </div>
              </div>
            </div>

            {/* Bottom-Left Satellite View Toggle Button */}
            <div
              onClick={() => setIsSatellite(!isSatellite)}
              style={{
                position: 'absolute',
                bottom: '14px',
                left: '14px',
                width: '46px',
                height: '46px',
                borderRadius: '6px',
                border: '2px solid #FFFFFF',
                boxShadow: '0 2px 6px rgba(0,0,0,0.3)',
                cursor: 'pointer',
                overflow: 'hidden',
                backgroundColor: isSatellite ? '#FFF' : '#2D3748',
                backgroundImage: isSatellite
                  ? "url('https://maps.gstatic.com/tactile/layerswitcher/imagery_standard.png')"
                  : "url('https://maps.gstatic.com/tactile/layerswitcher/satellite_standard.png')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                zIndex: 10,
                display: 'flex',
                alignItems: 'flex-end',
                justifyContent: 'center',
                paddingBottom: '2px'
              }}
              title={isSatellite ? 'Switch to Standard Map' : 'Switch to Satellite View'}
            >
              <span style={{
                fontSize: '9px',
                fontWeight: 700,
                color: '#FFFFFF',
                backgroundColor: 'rgba(0,0,0,0.6)',
                padding: '0 3px',
                borderRadius: '2px'
              }}>
                {isSatellite ? 'Map' : 'Satellite'}
              </span>
            </div>

            {/* Bottom-Right Zoom Controls */}
            <div
              style={{
                position: 'absolute',
                bottom: '36px',
                right: '14px',
                backgroundColor: '#FFFFFF',
                borderRadius: '4px',
                boxShadow: '0 2px 6px rgba(0,0,0,0.3)',
                display: 'flex',
                flexDirection: 'column',
                zIndex: 10,
                overflow: 'hidden'
              }}
            >
              <button
                type="button"
                onClick={() => setZoomLevel((prev) => Math.min(prev + 1, 18))}
                style={{
                  width: '32px',
                  height: '32px',
                  backgroundColor: '#FFFFFF',
                  border: 'none',
                  borderBottom: '1px solid #E6E6E6',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#666',
                  cursor: 'pointer'
                }}
                title="Zoom In"
              >
                <Plus size={16} />
              </button>
              <button
                type="button"
                onClick={() => setZoomLevel((prev) => Math.max(prev - 1, 5))}
                style={{
                  width: '32px',
                  height: '32px',
                  backgroundColor: '#FFFFFF',
                  border: 'none',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#666',
                  cursor: 'pointer'
                }}
                title="Zoom Out"
              >
                <Minus size={16} />
              </button>
            </div>

            {/* Bottom-Right Google Map Branding Bar */}
            <div style={{
              position: 'absolute',
              bottom: '4px',
              right: '12px',
              fontSize: '10px',
              color: '#5F6368',
              backgroundColor: 'rgba(255, 255, 255, 0.75)',
              padding: '2px 6px',
              borderRadius: '2px',
              pointerEvents: 'none',
              zIndex: 10
            }}>
              Map data ©2026 Google · <span style={{ textDecoration: 'underline' }}>Terms of Use</span>
            </div>
          </div>

          {/* Right Column: "Send Us an Inquiry" Form Card */}
          <div
            style={{
              backgroundColor: '#FFFFFF',
              borderRadius: '16px',
              border: '1px solid rgba(230, 213, 185, 0.75)',
              padding: '34px 38px',
              boxShadow: '0 4px 20px rgba(67, 12, 10, 0.04)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center'
            }}
          >
            {submitted ? (
              <div style={{ textAlign: 'center', padding: '36px 10px' }}>
                <div style={{
                  width: '60px',
                  height: '60px',
                  borderRadius: '50%',
                  backgroundColor: 'rgba(24, 85, 46, 0.12)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 18px auto',
                  color: 'var(--color-forest-green)'
                }}>
                  <CheckCircle2 size={36} />
                </div>
                <h3 style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '26px',
                  color: 'var(--color-royal-maroon)',
                  marginBottom: '10px'
                }}>
                  {language === 'mr' ? 'चौकशी पाठवली गेली आहे!' : 'Inquiry Dispatched Successfully'}
                </h3>
                <p style={{
                  fontSize: '15px',
                  color: 'var(--color-espresso-brown)',
                  marginBottom: '26px',
                  lineHeight: 1.5
                }}>
                  {language === 'mr'
                    ? `धन्यवाद ${formData.name}, आमच्या टीमने आपली माहिती प्राप्त केली असून आम्ही लवकरच आपल्याशी संपर्क करू.`
                    : `Thank you, ${formData.name}. Our Gruh Udyog desk has received your request and will get back to you promptly.`}
                </p>
                <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: '', email: '', phone: '', subject: 'Retail Order Support', message: '' });
                    }}
                    style={{
                      backgroundColor: 'transparent',
                      color: 'var(--color-royal-maroon)',
                      border: '1.5px solid var(--color-royal-maroon)',
                      borderRadius: '8px',
                      padding: '10px 22px',
                      fontSize: '14px',
                      fontWeight: 700,
                      cursor: 'pointer'
                    }}
                  >
                    {language === 'mr' ? 'दुसरा संदेश पाठवा' : 'Send Another Message'}
                  </button>
                  <button
                    type="button"
                    onClick={() => onNavigate('shop')}
                    style={{
                      backgroundColor: 'var(--color-royal-maroon)',
                      color: '#FFFFFF',
                      border: 'none',
                      borderRadius: '8px',
                      padding: '10px 22px',
                      fontSize: '14px',
                      fontWeight: 700,
                      cursor: 'pointer'
                    }}
                  >
                    {language === 'mr' ? 'मिठाई दालन पहा' : 'Explore Sweets'}
                  </button>
                  <button
                    type="button"
                    onClick={handleWhatsAppChat}
                    style={{
                      backgroundColor: '#18552E',
                      color: '#FFFFFF',
                      border: 'none',
                      borderRadius: '8px',
                      padding: '10px 22px',
                      fontSize: '14px',
                      fontWeight: 700,
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '8px',
                      cursor: 'pointer'
                    }}
                  >
                    <MessageCircle size={16} />
                    <span>Chat on WhatsApp</span>
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <h2 style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '26px',
                  color: 'var(--color-royal-maroon)',
                  fontWeight: 800,
                  marginBottom: '24px'
                }}>
                  {language === 'mr' ? 'आम्हाला चौकशी पाठवा' : 'Send Us an Inquiry'}
                </h2>

                {/* Field 1: Your Name */}
                <div style={{ marginBottom: '18px' }}>
                  <label style={{
                    display: 'block',
                    fontSize: '13.5px',
                    fontWeight: 700,
                    color: '#39231B',
                    marginBottom: '7px'
                  }}>
                    {language === 'mr' ? 'आपले नाव *' : 'Your Name *'}
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Anjali Patil"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '11px 14px',
                      borderRadius: '8px',
                      border: '1px solid #D9C8AF',
                      fontFamily: 'var(--font-body)',
                      fontSize: '14.5px',
                      color: '#39231B',
                      backgroundColor: '#FFFFFF',
                      outline: 'none',
                      transition: 'border-color 0.2s ease, box-shadow 0.2s ease'
                    }}
                    onFocus={(e) => {
                      e.currentTarget.style.borderColor = 'var(--color-antique-gold)';
                      e.currentTarget.style.boxShadow = '0 0 0 3px rgba(201, 149, 46, 0.15)';
                    }}
                    onBlur={(e) => {
                      e.currentTarget.style.borderColor = '#D9C8AF';
                      e.currentTarget.style.boxShadow = 'none';
                    }}
                  />
                </div>

                {/* Field 2 & 3: Email Address & Phone Number (2 Columns) */}
                <div
                  className="contact-form-row"
                  style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    gap: '16px',
                    marginBottom: '18px'
                  }}
                >
                  <div>
                    <label style={{
                      display: 'block',
                      fontSize: '13.5px',
                      fontWeight: 700,
                      color: '#39231B',
                      marginBottom: '7px'
                    }}>
                      {language === 'mr' ? 'ईमेल पत्ता *' : 'Email Address *'}
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="you@email.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '11px 14px',
                        borderRadius: '8px',
                        border: '1px solid #D9C8AF',
                        fontFamily: 'var(--font-body)',
                        fontSize: '14.5px',
                        color: '#39231B',
                        backgroundColor: '#FFFFFF',
                        outline: 'none',
                        transition: 'border-color 0.2s ease, box-shadow 0.2s ease'
                      }}
                      onFocus={(e) => {
                        e.currentTarget.style.borderColor = 'var(--color-antique-gold)';
                        e.currentTarget.style.boxShadow = '0 0 0 3px rgba(201, 149, 46, 0.15)';
                      }}
                      onBlur={(e) => {
                        e.currentTarget.style.borderColor = '#D9C8AF';
                        e.currentTarget.style.boxShadow = 'none';
                      }}
                    />
                  </div>

                  <div>
                    <label style={{
                      display: 'block',
                      fontSize: '13.5px',
                      fontWeight: 700,
                      color: '#39231B',
                      marginBottom: '7px'
                    }}>
                      {language === 'mr' ? 'फोन नंबर' : 'Phone Number'}
                    </label>
                    <input
                      type="tel"
                      placeholder="+91 98765 00000"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '11px 14px',
                        borderRadius: '8px',
                        border: '1px solid #D9C8AF',
                        fontFamily: 'var(--font-body)',
                        fontSize: '14.5px',
                        color: '#39231B',
                        backgroundColor: '#FFFFFF',
                        outline: 'none',
                        transition: 'border-color 0.2s ease, box-shadow 0.2s ease'
                      }}
                      onFocus={(e) => {
                        e.currentTarget.style.borderColor = 'var(--color-antique-gold)';
                        e.currentTarget.style.boxShadow = '0 0 0 3px rgba(201, 149, 46, 0.15)';
                      }}
                      onBlur={(e) => {
                        e.currentTarget.style.borderColor = '#D9C8AF';
                        e.currentTarget.style.boxShadow = 'none';
                      }}
                    />
                  </div>
                </div>

                {/* Field 4: Subject */}
                <div style={{ marginBottom: '18px' }}>
                  <label style={{
                    display: 'block',
                    fontSize: '13.5px',
                    fontWeight: 700,
                    color: '#39231B',
                    marginBottom: '7px'
                  }}>
                    {language === 'mr' ? 'विषय' : 'Subject'}
                  </label>
                  <select
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '11px 14px',
                      borderRadius: '8px',
                      border: '1px solid #D9C8AF',
                      fontFamily: 'var(--font-body)',
                      fontSize: '14.5px',
                      color: '#39231B',
                      backgroundColor: '#FFFFFF',
                      outline: 'none',
                      cursor: 'pointer'
                    }}
                    onFocus={(e) => {
                      e.currentTarget.style.borderColor = 'var(--color-antique-gold)';
                      e.currentTarget.style.boxShadow = '0 0 0 3px rgba(201, 149, 46, 0.15)';
                    }}
                    onBlur={(e) => {
                      e.currentTarget.style.borderColor = '#D9C8AF';
                      e.currentTarget.style.boxShadow = 'none';
                    }}
                  >
                    <option value="Retail Order Support">Retail Order Support</option>
                    <option value="Bulk & Festive Gifting">Bulk & Festive Gifting</option>
                    <option value="Wholesale Distributorship">Wholesale Distributorship</option>
                    <option value="International Export Enquiry">International Export Enquiry</option>
                    <option value="Product Feedback">Product Feedback</option>
                    <option value="General Inquiry">General Inquiry</option>
                  </select>
                </div>

                {/* Field 5: Message */}
                <div style={{ marginBottom: '24px' }}>
                  <label style={{
                    display: 'block',
                    fontSize: '13.5px',
                    fontWeight: 700,
                    color: '#39231B',
                    marginBottom: '7px'
                  }}>
                    {language === 'mr' ? 'संदेश *' : 'Message *'}
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder={language === 'mr' ? 'आपला संदेश येथे लिहा...' : 'Tell us how we can help you with your sweet order or business enquiry...'}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '11px 14px',
                      borderRadius: '8px',
                      border: '1px solid #D9C8AF',
                      fontFamily: 'var(--font-body)',
                      fontSize: '14.5px',
                      color: '#39231B',
                      backgroundColor: '#FFFFFF',
                      outline: 'none',
                      resize: 'vertical',
                      lineHeight: 1.5,
                      transition: 'border-color 0.2s ease, box-shadow 0.2s ease'
                    }}
                    onFocus={(e) => {
                      e.currentTarget.style.borderColor = 'var(--color-antique-gold)';
                      e.currentTarget.style.boxShadow = '0 0 0 3px rgba(201, 149, 46, 0.15)';
                    }}
                    onBlur={(e) => {
                      e.currentTarget.style.borderColor = '#D9C8AF';
                      e.currentTarget.style.boxShadow = 'none';
                    }}
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  style={{
                    backgroundColor: '#5C1310',
                    color: '#FFFFFF',
                    border: 'none',
                    borderRadius: '8px',
                    padding: '13px 28px',
                    fontFamily: 'var(--font-body)',
                    fontSize: '15px',
                    fontWeight: 700,
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '10px',
                    cursor: 'pointer',
                    boxShadow: '0 4px 14px rgba(92, 19, 16, 0.25)',
                    transition: 'all 0.25s ease',
                    width: '100%'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = '#430C0A';
                    e.currentTarget.style.transform = 'translateY(-2px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = '#5C1310';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                >
                  <Send size={16} />
                  <span>{language === 'mr' ? 'संदेश पाठवा' : 'Send Message'}</span>
                </button>
              </form>
            )}
          </div>
        </div>

      </div>

      {/* Responsive Styles */}
      <style>{`
        @media (max-width: 991px) {
          .contact-info-cards-row {
            grid-template-columns: 1fr !important;
            gap: 14px !important;
          }
          .contact-main-grid {
            grid-template-columns: 1fr !important;
            gap: 20px !important;
          }
        }
        @media (max-width: 768px) {
          .contact-page-wrapper {
            padding: 24px 0 40px 0 !important;
          }
        }
        @media (max-width: 600px) {
          .contact-form-row {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
};
