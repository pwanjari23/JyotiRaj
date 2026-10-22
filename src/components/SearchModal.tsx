import React, { useState } from 'react';
import { Search, X, ArrowRight } from 'lucide-react';
import { PageView, Language } from '../types';
import { PRODUCTS } from '../data/products';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (page: PageView, productSlug?: string) => void;
  language: Language;
}

export const SearchModal: React.FC<SearchModalProps> = ({ isOpen, onClose, onNavigate, language }) => {
  const [searchTerm, setSearchTerm] = useState('');

  if (!isOpen) return null;

  const results = PRODUCTS.filter((p) => {
    const term = searchTerm.toLowerCase();
    return (
      p.name.toLowerCase().includes(term) ||
      p.marathiName.toLowerCase().includes(term) ||
      p.subtitle.toLowerCase().includes(term) ||
      p.proposedIngredients.some((i) => i.name.toLowerCase().includes(term) || i.hindiName.toLowerCase().includes(term))
    );
  });

  return (
    <div style={{
      position: 'fixed',
      inset: 0,
      backgroundColor: 'rgba(57, 35, 27, 0.65)',
      zIndex: 100,
      display: 'flex',
      alignItems: 'flex-start',
      justifyContent: 'center',
      padding: '40px 20px',
      backdropFilter: 'blur(3px)'
    }}>
      <div style={{
        backgroundColor: 'var(--color-warm-ivory)',
        borderRadius: '16px',
        maxWidth: '620px',
        width: '100%',
        boxShadow: '0 20px 40px rgba(0,0,0,0.25)',
        border: '1.5px solid var(--color-border)',
        overflow: 'hidden'
      }}>
        {/* Search Input Bar */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '12px',
          padding: '16px 20px',
          backgroundColor: '#fff',
          borderBottom: '1px solid var(--color-border)'
        }}>
          <Search size={22} color="var(--color-royal-maroon)" />
          <input
            type="text"
            autoFocus
            placeholder={
              language === 'mr'
                ? 'लाडू, खजूर रोल, सुकामेवा शोधा...'
                : language === 'hi'
                ? 'लड्डू, खजूर रोल, ड्राई फ्रूट खोजें...'
                : 'Search dry fruit laddus, khajur roll, almonds, sesame...'
            }
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{
              flex: 1,
              border: 'none',
              outline: 'none',
              fontSize: '16px',
              color: 'var(--color-espresso-brown)',
              background: 'transparent'
            }}
          />
          <button
            onClick={onClose}
            style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--color-muted-text)' }}
          >
            <X size={20} />
          </button>
        </div>

        {/* Search Results */}
        <div style={{ maxHeight: '400px', overflowY: 'auto', padding: '16px 20px' }}>
          {results.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '30px 0', color: 'var(--color-muted-text)', fontSize: '14px' }}>
              No sweet varieties match "{searchTerm}". Try searching for "laddu", "khajur", or "barfi".
            </div>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {results.map((p) => (
                <div
                  key={p.id}
                  onClick={() => {
                    onClose();
                    onNavigate('product-detail', p.slug);
                  }}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '14px',
                    padding: '10px 14px',
                    borderRadius: '8px',
                    backgroundColor: '#fff',
                    border: '1px solid var(--color-border)',
                    cursor: 'pointer',
                    transition: 'var(--transition-smooth)'
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.borderColor = 'var(--color-antique-gold)')}
                  onMouseLeave={(e) => (e.currentTarget.style.borderColor = 'var(--color-border)')}
                >
                  <img src={p.image} alt={p.name} style={{ width: '48px', height: '48px', borderRadius: '6px', objectFit: 'cover' }} />
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ fontSize: '14.5px', fontWeight: 700, color: 'var(--color-royal-maroon)' }}>
                      {p.name}
                    </div>
                    <div style={{ fontSize: '12px', color: 'var(--color-muted-text)' }}>
                      ₹{p.provisionalPrice['500g']} / 500g • {p.categoryLabel}
                    </div>
                  </div>
                  <ArrowRight size={14} color="var(--color-antique-gold-dark)" />
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
