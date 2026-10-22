import React, { useState } from 'react';
import { PageView, Language } from '../types';
import { CheckCircle2, Send, Package, ClipboardCheck, FileText } from 'lucide-react';

interface ExportPageProps {
  onNavigate: (page: PageView) => void;
  language: Language;
}

export const ExportPage: React.FC<ExportPageProps> = ({ onNavigate, language }) => {
  const [formData, setFormData] = useState({
    contactName: '',
    companyName: '',
    corporateEmail: '',
    destinationCountry: '',
    targetPort: '',
    shipmentVolume: 'LCL (Less than Container Load)',
    specialInquiries: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.contactName || !formData.companyName || !formData.corporateEmail || !formData.destinationCountry) {
      alert(language === 'mr' ? 'कृपया आवश्यक माहिती भरा.' : 'Please fill in all required fields.');
      return;
    }
    setSubmitted(true);
  };

  return (
    <div className="export-page-wrapper" style={{ backgroundColor: 'var(--color-warm-ivory)', minHeight: '100vh', padding: '44px 0 80px 0' }}>
      <div className="container" style={{ maxWidth: '1060px' }}>

        {/* 1. Page Header (Exact match to reference screenshot) */}
        <div style={{ textAlign: 'center', marginBottom: '32px' }}>
          {/* Gold Flourish Eyebrow */}
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '12px',
            marginBottom: '14px'
          }}>
            <span style={{ width: '36px', height: '1px', backgroundColor: 'var(--color-antique-gold)' }} />
            <span style={{
              color: 'var(--color-antique-gold)',
              fontSize: '12.5px',
              fontWeight: 700,
              letterSpacing: '2px',
              textTransform: 'uppercase'
            }}>
              {language === 'mr' ? 'आंतरराष्ट्रीय व्यवसाय पोर्टल' : 'WORLDWIDE EXPORT'}
            </span>
            <span style={{ width: '36px', height: '1px', backgroundColor: 'var(--color-antique-gold)' }} />
          </div>

          {/* Main Headline */}
          <h1 style={{
            fontFamily: 'var(--font-heading)',
            fontSize: 'clamp(28px, 3.2vw, 42px)',
            color: 'var(--color-royal-maroon)',
            fontWeight: 800,
            maxWidth: '820px',
            margin: '0 auto 18px auto',
            lineHeight: 1.2
          }}>
            {language === 'mr'
              ? 'जागतिक व्यवसायासाठी अस्सल पारंपरिक भारतीय मिठाया'
              : 'Traditional Indian Sweets for Global Markets'}
          </h1>

          {/* Gold Flourish Diamond Motif Divider */}
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '12px',
            margin: '0 auto 28px auto'
          }}>
            <span style={{ width: '70px', height: '1px', backgroundColor: 'var(--color-antique-gold)', opacity: 0.6 }} />
            <span style={{
              display: 'inline-block',
              width: '8px',
              height: '8px',
              backgroundColor: 'transparent',
              border: '1.5px solid var(--color-antique-gold)',
              transform: 'rotate(45deg)'
            }} />
            <span style={{ width: '70px', height: '1px', backgroundColor: 'var(--color-antique-gold)', opacity: 0.6 }} />
          </div>

          {/* Subtitle / Section Heading */}
          <h2 style={{
            fontFamily: 'var(--font-heading)',
            fontSize: 'clamp(20px, 2.2vw, 26px)',
            color: 'var(--color-royal-maroon)',
            fontWeight: 800,
            marginBottom: '20px'
          }}>
            {language === 'mr'
              ? 'निर्यात पॅकेजिंग आणि तपशील फ्रेमवर्क'
              : 'Export-Grade Packaging & Worldwide Shipping'}
          </h2>
        </div>

        {/* 2. Three Specification Cards with WHITE Background (Exact match to user requirement) */}
        <div
          className="export-three-cards-row"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '20px',
            marginBottom: '36px'
          }}
        >
          {/* Card 1: Packaging Formats */}
          <div style={{
            backgroundColor: '#FFFFFF',
            borderRadius: '16px',
            border: '1px solid rgba(230, 213, 185, 0.75)',
            boxShadow: '0 2px 10px rgba(67, 12, 10, 0.03)',
            padding: '28px 20px',
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'all 0.25s ease'
          }}>
            <div style={{
              width: '56px',
              height: '56px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'var(--color-antique-gold-dark)',
              marginBottom: '10px'
            }}>
              <Package size={42} strokeWidth={1.5} color="#C9952E" />
            </div>
            <div style={{
              fontSize: '15px',
              fontWeight: 700,
              color: '#39231B',
              lineHeight: 1.3
            }}>
              {language === 'mr' ? 'पॅकेजिंग स्वरूप' : 'Airtight\nPackaging'}
            </div>
          </div>

          {/* Card 2: Compliance Readiness */}
          <div style={{
            backgroundColor: '#FFFFFF',
            borderRadius: '16px',
            border: '1px solid rgba(230, 213, 185, 0.75)',
            boxShadow: '0 2px 10px rgba(67, 12, 10, 0.03)',
            padding: '28px 20px',
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'all 0.25s ease'
          }}>
            <div style={{
              width: '56px',
              height: '56px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'var(--color-antique-gold-dark)',
              marginBottom: '10px'
            }}>
              <ClipboardCheck size={42} strokeWidth={1.5} color="#C9952E" />
            </div>
            <div style={{
              fontSize: '15px',
              fontWeight: 700,
              color: '#39231B',
              lineHeight: 1.3
            }}>
              {language === 'mr' ? 'अन्न सुरक्षा पूर्तता' : 'Certified\nQuality'}
            </div>
          </div>

          {/* Card 3: Customs Documentation */}
          <div style={{
            backgroundColor: '#FFFFFF',
            borderRadius: '16px',
            border: '1px solid rgba(230, 213, 185, 0.75)',
            boxShadow: '0 2px 10px rgba(67, 12, 10, 0.03)',
            padding: '28px 20px',
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'all 0.25s ease'
          }}>
            <div style={{
              width: '56px',
              height: '56px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'var(--color-antique-gold-dark)',
              marginBottom: '10px'
            }}>
              <FileText size={42} strokeWidth={1.5} color="#C9952E" />
            </div>
            <div style={{
              fontSize: '15px',
              fontWeight: 700,
              color: '#39231B',
              lineHeight: 1.3
            }}>
              {language === 'mr' ? 'सीमाशुल्क कागदपत्रे' : 'Complete Export\nDocuments'}
            </div>
          </div>
        </div>

        {/* 3. The Form Card: "Request Export Catalog & Quote" */}
        {submitted ? (
          <div style={{
            backgroundColor: '#FFFFFF',
            borderRadius: '18px',
            padding: '60px 40px',
            border: '2px solid var(--color-antique-gold)',
            textAlign: 'center',
            boxShadow: '0 4px 24px rgba(67, 12, 10, 0.06)',
            maxWidth: '820px',
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
              {language === 'mr' ? 'निर्यात चौकशी नोंदवली गेली!' : 'Export Inquiry Received!'}
            </h2>

            <p style={{ fontSize: '16px', color: 'var(--color-espresso-brown)', maxWidth: '580px', margin: '0 auto 28px auto', lineHeight: 1.6 }}>
              {language === 'mr'
                ? `धन्यवाद ${formData.contactName}. ${formData.destinationCountry} साठी आमचे आंतरराष्ट्रीय निर्यात अधिकारी ${formData.companyName} च्या गरजेनुसार कोटेशन तयार करतील.`
                : `Thank you, ${formData.contactName}. Our International Export team will review your requirements for ${formData.destinationCountry} and email ${formData.corporateEmail} with shipping timelines and best pricing.`}
            </p>

            <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <button
                onClick={() => setSubmitted(false)}
                style={{
                  backgroundColor: '#5C1310',
                  color: '#FFFFFF',
                  border: 'none',
                  borderRadius: '8px',
                  padding: '12px 26px',
                  fontSize: '14.5px',
                  fontWeight: 700,
                  cursor: 'pointer'
                }}
              >
                {language === 'mr' ? 'दुसरी चौकशी पाठवा' : 'Submit Another Request'}
              </button>
              <button
                onClick={() => onNavigate('shop')}
                style={{
                  backgroundColor: 'transparent',
                  color: '#5C1310',
                  border: '1.5px solid #5C1310',
                  borderRadius: '8px',
                  padding: '12px 26px',
                  fontSize: '14.5px',
                  fontWeight: 700,
                  cursor: 'pointer'
                }}
              >
                {language === 'mr' ? 'मिठाई दालन पहा' : 'Explore Sweets Collection'}
              </button>
            </div>
          </div>
        ) : (
          <div className="export-form-card" style={{
            backgroundColor: '#FFFFFF',
            borderRadius: '18px',
            border: '1px solid rgba(230, 213, 185, 0.75)',
            boxShadow: '0 4px 24px rgba(67, 12, 10, 0.04)',
            padding: '36px 40px',
            maxWidth: '960px',
            margin: '0 auto'
          }}>
            {/* Form Title & Subtitle */}
            <h3 style={{
              fontFamily: 'var(--font-heading)',
              fontSize: '26px',
              color: 'var(--color-royal-maroon)',
              fontWeight: 800,
              marginBottom: '8px'
            }}>
              {language === 'mr' ? 'निर्यात तपशील आणि कोटेशन विनंती' : 'Request Export Catalog & Price Quote'}
            </h3>

            <p style={{
              fontFamily: 'var(--font-body)',
              fontSize: '14.5px',
              color: '#5F5148',
              lineHeight: 1.5,
              marginBottom: '26px'
            }}>
              {language === 'mr'
                ? 'स्थानिक आयात नियम आणि मालवाहतुकीच्या वेळेची पडताळणी करण्यासाठी कृपया आपले गंतव्य बाजार आणि लक्ष्यित प्रमाण नमूद करा.'
                : 'Tell us your destination country and required order volume. Our export team will provide full product details, shelf-life information, and shipping rates.'}
            </p>

            <form onSubmit={handleSubmit}>

              {/* Row 1 (2 Columns): Contact Name & Company Name */}
              <div className="export-form-grid-2">
                <div>
                  <label className="export-form-label">Contact Name *</label>
                  <input
                    type="text"
                    required
                    className="export-form-input"
                    placeholder="e.g. Johnathan Miller"
                    value={formData.contactName}
                    onChange={(e) => setFormData({ ...formData, contactName: e.target.value })}
                  />
                </div>

                <div>
                  <label className="export-form-label">Company Name *</label>
                  <input
                    type="text"
                    required
                    className="export-form-input"
                    placeholder="e.g. Global Foods Trading Ltd."
                    value={formData.companyName}
                    onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                  />
                </div>
              </div>

              {/* Row 2 (2 Columns): Corporate Email & Destination Country */}
              <div className="export-form-grid-2">
                <div>
                  <label className="export-form-label">Corporate Email *</label>
                  <input
                    type="email"
                    required
                    className="export-form-input"
                    placeholder="buyer@globalfoods.com"
                    value={formData.corporateEmail}
                    onChange={(e) => setFormData({ ...formData, corporateEmail: e.target.value })}
                  />
                </div>

                <div>
                  <label className="export-form-label">Destination Country *</label>
                  <input
                    type="text"
                    required
                    className="export-form-input"
                    placeholder="e.g. United Arab Emirates, UK, USA"
                    value={formData.destinationCountry}
                    onChange={(e) => setFormData({ ...formData, destinationCountry: e.target.value })}
                  />
                </div>
              </div>

              {/* Row 3 (2 Columns): Target Port & Target Shipment Volume */}
              <div className="export-form-grid-2">
                <div>
                  <label className="export-form-label">Target Port / Destination Airport</label>
                  <input
                    type="text"
                    className="export-form-input"
                    placeholder="e.g. Jebel Ali, Dubai / Heathrow, London"
                    value={formData.targetPort}
                    onChange={(e) => setFormData({ ...formData, targetPort: e.target.value })}
                  />
                </div>

                <div>
                  <label className="export-form-label">Target Shipment Volume</label>
                  <div style={{ position: 'relative' }}>
                    <select
                      className="export-form-input export-form-select"
                      value={formData.shipmentVolume}
                      onChange={(e) => setFormData({ ...formData, shipmentVolume: e.target.value })}
                    >
                      <option value="LCL (Less than Container Load)">LCL (Less than Container Load)</option>
                      <option value="FCL (20ft Full Container Load)">FCL (20ft Full Container Load)</option>
                      <option value="FCL (40ft Full Container Load)">FCL (40ft Full Container Load)</option>
                      <option value="Air Freight Pallet Consignment">Air Freight Pallet Consignment</option>
                      <option value="Sample / Trial Dispatch (100–300 kg)">Sample / Trial Dispatch (100–300 kg)</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Row 4 (Full Width): Special Inquiries or Compliance Questions */}
              <div style={{ marginBottom: '26px' }}>
                <label className="export-form-label">Special Inquiries or Compliance Questions</label>
                <textarea
                  rows={4}
                  className="export-form-input"
                  placeholder="Specify target varieties, shelf-life validation requirements, or private label considerations..."
                  value={formData.specialInquiries}
                  onChange={(e) => setFormData({ ...formData, specialInquiries: e.target.value })}
                  style={{ resize: 'vertical' }}
                />
              </div>

              {/* Submit Button (Exact pill/rounded style from screenshot) */}
              <button
                type="submit"
                style={{
                  width: '100%',
                  backgroundColor: '#430C0A',
                  color: '#FFFFFF',
                  border: 'none',
                  borderRadius: '10px',
                  padding: '14px 28px',
                  fontFamily: 'var(--font-body)',
                  fontSize: '15.5px',
                  fontWeight: 700,
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '10px',
                  cursor: 'pointer',
                  boxShadow: '0 4px 14px rgba(67, 12, 10, 0.28)',
                  transition: 'all 0.2s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#5C1310';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = '#430C0A';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <Send size={16} style={{ transform: 'rotate(0deg)' }} />
                <span>{language === 'mr' ? 'आंतरराष्ट्रीय निर्यात चौकशी पाठवा' : 'Submit International Export Inquiry'}</span>
              </button>

            </form>
          </div>
        )}

      </div>

      {/* Scoped Styles Matching Mockup */}
      <style>{`
        .export-form-label {
          display: block;
          font-size: 13.5px;
          font-weight: 700;
          color: #39231B;
          margin-bottom: 7px;
        }
        .export-form-input {
          width: 100%;
          padding: 11px 14px;
          border-radius: 8px;
          border: 1px solid #D9C8AF;
          font-family: var(--font-body);
          font-size: 14.5px;
          color: #39231B;
          background-color: #FFFFFF;
          outline: none;
          transition: border-color 0.2s ease, box-shadow 0.2s ease;
        }
        .export-form-input::placeholder {
          color: #8C7D73;
          opacity: 0.85;
        }
        .export-form-input:focus {
          border-color: var(--color-antique-gold);
          box-shadow: 0 0 0 3px rgba(201, 149, 46, 0.15);
        }
        .export-form-select {
          appearance: none;
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%2339231B' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m6 9 6 6 6-6'/%3E%3C/svg%3E");
          background-repeat: no-repeat;
          background-position: right 12px center;
          background-size: 14px;
          padding-right: 36px;
          cursor: pointer;
        }
        .export-form-grid-2 {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 18px;
          margin-bottom: 18px;
        }
        @media (max-width: 800px) {
          .export-three-cards-row {
            grid-template-columns: 1fr !important;
            gap: 14px !important;
          }
          .export-form-grid-2 {
            grid-template-columns: 1fr !important;
            gap: 14px !important;
          }
        }
        @media (max-width: 768px) {
          .export-page-wrapper {
            padding: 24px 0 40px 0 !important;
          }
          .export-form-card {
            padding: 20px 16px !important;
            border-radius: 14px !important;
          }
        }
      `}</style>
    </div>
  );
};
