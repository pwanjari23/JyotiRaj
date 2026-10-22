import React, { useState } from 'react';
import { PageView, Language } from '../types';
import { CheckCircle2, ArrowRight, MessageCircle } from 'lucide-react';
import { CONTACT_INFO } from '../data/contactInfo';

interface WholesalePageProps {
  onNavigate: (page: PageView) => void;
  language: Language;
}

export const WholesalePage: React.FC<WholesalePageProps> = ({ onNavigate, language }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    companyName: '',
    businessEmail: '',
    phoneNumber: '',
    country: '',
    businessType: '',
    estimatedQty: '',
    preferredPackaging: '',
    requirements: '',
    productsOfInterest: [] as string[],
  });

  const [submitted, setSubmitted] = useState(false);

  const sweetProducts = [
    { id: 'prod-1', title: 'Premium Special Dry Fruits Laddu' },
    { id: 'prod-2', title: 'Dry Fruits Khajur Roll' },
    { id: 'prod-3', title: 'Kids Special Dry Fruit Laddu' },
    { id: 'prod-4', title: 'Classic Dry Fruit Ladoo' },
    { id: 'prod-5', title: 'Dry Fruits Khajur Barfi' },
  ];

  const handleProductToggle = (title: string) => {
    setFormData((prev) => {
      const exists = prev.productsOfInterest.includes(title);
      if (exists) {
        return { ...prev, productsOfInterest: prev.productsOfInterest.filter((p) => p !== title) };
      } else {
        return { ...prev, productsOfInterest: [...prev.productsOfInterest, title] };
      }
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.businessEmail || !formData.phoneNumber) {
      alert(language === 'mr' ? 'कृपया आपले नाव, ईमेल आणि फोन नंबर भरा.' : 'Please fill in your name, email, and phone number.');
      return;
    }
    setSubmitted(true);
  };

  const handleWhatsAppB2B = () => {
    const text = encodeURIComponent(
      `Hello Jyotiraj Global! I represent ${formData.companyName || 'my company'} and would like to discuss a wholesale order for traditional sweets.`
    );
    window.open(`https://wa.me/${CONTACT_INFO.whatsappRaw}?text=${text}`, '_blank');
  };

  return (
    <div className="wholesale-page-wrapper" style={{ backgroundColor: 'var(--color-warm-ivory)', minHeight: '100vh', padding: '44px 0 80px 0' }}>
      <div className="container" style={{ maxWidth: '1060px' }}>

        {/* 1. Gold Eyebrow */}
        <div style={{ textAlign: 'center', marginBottom: '12px' }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '12px',
          }}>
            <span style={{ width: '36px', height: '1px', backgroundColor: 'var(--color-antique-gold)' }} />
            <span style={{
              color: 'var(--color-antique-gold)',
              fontSize: '12px',
              fontWeight: 700,
              letterSpacing: '2px',
              textTransform: 'uppercase'
            }}>
              {language === 'mr' ? 'घरगुती आणि घाऊक पुरवठा' : 'WHOLESALE & BULK ORDERS'}
            </span>
            <span style={{ width: '36px', height: '1px', backgroundColor: 'var(--color-antique-gold)' }} />
          </div>
        </div>

        {/* 2. Headline */}
        <h1 style={{
          fontFamily: 'var(--font-heading)',
          fontSize: 'clamp(30px, 3.2vw, 42px)',
          color: 'var(--color-royal-maroon)',
          fontWeight: 800,
          textAlign: 'center',
          marginBottom: '12px',
          lineHeight: 1.2
        }}>
          {language === 'mr' ? 'आपल्या घाऊक गरजांवर चर्चा करूया' : "Let's Discuss Your Wholesale Order"}
        </h1>

        {/* 3. Subtitle */}
        <p style={{
          fontFamily: 'var(--font-body)',
          fontSize: 'clamp(14px, 1.15vw, 15.5px)',
          color: '#39231B',
          textAlign: 'center',
          maxWidth: '720px',
          margin: '0 auto 36px auto',
          lineHeight: 1.5,
          opacity: 0.9
        }}>
          {language === 'mr'
            ? 'सणासुदीच्या कॉर्पोरेट भेटवस्तू, विवाहसोहळे, संस्थात्मक किरकोळ विक्री आणि व्यावसायिक वितरणासाठी ज्योतीराज ग्लोबल कंपनीसोबत भागीदारी करा.'
            : 'Partner with Jyotiraj for festive corporate gifting, wedding sweets, retail shops, and bulk distribution across India and worldwide.'}
        </p>

        {/* 4. The Form Card (Exact match to reference mockup) */}
        {submitted ? (
          <div style={{
            backgroundColor: '#FFFFFF',
            borderRadius: '18px',
            padding: '60px 40px',
            border: '2px solid var(--color-antique-gold)',
            textAlign: 'center',
            boxShadow: '0 4px 24px rgba(67, 12, 10, 0.06)',
            maxWidth: '780px',
            margin: '0 auto'
          }}>
            <div style={{
              width: '64px',
              height: '64px',
              borderRadius: '50%',
              backgroundColor: 'rgba(24, 85, 46, 0.12)',
              color: 'var(--color-forest-green)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 20px auto'
            }}>
              <CheckCircle2 size={36} />
            </div>

            <h2 style={{ fontSize: '30px', color: 'var(--color-royal-maroon)', marginBottom: '14px' }}>
              {language === 'mr' ? 'घाऊक मागणी प्राप्त झाली!' : 'Wholesale Inquiry Received!'}
            </h2>

            <p style={{ fontSize: '16px', color: 'var(--color-espresso-brown)', maxWidth: '560px', margin: '0 auto 28px auto', lineHeight: 1.6 }}>
              {language === 'mr'
                ? `धन्यवाद ${formData.fullName}. आमच्या B2B विक्री प्रतिनिधीने आपली माहिती प्राप्त केली असून आम्ही लवकरच आपल्याशी संपर्क साधू.`
                : `Thank you, ${formData.fullName}. We have received your wholesale inquiry for ${formData.companyName || 'your business'}. Our team will call or email you with pricing details shortly.`}
            </p>

            <button
              onClick={handleWhatsAppB2B}
              style={{
                backgroundColor: '#18552E',
                color: '#FFFFFF',
                border: 'none',
                borderRadius: '8px',
                padding: '13px 28px',
                fontSize: '15px',
                fontWeight: 700,
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                cursor: 'pointer',
                margin: '0 auto 16px auto'
              }}
            >
              <MessageCircle size={18} fill="#FFFFFF" />
              <span>{language === 'mr' ? 'व्हॉट्सअॅपवर संपर्क साधा' : 'Chat with Us on WhatsApp'}</span>
            </button>

            <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', marginTop: '12px' }}>
              <button
                onClick={() => setSubmitted(false)}
                style={{ background: 'none', border: 'none', color: 'var(--color-muted-text)', fontSize: '13.5px', cursor: 'pointer', textDecoration: 'underline' }}
              >
                {language === 'mr' ? 'दुसरी मागणी नोंदवा' : 'Submit another inquiry'}
              </button>
              <button
                onClick={() => onNavigate('shop')}
                style={{ background: 'none', border: 'none', color: 'var(--color-royal-maroon)', fontSize: '13.5px', fontWeight: 700, cursor: 'pointer', textDecoration: 'underline' }}
              >
                {language === 'mr' ? 'रिटेल मिठाई दालन पहा' : 'Browse Retail Sweets'}
              </button>
            </div>
          </div>
        ) : (
          <div className="wholesale-form-card" style={{
            backgroundColor: '#FFFFFF',
            borderRadius: '18px',
            border: '1px solid rgba(230, 213, 185, 0.75)',
            boxShadow: '0 4px 24px rgba(67, 12, 10, 0.04)',
            padding: '36px 40px',
            maxWidth: '980px',
            margin: '0 auto'
          }}>
            <form onSubmit={handleSubmit}>

              {/* Row 1: 3 Fields in 1 Line */}
              <div className="wholesale-form-row-3">
                <div>
                  <label className="wholesale-form-label">Full Name *</label>
                  <input
                    type="text"
                    required
                    className="wholesale-form-input"
                    placeholder="e.g. Rajesh Sharma"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  />
                </div>

                <div>
                  <label className="wholesale-form-label">Company / Organization Name *</label>
                  <input
                    type="text"
                    required
                    className="wholesale-form-input"
                    placeholder="e.g. Sharma Enterprises Ltd."
                    value={formData.companyName}
                    onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                  />
                </div>

                <div>
                  <label className="wholesale-form-label">Business Email *</label>
                  <input
                    type="email"
                    required
                    className="wholesale-form-input"
                    placeholder="e.g. Business Email"
                    value={formData.businessEmail}
                    onChange={(e) => setFormData({ ...formData, businessEmail: e.target.value })}
                  />
                </div>
              </div>

              {/* Row 2: 3 Fields in 1 Line */}
              <div className="wholesale-form-row-3">
                <div>
                  <label className="wholesale-form-label">Phone Number *</label>
                  <input
                    type="tel"
                    required
                    className="wholesale-form-input"
                    placeholder="+91 7304314338"
                    value={formData.phoneNumber}
                    onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
                  />
                </div>

                <div>
                  <label className="wholesale-form-label">Country / Region</label>
                  <input
                    type="text"
                    className="wholesale-form-input"
                    placeholder="Country / Region"
                    value={formData.country}
                    onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                  />
                </div>

                <div>
                  <label className="wholesale-form-label">Business Type</label>
                  <div style={{ position: 'relative' }}>
                    <select
                      className="wholesale-form-input wholesale-form-select"
                      value={formData.businessType}
                      onChange={(e) => setFormData({ ...formData, businessType: e.target.value })}
                    >
                      <option value="">Business Type</option>
                      <option value="Corporate Gifting">Corporate Gifting</option>
                      <option value="Retail Sweet Distributor">Retail Sweet Distributor</option>
                      <option value="Supermarket / Food Chain">Supermarket / Food Chain</option>
                      <option value="Wedding / Event Planner">Wedding / Event Planner</option>
                      <option value="Export Consolidator">Export Consolidator</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Row 3: 3 Fields in 1 Line */}
              <div className="wholesale-form-row-3">
                <div>
                  <label className="wholesale-form-label">Estimated Order Quantity</label>
                  <div style={{ position: 'relative' }}>
                    <select
                      className="wholesale-form-input wholesale-form-select"
                      value={formData.estimatedQty}
                      onChange={(e) => setFormData({ ...formData, estimatedQty: e.target.value })}
                    >
                      <option value="">Estimated Order Quantity</option>
                      <option value="50 kg – 100 kg">50 kg – 100 kg</option>
                      <option value="100 kg – 250 kg">100 kg – 250 kg</option>
                      <option value="250 kg – 500 kg">250 kg – 500 kg</option>
                      <option value="500 kg+ (Commercial Batch)">500 kg+ (Commercial Batch)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="wholesale-form-label">Preferred Packaging Format</label>
                  <div style={{ position: 'relative' }}>
                    <select
                      className="wholesale-form-input wholesale-form-select"
                      value={formData.preferredPackaging}
                      onChange={(e) => setFormData({ ...formData, preferredPackaging: e.target.value })}
                    >
                      <option value="">Preferred Packaging Format</option>
                      <option value="500g Food-Grade Retail Containers">500g Food-Grade Retail Containers</option>
                      <option value="250g Consumer Packs">250g Consumer Packs</option>
                      <option value="1kg Large Family Packs">1kg Large Family Packs</option>
                      <option value="Bulk Master Cartons">Bulk Master Cartons</option>
                      <option value="Luxury Gift Hampers with Custom Sleeves">Luxury Gift Hampers with Custom Sleeves</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="wholesale-form-label">Additional Requirements or Custom Timeline</label>
                  <input
                    type="text"
                    className="wholesale-form-input"
                    placeholder="Additional Requirements or Custom Timeline"
                    value={formData.requirements}
                    onChange={(e) => setFormData({ ...formData, requirements: e.target.value })}
                  />
                </div>
              </div>

              {/* Row 4: Products of Interest (Full-Width Single Line with 5 items) */}
              <div style={{ marginBottom: '28px' }}>
                <label className="wholesale-form-label">Products of Interest</label>
                <div className="wholesale-products-grid">
                  {sweetProducts.map((prod) => {
                    const isChecked = formData.productsOfInterest.includes(prod.title);
                    return (
                      <div
                        key={prod.id}
                        onClick={() => handleProductToggle(prod.title)}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '8px',
                          padding: '10px 12px',
                          borderRadius: '10px',
                          border: isChecked ? '1.5px solid var(--color-royal-maroon)' : '1px solid #D9C8AF',
                          backgroundColor: isChecked ? 'rgba(107, 18, 15, 0.04)' : '#FFFFFF',
                          cursor: 'pointer',
                          transition: 'all 0.2s ease',
                          userSelect: 'none'
                        }}
                      >
                        <input
                          type="checkbox"
                          checked={isChecked}
                          onChange={() => {}} // handled by parent div
                          style={{
                            width: '15px',
                            height: '15px',
                            accentColor: '#5C1310',
                            cursor: 'pointer',
                            flexShrink: 0
                          }}
                        />
                        <span style={{
                          fontSize: '12px',
                          fontWeight: isChecked ? 700 : 500,
                          color: isChecked ? 'var(--color-royal-maroon)' : '#39231B',
                          lineHeight: 1.25
                        }}>
                          {prod.title}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Row 5: Action Buttons Centered */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '16px',
                marginTop: '10px',
                flexWrap: 'wrap'
              }}>
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
                    gap: '8px',
                    cursor: 'pointer',
                    boxShadow: '0 4px 14px rgba(92, 19, 16, 0.25)',
                    transition: 'all 0.2s ease'
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
                  <span>{language === 'mr' ? 'घाऊक मागणी नोंदवा' : 'Submit Wholesale Request'}</span>
                  <ArrowRight size={16} />
                </button>

                <button
                  type="button"
                  onClick={handleWhatsAppB2B}
                  style={{
                    backgroundColor: '#18552E',
                    color: '#FFFFFF',
                    border: 'none',
                    borderRadius: '8px',
                    padding: '13px 28px',
                    fontFamily: 'var(--font-body)',
                    fontSize: '15px',
                    fontWeight: 700,
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    cursor: 'pointer',
                    boxShadow: '0 4px 14px rgba(24, 85, 46, 0.25)',
                    transition: 'all 0.2s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = '#124022';
                    e.currentTarget.style.transform = 'translateY(-2px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = '#18552E';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                >
                  <MessageCircle size={18} fill="#FFFFFF" />
                  <span>{language === 'mr' ? 'व्हॉट्सअॅपवर संपर्क साधा' : 'Instant WhatsApp Connect'}</span>
                </button>
              </div>

            </form>
          </div>
        )}

      </div>

      {/* Scoped Styles Matching Reference Mockup */}
      <style>{`
        .wholesale-form-label {
          display: block;
          font-size: 13.5px;
          font-weight: 700;
          color: #39231B;
          margin-bottom: 7px;
        }
        .wholesale-form-input {
          width: 100%;
          padding: 11px 14px;
          border-radius: 8px;
          border: 1px solid #D9C8AF;
          font-family: var(--font-body);
          font-size: 14px;
          color: #39231B;
          background-color: #FFFFFF;
          outline: none;
          transition: border-color 0.2s ease, box-shadow 0.2s ease;
        }
        .wholesale-form-input::placeholder {
          color: #8C7D73;
          opacity: 0.85;
        }
        .wholesale-form-input:focus {
          border-color: var(--color-antique-gold);
          box-shadow: 0 0 0 3px rgba(201, 149, 46, 0.15);
        }
        .wholesale-form-select {
          appearance: none;
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%2339231B' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m6 9 6 6 6-6'/%3E%3C/svg%3E");
          background-repeat: no-repeat;
          background-position: right 12px center;
          background-size: 14px;
          padding-right: 36px;
          cursor: pointer;
        }
        .wholesale-form-row-3 {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 18px;
          margin-bottom: 18px;
        }
        .wholesale-products-grid {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 10px;
          margin-top: 8px;
        }
        @media (max-width: 900px) {
          .wholesale-form-row-3 {
            grid-template-columns: 1fr !important;
            gap: 14px !important;
          }
          .wholesale-products-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 768px) {
          .wholesale-page-wrapper {
            padding: 24px 0 40px 0 !important;
          }
          .wholesale-form-card {
            padding: 20px 16px !important;
            border-radius: 14px !important;
          }
        }
        @media (max-width: 550px) {
          .wholesale-products-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 8px !important;
          }
        }
      `}</style>
    </div>
  );
};
