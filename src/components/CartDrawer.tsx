import React, { useState } from 'react';
import { X, Trash2, ShoppingBag, ArrowRight, Check, MessageCircle } from 'lucide-react';
import { CartItem, Currency, Language } from '../types';
import { CONTACT_INFO } from '../data/contactInfo';
import { formatPrice } from '../utils/currency';
import { getProductName } from '../utils/translations';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  onUpdateQuantity: (productId: string, packSize: '250g' | '500g' | '1kg', newQty: number) => void;
  onRemoveItem: (productId: string, packSize: '250g' | '500g' | '1kg') => void;
  onClearCart: () => void;
  currency?: Currency;
  language?: Language;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  cartItems,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
  currency = 'INR',
  language = 'en',
}) => {
  const [checkoutStep, setCheckoutStep] = useState<'cart' | 'checkout' | 'success'>('cart');
  const [orderReference, setOrderReference] = useState<string>('JR-529184');
  const [checkoutData, setCheckoutData] = useState({
    name: '',
    phone: '',
    address: '',
    city: '',
    pincode: '',
    paymentMethod: 'Cash on Delivery (COD) / WhatsApp Confirmation',
  });

  if (!isOpen) return null;

  const subtotal = cartItems.reduce((acc, item) => {
    return acc + item.product.provisionalPrice[item.packSize] * item.quantity;
  }, 0);

  const freeShippingThreshold = 1200;
  const progressPercent = Math.min(100, Math.round((subtotal / freeShippingThreshold) * 100));
  const shippingFee = subtotal >= freeShippingThreshold || subtotal === 0 ? 0 : 80;
  const grandTotal = subtotal + shippingFee;

  const handleCheckoutSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!checkoutData.name || !checkoutData.phone || !checkoutData.address) {
      alert('Please fill in required checkout details.');
      return;
    }
    setOrderReference(`JR-${Math.floor(100000 + Math.random() * 900000)}`);
    setCheckoutStep('success');
  };

  const handleWhatsAppCheckout = () => {
    const itemsSummary = cartItems
      .map((i) => `• ${getProductName(i.product, language)} (${i.packSize}) x ${i.quantity} = ${formatPrice(i.product.provisionalPrice[i.packSize] * i.quantity, currency)}`)
      .join('\n');
    
    const text = encodeURIComponent(
      `*New Order Inquiry - Jyotiraj Global Company*\n\n` +
      `*Customer:* ${checkoutData.name || 'Valued Customer'}\n` +
      `*Phone:* ${checkoutData.phone || 'Provided via WhatsApp'}\n` +
      `*Address:* ${checkoutData.address || 'Address pending'}, ${checkoutData.city} - ${checkoutData.pincode}\n\n` +
      `*Ordered Sweets:*\n${itemsSummary}\n\n` +
      `*Subtotal:* ${formatPrice(subtotal, currency)}\n` +
      `*Shipping:* ${shippingFee === 0 ? 'FREE' : formatPrice(shippingFee, currency)}\n` +
      `*Grand Total:* ${formatPrice(grandTotal, currency)}\n\n` +
      `Please confirm stock and dispatch schedule.`
    );
    window.open(`https://wa.me/${CONTACT_INFO.whatsappRaw}?text=${text}`, '_blank');
  };

  return (
    <div style={{
      position: 'fixed',
      inset: 0,
      backgroundColor: 'rgba(57, 35, 27, 0.65)',
      zIndex: 100,
      display: 'flex',
      justifyContent: 'flex-end',
      backdropFilter: 'blur(3px)'
    }}>
      <div style={{
        width: '100%',
        maxWidth: '480px',
        backgroundColor: 'var(--color-warm-ivory)',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        boxShadow: '-8px 0 30px rgba(0,0,0,0.2)',
        position: 'relative'
      }}>
        {/* Header */}
        <div style={{
          padding: '20px 24px',
          borderBottom: '1px solid var(--color-border)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          backgroundColor: 'var(--color-pure-white)'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <ShoppingBag size={22} color="var(--color-royal-maroon)" />
            <h3 style={{ fontSize: '20px', color: 'var(--color-royal-maroon)', margin: 0 }}>
              {checkoutStep === 'cart' && `Your Sweet Bag (${cartItems.length})`}
              {checkoutStep === 'checkout' && 'Checkout & Delivery'}
              {checkoutStep === 'success' && 'Order Received'}
            </h3>
          </div>

          <button
            onClick={onClose}
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              color: 'var(--color-espresso-brown)',
              padding: '4px'
            }}
            aria-label="Close Cart"
          >
            <X size={22} />
          </button>
        </div>

        {/* Free Shipping Progress */}
        {checkoutStep === 'cart' && cartItems.length > 0 && (
          <div style={{
            padding: '12px 24px',
            backgroundColor: 'rgba(201, 149, 46, 0.1)',
            borderBottom: '1px solid var(--color-border)'
          }}>
            <div style={{ fontSize: '12.5px', fontWeight: 600, color: 'var(--color-espresso-brown)', marginBottom: '6px' }}>
              {subtotal >= freeShippingThreshold
                ? '🎉 Congratulations! You have unlocked FREE Pan-India shipping!'
                : `Add ₹${freeShippingThreshold - subtotal} more for FREE shipping across India`}
            </div>
            <div style={{ width: '100%', height: '6px', backgroundColor: 'var(--color-border)', borderRadius: '9999px', overflow: 'hidden' }}>
              <div style={{
                width: `${progressPercent}%`,
                height: '100%',
                backgroundColor: 'var(--color-antique-gold)',
                transition: 'width 0.3s ease'
              }} />
            </div>
          </div>
        )}

        {/* Body Content */}
        <div style={{ flex: 1, overflowY: 'auto', padding: '24px' }}>
          {/* STEP 1: CART ITEMS */}
          {checkoutStep === 'cart' && (
            <>
              {cartItems.length === 0 ? (
                <div style={{ textAlign: 'center', padding: '60px 0' }}>
                  <ShoppingBag size={48} color="var(--color-border)" style={{ margin: '0 auto 16px auto' }} />
                  <h4 style={{ fontSize: '18px', color: 'var(--color-royal-maroon)', marginBottom: '8px' }}>
                    Your sweet bag is empty
                  </h4>
                  <p style={{ fontSize: '14px', color: 'var(--color-muted-text)', marginBottom: '24px' }}>
                    Explore our collection of authentic dry-fruit laddus and rolls.
                  </p>
                  <button onClick={onClose} className="btn btn-primary btn-sm">
                    Continue Exploring
                  </button>
                </div>
              ) : (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  {cartItems.map((item) => (
                    <div
                      key={`${item.product.id}-${item.packSize}`}
                      style={{
                        display: 'flex',
                        gap: '14px',
                        backgroundColor: 'var(--color-pure-white)',
                        padding: '14px',
                        borderRadius: '12px',
                        border: '1px solid var(--color-border)'
                      }}
                    >
                      <img
                        src={item.product.image}
                        alt={item.product.name}
                        style={{ width: '70px', height: '70px', borderRadius: '8px', objectFit: 'cover' }}
                      />

                      <div style={{ flex: 1, minWidth: 0 }}>
                        <div style={{ fontSize: '14px', fontWeight: 700, color: 'var(--color-royal-maroon)' }}>
                          {getProductName(item.product, language).replace('Jyotiraj ', '').replace('ज्योतीराज ', '')}
                        </div>
                        <div style={{ fontSize: '12px', color: 'var(--color-muted-text)', marginTop: '2px' }}>
                          Pack: {item.packSize}
                        </div>
                        <div style={{ fontSize: '15px', fontWeight: 800, color: 'var(--color-royal-maroon)', marginTop: '4px' }}>
                          {formatPrice(item.product.provisionalPrice[item.packSize] * item.quantity, currency)}
                        </div>

                        {/* Controls */}
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '8px' }}>
                          <div style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            border: '1px solid var(--color-border)',
                            borderRadius: '6px',
                            backgroundColor: 'var(--color-warm-ivory)'
                          }}>
                            <button
                              onClick={() => onUpdateQuantity(item.product.id, item.packSize, item.quantity - 1)}
                              style={{ background: 'none', border: 'none', padding: '2px 8px', cursor: 'pointer', fontWeight: 700 }}
                            >
                              -
                            </button>
                            <span style={{ fontSize: '13px', fontWeight: 700, padding: '0 6px' }}>{item.quantity}</span>
                            <button
                              onClick={() => onUpdateQuantity(item.product.id, item.packSize, item.quantity + 1)}
                              style={{ background: 'none', border: 'none', padding: '2px 8px', cursor: 'pointer', fontWeight: 700 }}
                            >
                              +
                            </button>
                          </div>

                          <button
                            onClick={() => onRemoveItem(item.product.id, item.packSize)}
                            style={{ background: 'none', border: 'none', color: '#c33', cursor: 'pointer', padding: '4px' }}
                            title="Remove item"
                            aria-label={`Remove ${item.product.name}`}
                          >
                            <Trash2 size={16} />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </>
          )}

          {/* STEP 2: CHECKOUT FORM */}
          {checkoutStep === 'checkout' && (
            <form onSubmit={handleCheckoutSubmit}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                <div>
                  <label className="form-label">Full Name *</label>
                  <input
                    type="text"
                    required
                    className="form-input"
                    placeholder="Recipient's Name"
                    value={checkoutData.name}
                    onChange={(e) => setCheckoutData({ ...checkoutData, name: e.target.value })}
                  />
                </div>

                <div>
                  <label className="form-label">Contact Mobile / WhatsApp *</label>
                  <input
                    type="tel"
                    required
                    className="form-input"
                    placeholder="10-digit mobile number"
                    value={checkoutData.phone}
                    onChange={(e) => setCheckoutData({ ...checkoutData, phone: e.target.value })}
                  />
                </div>

                <div>
                  <label className="form-label">Complete Shipping Address *</label>
                  <textarea
                    rows={3}
                    required
                    className="form-input"
                    placeholder="House/Flat number, Building name, Street..."
                    value={checkoutData.address}
                    onChange={(e) => setCheckoutData({ ...checkoutData, address: e.target.value })}
                  />
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                  <div>
                    <label className="form-label">City *</label>
                    <input
                      type="text"
                      required
                      className="form-input"
                      placeholder="e.g. Pune"
                      value={checkoutData.city}
                      onChange={(e) => setCheckoutData({ ...checkoutData, city: e.target.value })}
                    />
                  </div>
                  <div>
                    <label className="form-label">Pincode *</label>
                    <input
                      type="text"
                      required
                      className="form-input"
                      placeholder="e.g. 411001"
                      value={checkoutData.pincode}
                      onChange={(e) => setCheckoutData({ ...checkoutData, pincode: e.target.value })}
                    />
                  </div>
                </div>

                <div>
                  <label className="form-label">Payment Mode</label>
                  <select
                    className="form-input"
                    value={checkoutData.paymentMethod}
                    onChange={(e) => setCheckoutData({ ...checkoutData, paymentMethod: e.target.value })}
                  >
                    <option value="Cash on Delivery (COD) / WhatsApp Confirmation">Cash on Delivery (COD) / WhatsApp Confirmation</option>
                    <option value="Direct UPI / Bank Transfer">Direct UPI / Bank Transfer</option>
                  </select>
                </div>
              </div>
            </form>
          )}

          {/* STEP 3: SUCCESS */}
          {checkoutStep === 'success' && (
            <div style={{ textAlign: 'center', padding: '40px 0' }}>
              <div style={{
                width: '64px',
                height: '64px',
                borderRadius: '50%',
                backgroundColor: 'rgba(24, 85, 46, 0.12)',
                color: 'var(--color-forest-green)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 16px auto'
              }}>
                <Check size={36} />
              </div>

              <h3 style={{ fontSize: '24px', color: 'var(--color-royal-maroon)', marginBottom: '8px' }}>
                Order Received!
              </h3>

              <p style={{ fontSize: '14.5px', color: 'var(--color-espresso-brown)', lineHeight: 1.6, marginBottom: '24px' }}>
                Thank you, <strong>{checkoutData.name}</strong>. Your order for <strong>₹{grandTotal}</strong> has been successfully received by Jyotiraj Global Company.
              </p>

              <div style={{
                backgroundColor: 'var(--color-pure-white)',
                padding: '16px',
                borderRadius: '10px',
                border: '1px solid var(--color-border)',
                marginBottom: '24px',
                textAlign: 'left',
                fontSize: '13px'
              }}>
                <div><strong>Order Reference:</strong> #{orderReference}</div>
                <div style={{ marginTop: '4px' }}><strong>Shipping to:</strong> {checkoutData.address}, {checkoutData.city}</div>
                <div style={{ marginTop: '4px' }}><strong>Payment:</strong> {checkoutData.paymentMethod}</div>
              </div>

              <button
                onClick={handleWhatsAppCheckout}
                className="btn btn-whatsapp"
                style={{ width: '100%', justifyContent: 'center', marginBottom: '12px' }}
              >
                <MessageCircle size={18} />
                <span>Confirm Instantly via WhatsApp</span>
              </button>

              <button
                onClick={() => {
                  onClearCart();
                  setCheckoutStep('cart');
                  onClose();
                }}
                className="btn btn-secondary btn-sm"
              >
                Back to Sweet Shop
              </button>
            </div>
          )}
        </div>

        {/* Footer / Summary Action Area */}
        {checkoutStep !== 'success' && cartItems.length > 0 && (
          <div style={{
            padding: '20px 24px',
            backgroundColor: 'var(--color-pure-white)',
            borderTop: '1px solid var(--color-border)'
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '14px', marginBottom: '6px' }}>
              <span style={{ color: 'var(--color-muted-text)' }}>Subtotal:</span>
              <span style={{ fontWeight: 700 }}>{formatPrice(subtotal, currency)}</span>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '14px', marginBottom: '12px' }}>
              <span style={{ color: 'var(--color-muted-text)' }}>Pan-India Delivery:</span>
              <span style={{ fontWeight: 700, color: shippingFee === 0 ? 'var(--color-forest-green)' : 'inherit' }}>
                {shippingFee === 0 ? 'FREE' : formatPrice(shippingFee, currency)}
              </span>
            </div>

            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              fontSize: '18px',
              fontWeight: 800,
              fontFamily: 'var(--font-heading)',
              color: 'var(--color-royal-maroon)',
              paddingTop: '8px',
              borderTop: '1px solid var(--color-border)',
              marginBottom: '16px'
            }}>
              <span>Grand Total:</span>
              <span>{formatPrice(grandTotal, currency)}</span>
            </div>

            {checkoutStep === 'cart' ? (
              <div style={{ display: 'flex', gap: '10px' }}>
                <button
                  onClick={handleWhatsAppCheckout}
                  className="btn btn-whatsapp"
                  style={{ flex: 1, justifyContent: 'center', padding: '12px' }}
                >
                  <MessageCircle size={18} />
                  <span>Order via WhatsApp</span>
                </button>

                <button
                  onClick={() => setCheckoutStep('checkout')}
                  className="btn btn-primary"
                  style={{ flex: 1, justifyContent: 'center', padding: '12px' }}
                >
                  <span>Checkout</span>
                  <ArrowRight size={16} />
                </button>
              </div>
            ) : (
              <div style={{ display: 'flex', gap: '10px' }}>
                <button
                  type="button"
                  onClick={() => setCheckoutStep('cart')}
                  className="btn btn-secondary"
                  style={{ padding: '12px 18px' }}
                >
                  Back
                </button>

                <button
                  type="button"
                  onClick={handleCheckoutSubmit}
                  className="btn btn-primary"
                  style={{ flex: 1, justifyContent: 'center', padding: '12px' }}
                >
                  <span>Place Order ({formatPrice(grandTotal, currency)})</span>
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
