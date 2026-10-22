import React, { useState } from 'react';
import { 
  ShoppingBag, 
  MessageCircle, 
  ArrowLeft, 
  Check, 
  ShieldAlert, 
  Sparkles, 
  ChevronRight
} from 'lucide-react';
import { Product, PageView, Language, Currency } from '../types';
import { PRODUCTS } from '../data/products';
import { formatPrice } from '../utils/currency';
import { getProductName, getProductSubtitle } from '../utils/translations';

interface ProductDetailPageProps {
  product: Product;
  onNavigate: (page: PageView, productSlug?: string) => void;
  onAddToCart: (product: Product, packSize: '250g' | '500g' | '1kg', quantity: number) => void;
  language: Language;
  currency?: Currency;
}

export const ProductDetailPage: React.FC<ProductDetailPageProps> = ({
  product,
  onNavigate,
  onAddToCart,
  language,
  currency = 'INR',
}) => {
  const [selectedPackSize, setSelectedPackSize] = useState<'250g' | '500g' | '1kg'>('500g');
  const [quantity, setQuantity] = useState(1);
  const [addedNotice, setAddedNotice] = useState(false);
  const [zoomOpen, setZoomOpen] = useState(false);

  const gallery = product.galleryImages && product.galleryImages.length > 0 
    ? product.galleryImages 
    : [product.image];
  const [activeImage, setActiveImage] = useState(gallery[0]);

  const price = product.provisionalPrice[selectedPackSize];
  const relatedProducts = PRODUCTS.filter((p) => p.id !== product.id).slice(0, 4);

  const handleAddToCart = () => {
    onAddToCart(product, selectedPackSize, quantity);
    setAddedNotice(true);
    setTimeout(() => setAddedNotice(false), 2200);
  };

  const handleWhatsAppOrder = () => {
    const formattedTotal = formatPrice(price * quantity, currency);
    const prodName = getProductName(product, language);
    const text = encodeURIComponent(
      `Hello Jyotiraj Global Company! I would like to order "${prodName}" in ${selectedPackSize} pack (Qty: ${quantity}, Total: ${formattedTotal}). Please confirm availability.`
    );
    window.open(`https://wa.me/919876543210?text=${text}`, '_blank');
  };

  return (
    <div style={{ backgroundColor: 'var(--color-warm-ivory)', minHeight: '100vh', paddingBottom: '80px' }}>
      {/* Breadcrumb Bar */}
      <div style={{
        backgroundColor: 'var(--color-soft-sand)',
        borderBottom: '1px solid var(--color-border)',
        padding: '12px 0'
      }}>
        <div className="container" style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          fontSize: '13px',
          color: 'var(--color-muted-text)'
        }}>
          <button
            onClick={() => onNavigate('home')}
            style={{ background: 'none', border: 'none', color: 'inherit', cursor: 'pointer', padding: 0 }}
          >
            Home
          </button>
          <ChevronRight size={14} />
          <button
            onClick={() => onNavigate('shop')}
            style={{ background: 'none', border: 'none', color: 'inherit', cursor: 'pointer', padding: 0 }}
          >
            Sweets
          </button>
          <ChevronRight size={14} />
          <span style={{ color: 'var(--color-royal-maroon)', fontWeight: 700 }}>
            {product.name}
          </span>
        </div>
      </div>

      <div className="container" style={{ paddingTop: '40px' }}>
        {/* Back Link */}
        <button
          onClick={() => onNavigate('shop')}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            background: 'none',
            border: 'none',
            color: 'var(--color-royal-maroon)',
            fontSize: '14px',
            fontWeight: 700,
            cursor: 'pointer',
            marginBottom: '24px'
          }}
        >
          <ArrowLeft size={16} />
          <span>Back to Collection</span>
        </button>

        {/* Product Hero Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr',
          gap: '36px',
          marginBottom: '44px'
        }} className="pdp-hero-grid">
          
          {/* Left: Product Image & Side Thumbnails */}
          <div style={{ display: 'flex', gap: '14px', alignItems: 'flex-start' }} className="pdp-gallery-container">
            {/* Gallery Thumbnails (Side of Main Image) */}
            {gallery.length > 1 && (
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '10px',
                flexShrink: 0
              }} className="pdp-thumbnails-strip">
                {gallery.map((imgUrl, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveImage(imgUrl)}
                    style={{
                      width: '54px',
                      height: '54px',
                      borderRadius: '8px',
                      overflow: 'hidden',
                      border: activeImage === imgUrl ? '2px solid var(--color-royal-maroon)' : '1px solid var(--color-border)',
                      padding: '2px',
                      backgroundColor: '#fff',
                      cursor: 'pointer',
                      boxShadow: activeImage === imgUrl ? '0 2px 8px rgba(107, 18, 15, 0.2)' : 'none',
                      transition: 'var(--transition-smooth)'
                    }}
                    title={i === 0 ? 'Product Photo' : 'Nutrition & Packaging'}
                  >
                    <img src={imgUrl} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '4px' }} />
                  </button>
                ))}
              </div>
            )}

            {/* Main Image Card */}
            <div 
              onClick={() => setZoomOpen(true)}
              style={{
                borderRadius: '16px',
                overflow: 'hidden',
                backgroundColor: 'var(--color-pure-white)',
                border: '1.5px solid var(--color-border)',
                boxShadow: '0 6px 24px rgba(67, 12, 10, 0.06)',
                position: 'relative',
                cursor: 'zoom-in',
                flex: 1,
                maxWidth: '400px'
              }}
              title="Click to view full high-resolution image"
            >
              <img
                src={activeImage}
                alt={product.name}
                style={{
                  width: '100%',
                  height: 'auto',
                  display: 'block',
                  maxHeight: '390px',
                  objectFit: 'contain'
                }}
              />

              {product.badge && (
                <div style={{
                  position: 'absolute',
                  top: '12px',
                  left: '12px',
                  backgroundColor: 'var(--color-royal-maroon)',
                  color: 'var(--color-pure-white)',
                  fontSize: '11px',
                  fontWeight: 700,
                  padding: '5px 12px',
                  borderRadius: '6px',
                  letterSpacing: '0.5px',
                  textTransform: 'uppercase'
                }}>
                  {product.badge}
                </div>
              )}

              <div style={{
                position: 'absolute',
                bottom: '10px',
                right: '10px',
                backgroundColor: 'rgba(0,0,0,0.6)',
                color: '#fff',
                fontSize: '10.5px',
                padding: '3px 8px',
                borderRadius: '4px',
                backdropFilter: 'blur(2px)'
              }}>
                🔍 Click to Zoom
              </div>
            </div>
          </div>

          {/* Right: Product Details & Purchase Controls */}
          <div>
            <div style={{
              fontSize: '11px',
              fontWeight: 700,
              color: 'var(--color-antique-gold-dark)',
              textTransform: 'uppercase',
              letterSpacing: '1.5px',
              marginBottom: '4px'
            }}>
              {product.categoryLabel}
            </div>

            <h1 style={{
              fontFamily: 'var(--font-heading)',
              fontSize: '28px',
              fontWeight: 800,
              color: 'var(--color-royal-maroon)',
              lineHeight: 1.25,
              marginBottom: '4px'
            }}>
              {getProductName(product, language)}
            </h1>

            <p style={{
              fontSize: '14.5px',
              color: 'var(--color-muted-text)',
              marginBottom: '16px',
              fontStyle: 'italic'
            }}>
              {getProductSubtitle(product, language)}
            </p>

            {/* Price Box */}
            <div style={{
              backgroundColor: 'var(--color-pure-white)',
              padding: '10px 18px',
              borderRadius: '10px',
              border: '1px solid var(--color-border)',
              marginBottom: '18px',
              display: 'inline-flex',
              alignItems: 'baseline',
              gap: '10px'
            }}>
              <div style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '26px',
                fontWeight: 800,
                color: 'var(--color-royal-maroon)'
              }}>
                {formatPrice(price, currency)}
              </div>
              <div style={{ fontSize: '12px', color: 'var(--color-muted-text)' }}>
                for {selectedPackSize} pack (taxes included)
              </div>
            </div>

            {/* Pack Size Selector */}
            <div style={{ marginBottom: '18px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '6px', maxWidth: '360px' }}>
                <span style={{ fontSize: '12.5px', fontWeight: 700, color: 'var(--color-espresso-brown)' }}>
                  Pack Size:
                </span>
                <span style={{ fontSize: '11px', color: 'var(--color-antique-gold-dark)', fontWeight: 600 }}>
                  Airtight food-safe container
                </span>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '8px', maxWidth: '360px' }}>
                {(['250g', '500g', '1kg'] as const).map((size) => (
                  <button
                    key={size}
                    type="button"
                    onClick={() => setSelectedPackSize(size)}
                    style={{
                      padding: '8px 0',
                      textAlign: 'center',
                      borderRadius: '6px',
                      fontSize: '13px',
                      fontWeight: 700,
                      border: selectedPackSize === size ? '2px solid var(--color-royal-maroon)' : '1px solid var(--color-border)',
                      backgroundColor: selectedPackSize === size ? 'rgba(107, 18, 15, 0.08)' : 'var(--color-pure-white)',
                      color: selectedPackSize === size ? 'var(--color-royal-maroon)' : 'var(--color-espresso-brown)',
                      cursor: 'pointer',
                      transition: 'var(--transition-smooth)'
                    }}
                  >
                    {size} Pack
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity Selector & Action Buttons */}
            <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '10px', marginBottom: '22px' }}>
              {/* Quantity */}
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                backgroundColor: 'var(--color-pure-white)',
                border: '1px solid var(--color-border)',
                borderRadius: '9999px',
                padding: '2px 8px'
              }}>
                <button
                  type="button"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  style={{ background: 'none', border: 'none', fontSize: '16px', fontWeight: 700, cursor: 'pointer', padding: '0 6px', color: 'var(--color-espresso-brown)' }}
                >
                  -
                </button>
                <span style={{ fontSize: '13.5px', fontWeight: 700, minWidth: '24px', textAlign: 'center' }}>
                  {quantity}
                </span>
                <button
                  type="button"
                  onClick={() => setQuantity(quantity + 1)}
                  style={{ background: 'none', border: 'none', fontSize: '16px', fontWeight: 700, cursor: 'pointer', padding: '0 6px', color: 'var(--color-espresso-brown)' }}
                >
                  +
                </button>
              </div>

              {/* Add to Cart */}
              <button
                type="button"
                onClick={handleAddToCart}
                className="btn btn-primary"
                style={{ padding: '9px 18px', fontSize: '13px', borderRadius: '9999px' }}
              >
                {addedNotice ? (
                  <>
                    <Check size={16} /> Added
                  </>
                ) : (
                  <>
                    <ShoppingBag size={16} /> Add to Cart (₹{price * quantity})
                  </>
                )}
              </button>

              {/* WhatsApp Order */}
              <button
                type="button"
                onClick={handleWhatsAppOrder}
                className="btn btn-whatsapp"
                style={{ padding: '9px 18px', fontSize: '13px', borderRadius: '9999px' }}
              >
                <MessageCircle size={16} />
                <span>Order on WhatsApp</span>
              </button>
            </div>

            {/* Serving Precaution Notice (if applicable, e.g. Kids Special) */}
            {product.servingPrecautions && (
              <div style={{
                backgroundColor: 'rgba(201, 149, 46, 0.12)',
                border: '1px solid rgba(201, 149, 46, 0.4)',
                borderRadius: '8px',
                padding: '12px 14px',
                display: 'flex',
                gap: '10px',
                fontSize: '12.5px',
                color: 'var(--color-espresso-brown)',
                marginBottom: '18px'
              }}>
                <ShieldAlert size={18} color="var(--color-antique-gold-dark)" style={{ flexShrink: 0 }} />
                <span>{product.servingPrecautions}</span>
              </div>
            )}

            {/* Overview */}
            <p style={{ fontSize: '14px', color: 'var(--color-espresso-brown)', lineHeight: 1.6 }}>
              {product.websiteDescription}
            </p>
          </div>
        </div>

        {/* Section: Why You'll Love It (Refined compact scale) */}
        <div style={{
          backgroundColor: 'var(--color-warm-ivory)',
          padding: '26px 30px',
          borderRadius: '14px',
          border: '1px solid var(--color-border)',
          marginBottom: '40px'
        }}>
          <h3 style={{ fontSize: '20px', color: 'var(--color-royal-maroon)', marginBottom: '16px' }}>
            Why You'll Love This Sweet
          </h3>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '14px'
          }}>
            {product.highlights.map((item, idx) => (
              <div key={idx} style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: '10px',
                backgroundColor: 'var(--color-pure-white)',
                padding: '12px 14px',
                borderRadius: '8px',
                border: '1px solid var(--color-border)',
                boxShadow: '0 1px 4px rgba(67, 12, 10, 0.04)'
              }}>
                <div style={{
                  width: '28px',
                  height: '28px',
                  borderRadius: '50%',
                  backgroundColor: 'rgba(201, 149, 46, 0.15)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--color-antique-gold-dark)',
                  flexShrink: 0
                }}>
                  <Sparkles size={14} />
                </div>
                <div style={{ fontSize: '13px', fontWeight: 600, color: 'var(--color-espresso-brown)', lineHeight: 1.45 }}>
                  {item}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Section: Ingredients & Sensory Profile */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr',
          gap: '30px',
          marginBottom: '50px'
        }} className="pdp-details-grid">
          
          {/* Proposed Ingredients Card */}
          <div style={{
            backgroundColor: 'var(--color-warm-ivory)',
            padding: '28px 30px',
            borderRadius: '16px',
            border: '1px solid var(--color-border)',
            display: 'flex',
            flexDirection: 'column'
          }}>
            <h3 style={{ fontSize: '20px', color: 'var(--color-royal-maroon)', marginBottom: '12px' }}>
              Pure Ingredients
            </h3>
            <p style={{ fontSize: '12.5px', color: 'var(--color-muted-text)', marginBottom: '18px', lineHeight: 1.45 }}>
              * Made with 100% natural nuts, dried fruits, wholesome seeds, and pure desi cow ghee. Free from white sugar and chemical preservatives.
            </p>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '20px' }}>
              {product.proposedIngredients.map((ing, i) => (
                <span
                  key={i}
                  style={{
                    backgroundColor: 'var(--color-pure-white)',
                    border: '1px solid var(--color-border)',
                    padding: '7px 13px',
                    borderRadius: '9999px',
                    fontSize: '13px',
                    color: 'var(--color-espresso-brown)',
                    fontWeight: 600,
                    boxShadow: '0 1px 3px rgba(67, 12, 10, 0.04)'
                  }}
                >
                  {ing.name} <span style={{ color: 'var(--color-antique-gold-dark)' }}>({ing.hindiName})</span>
                </span>
              ))}
            </div>

            {/* Allergens warning */}
            <div style={{
              marginTop: 'auto',
              padding: '12px 14px',
              borderRadius: '8px',
              backgroundColor: 'var(--color-pure-white)',
              border: '1px solid rgba(107, 18, 15, 0.2)',
              fontSize: '12.5px',
              lineHeight: 1.5,
              boxShadow: '0 1px 3px rgba(67, 12, 10, 0.04)'
            }}>
              <strong style={{ color: 'var(--color-royal-maroon)' }}>Allergen Notice:</strong> Contains natural tree nuts ({product.allergens.join(', ')}). 100% Vegetarian.
            </div>
          </div>

          {/* Sensory Profile & Nutritional Framework Card */}
          <div style={{
            backgroundColor: 'var(--color-warm-ivory)',
            padding: '28px 30px',
            borderRadius: '16px',
            border: '1px solid var(--color-border)',
            display: 'flex',
            flexDirection: 'column',
            gap: '18px'
          }}>
            {/* Part 1: Taste & Freshness */}
            <div>
              <h3 style={{ fontSize: '20px', color: 'var(--color-royal-maroon)', marginBottom: '12px' }}>
                Taste & Freshness
              </h3>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '13.5px', lineHeight: 1.5 }}>
                <div>
                  <strong style={{ color: 'var(--color-royal-maroon)' }}>Taste: </strong>
                  <span style={{ color: 'var(--color-espresso-brown)' }}>{product.sensoryProfile.taste}</span>
                </div>
                <div>
                  <strong style={{ color: 'var(--color-royal-maroon)' }}>Texture: </strong>
                  <span style={{ color: 'var(--color-espresso-brown)' }}>{product.sensoryProfile.texture}</span>
                </div>
                <div>
                  <strong style={{ color: 'var(--color-royal-maroon)' }}>Aroma: </strong>
                  <span style={{ color: 'var(--color-espresso-brown)' }}>{product.sensoryProfile.aroma}</span>
                </div>
                <div>
                  <strong style={{ color: 'var(--color-royal-maroon)' }}>Appearance: </strong>
                  <span style={{ color: 'var(--color-espresso-brown)' }}>{product.sensoryProfile.appearance}</span>
                </div>
              </div>
            </div>

            {/* Subtle Divider */}
            <div style={{ height: '1px', backgroundColor: 'var(--color-border)', margin: '2px 0' }} />

            {/* Part 2: Nutrition Guide & Storage */}
            <div>
              <h3 style={{ fontSize: '20px', color: 'var(--color-royal-maroon)', marginBottom: '8px' }}>
                Nutrition & Storage Guide
              </h3>
              <p style={{ fontSize: '12px', color: 'var(--color-muted-text)', marginBottom: '14px', lineHeight: 1.45 }}>
                Wholesome traditional nutrients naturally present in premium dry fruits, dates, and pure cow ghee.
              </p>

              {/* Nutrients Chips */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))',
                gap: '8px',
                marginBottom: '14px'
              }}>
                <div style={{ padding: '8px 10px', border: '1px solid var(--color-border)', borderRadius: '8px', backgroundColor: 'var(--color-pure-white)', boxShadow: '0 1px 3px rgba(67, 12, 10, 0.04)' }}>
                  <div style={{ fontSize: '10.5px', color: 'var(--color-muted-text)' }}>Natural Energy</div>
                  <div style={{ fontSize: '13px', fontWeight: 700, color: 'var(--color-royal-maroon)' }}>Rich Energy Bite</div>
                </div>
                <div style={{ padding: '8px 10px', border: '1px solid var(--color-border)', borderRadius: '8px', backgroundColor: 'var(--color-pure-white)', boxShadow: '0 1px 3px rgba(67, 12, 10, 0.04)' }}>
                  <div style={{ fontSize: '10.5px', color: 'var(--color-muted-text)' }}>Protein</div>
                  <div style={{ fontSize: '13px', fontWeight: 700, color: 'var(--color-royal-maroon)' }}>From Nuts & Seeds</div>
                </div>
                <div style={{ padding: '8px 10px', border: '1px solid var(--color-border)', borderRadius: '8px', backgroundColor: 'var(--color-pure-white)', boxShadow: '0 1px 3px rgba(67, 12, 10, 0.04)' }}>
                  <div style={{ fontSize: '10.5px', color: 'var(--color-muted-text)' }}>Natural Sweetness</div>
                  <div style={{ fontSize: '13px', fontWeight: 700, color: 'var(--color-royal-maroon)' }}>100% Pure Dates</div>
                </div>
                <div style={{ padding: '8px 10px', border: '1px solid var(--color-border)', borderRadius: '8px', backgroundColor: 'var(--color-pure-white)', boxShadow: '0 1px 3px rgba(67, 12, 10, 0.04)' }}>
                  <div style={{ fontSize: '10.5px', color: 'var(--color-muted-text)' }}>Dietary Fiber</div>
                  <div style={{ fontSize: '13px', fontWeight: 700, color: 'var(--color-royal-maroon)' }}>Naturally Rich</div>
                </div>
                <div style={{ padding: '8px 10px', border: '1px solid var(--color-border)', borderRadius: '8px', backgroundColor: 'var(--color-pure-white)', boxShadow: '0 1px 3px rgba(67, 12, 10, 0.04)' }}>
                  <div style={{ fontSize: '10.5px', color: 'var(--color-muted-text)' }}>Healthy Fats</div>
                  <div style={{ fontSize: '13px', fontWeight: 700, color: 'var(--color-royal-maroon)' }}>Pure Ghee & Nuts</div>
                </div>
              </div>

              {/* Storage Guidelines Banner */}
              <div style={{
                backgroundColor: 'var(--color-pure-white)',
                padding: '10px 14px',
                borderRadius: '8px',
                fontSize: '12px',
                color: 'var(--color-espresso-brown)',
                border: '1px solid var(--color-border)',
                lineHeight: 1.45,
                boxShadow: '0 1px 3px rgba(67, 12, 10, 0.04)'
              }}>
                <strong style={{ color: 'var(--color-royal-maroon)' }}>Storage: </strong>
                Keep in a closed airtight container in a cool, dry place away from heat and moisture. Keep away from water to retain crunch and freshness.
              </div>
            </div>
          </div>
        </div>

        {/* Section: Related Products (Compact & Refined) */}
        <div style={{ marginBottom: '40px' }}>
          <h3 style={{ fontSize: '22px', color: 'var(--color-royal-maroon)', marginBottom: '16px' }}>
            You May Also Like
          </h3>

          <div className="pdp-related-grid" style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(170px, 205px))',
            gap: '16px'
          }}>
            {relatedProducts.map((rel) => (
              <div
                key={rel.id}
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                  onNavigate('product-detail', rel.slug);
                }}
                className="card-premium"
                style={{
                  cursor: 'pointer',
                  backgroundColor: 'var(--color-pure-white)',
                  borderRadius: '12px',
                  overflow: 'hidden',
                  border: '1px solid var(--color-border)',
                  transition: 'all 0.25s ease'
                }}
              >
                <div style={{ width: '100%', height: '140px', overflow: 'hidden', backgroundColor: 'var(--color-cream-sand)' }}>
                  <img
                    src={rel.image}
                    alt={rel.name}
                    style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.3s ease' }}
                  />
                </div>
                <div style={{ padding: '12px 14px' }}>
                  <div style={{ fontSize: '10px', color: 'var(--color-antique-gold-dark)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.4px' }}>
                    {rel.categoryLabel}
                  </div>
                  <h4 style={{
                    fontSize: '14px',
                    color: 'var(--color-royal-maroon)',
                    marginTop: '4px',
                    marginBottom: '6px',
                    lineHeight: 1.3,
                    whiteSpace: 'nowrap',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis'
                  }}>
                    {getProductName(rel, language).replace('Jyotiraj ', '').replace('ज्योतीराज ', '')}
                  </h4>
                  <div style={{ fontSize: '15px', fontWeight: 800, color: 'var(--color-royal-maroon)', fontFamily: 'var(--font-heading)' }}>
                    {formatPrice(rel.provisionalPrice['500g'], currency)} <span style={{ fontSize: '10.5px', color: 'var(--color-muted-text)', fontWeight: 400 }}>/ 500g</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Lightbox Zoom Modal for High-Resolution Infographic & Photo */}
      {zoomOpen && (
        <div 
          onClick={() => setZoomOpen(false)}
          style={{
            position: 'fixed',
            inset: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.88)',
            zIndex: 120,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '20px',
            cursor: 'zoom-out'
          }}
        >
          <div 
            onClick={(e) => e.stopPropagation()}
            style={{
              position: 'relative',
              maxWidth: '90vw',
              maxHeight: '90vh',
              backgroundColor: '#fff',
              borderRadius: '12px',
              overflow: 'hidden',
              boxShadow: '0 25px 60px rgba(0,0,0,0.5)'
            }}
          >
            <button
              onClick={() => setZoomOpen(false)}
              style={{
                position: 'absolute',
                top: '12px',
                right: '12px',
                backgroundColor: 'rgba(0,0,0,0.7)',
                color: '#fff',
                border: 'none',
                borderRadius: '50%',
                width: '36px',
                height: '36px',
                fontSize: '18px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                zIndex: 10
              }}
            >
              ✕
            </button>
            <img
              src={activeImage}
              alt={product.name}
              style={{
                width: '100%',
                maxHeight: '85vh',
                display: 'block',
                objectFit: 'contain'
              }}
            />
          </div>
        </div>
      )}

      <style>{`
        @media (min-width: 992px) {
          .pdp-hero-grid {
            grid-template-columns: 480px 1fr !important;
            gap: 40px !important;
            align-items: start !important;
          }
          .pdp-details-grid {
            grid-template-columns: 1fr 1fr !important;
          }
        }
        @media (max-width: 640px) {
          .pdp-gallery-container {
            flex-direction: column-reverse !important;
          }
          .pdp-thumbnails-strip {
            flex-direction: row !important;
            justify-content: center !important;
          }
          .pdp-related-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
            gap: 10px !important;
          }
        }
      `}</style>
    </div>
  );
};
