import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { FAQS } from '../data/products';
import { Language } from '../types';

interface FAQSectionProps {
  language: Language;
}

export const FAQSection: React.FC<FAQSectionProps> = ({ language }) => {
  const [openIndices, setOpenIndices] = useState<number[]>([0]);

  const toggleFAQ = (index: number) => {
    setOpenIndices((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  const midIndex = Math.ceil(FAQS.length / 2);
  const leftFaqs = FAQS.slice(0, midIndex);
  const rightFaqs = FAQS.slice(midIndex);

  const renderFaqItem = (faq: { question: string; answer: string }, index: number) => {
    const isOpen = openIndices.includes(index);
    return (
      <div
        key={index}
        style={{
          backgroundColor: 'var(--color-pure-white)',
          borderRadius: '12px',
          border: isOpen ? '1px solid var(--color-antique-gold)' : '1px solid var(--color-border)',
          overflow: 'hidden',
          transition: 'var(--transition-smooth)',
          boxShadow: isOpen ? '0 4px 16px rgba(67, 12, 10, 0.05)' : '0 2px 6px rgba(0,0,0,0.02)'
        }}
      >
        <button
          type="button"
          onClick={() => toggleFAQ(index)}
          className="faq-btn"
          style={{
            width: '100%',
            padding: '18px 20px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '12px',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            textAlign: 'left',
            fontFamily: 'var(--font-body)',
            fontSize: '15.5px',
            fontWeight: 700,
            color: isOpen ? 'var(--color-royal-maroon)' : 'var(--color-espresso-brown)',
          }}
          aria-expanded={isOpen}
        >
          <span style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <HelpCircle size={18} color="var(--color-antique-gold)" style={{ flexShrink: 0 }} />
            <span>{faq.question}</span>
          </span>
          <ChevronDown
            size={18}
            color="var(--color-antique-gold-dark)"
            style={{
              transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
              transition: 'transform 0.25s ease',
              flexShrink: 0
            }}
          />
        </button>

        {isOpen && (
          <div
            className="faq-answer"
            style={{
              padding: '0 20px 18px 48px',
              fontSize: '14.5px',
              color: 'var(--color-espresso-brown)',
              lineHeight: 1.65,
              borderTop: '1px solid rgba(230, 213, 185, 0.4)',
              paddingTop: '14px'
            }}
          >
            {faq.answer}
          </div>
        )}
      </div>
    );
  };

  return (
    <section className="faq-section" style={{
      backgroundColor: 'var(--color-warm-ivory)',
      padding: '80px 0',
      borderBottom: '1px solid var(--color-border)',
      position: 'relative'
    }}>
      <div className="container" style={{ maxWidth: '1240px' }}>
        <div className="faq-header" style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 48px auto' }}>
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
              {language === 'mr' ? 'नेहमी विचारले जाणारे प्रश्न' : 'FREQUENTLY ASKED QUESTIONS'}
            </span>
            <span style={{ width: '28px', height: '1px', backgroundColor: 'var(--color-antique-gold)' }} />
          </div>

          <h2 className="faq-title" style={{
            fontFamily: 'var(--font-heading)',
            fontSize: '40px',
            fontWeight: 800,
            color: 'var(--color-royal-maroon)',
            marginBottom: '16px'
          }}>
            {language === 'mr' ? 'आपल्या शंकांचे निरसन' : 'Everything You Need to Know'}
          </h2>

          <p className="faq-subtitle" style={{
            fontSize: '16.5px',
            color: 'var(--color-muted-text)',
            lineHeight: 1.6
          }}>
            Common questions regarding our ingredients, ordering procedure, wholesale requirements, and storage guidance.
          </p>
        </div>

        {/* 2-Column FAQ Accordion (4 questions on left, 4 questions on right) */}
        <div className="faq-grid-2">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }} className="faq-column">
            {leftFaqs.map((faq, idx) => renderFaqItem(faq, idx))}
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }} className="faq-column">
            {rightFaqs.map((faq, idx) => renderFaqItem(faq, idx + midIndex))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .faq-section {
            padding: 36px 0 !important;
          }
          .faq-header {
            margin-bottom: 20px !important;
          }
          .faq-title {
            font-size: clamp(22px, 5.5vw, 28px) !important;
            margin-bottom: 8px !important;
          }
          .faq-subtitle {
            font-size: 13.5px !important;
            line-height: 1.45 !important;
          }
          .faq-column {
            gap: 10px !important;
          }
          .faq-btn {
            padding: 12px 14px !important;
            font-size: 13.5px !important;
          }
          .faq-answer {
            padding: 0 14px 14px 38px !important;
            font-size: 12.5px !important;
            padding-top: 10px !important;
          }
        }
      `}</style>
    </section>
  );
};
