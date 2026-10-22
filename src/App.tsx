import React, { useState } from 'react';
import { PageView, Product, CartItem, Language, Currency } from './types';
import { PRODUCTS } from './data/products';
import { AnnouncementBar } from './components/AnnouncementBar';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { BrandIntro } from './components/BrandIntro';
import { SignatureCollection } from './components/SignatureCollection';
import { WhyExplore } from './components/WhyExplore';
import { ProductSpotlight } from './components/ProductSpotlight';
import { ProductComparison } from './components/ProductComparison';
import { WholesaleExportSection } from './components/WholesaleExportSection';
import { FAQSection } from './components/FAQSection';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { ProductDetailPage } from './components/ProductDetailPage';
import { AboutPage } from './components/AboutPage';
import { WholesalePage } from './components/WholesalePage';
import { ExportPage } from './components/ExportPage';
import { ContactPage } from './components/ContactPage';
import { CartDrawer } from './components/CartDrawer';
import { QuickViewModal } from './components/QuickViewModal';
import { SearchModal } from './components/SearchModal';

export const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<PageView>('home');
  const [selectedProductSlug, setSelectedProductSlug] = useState<string>(PRODUCTS[0].slug);
  const [language, setLanguage] = useState<Language>('en');
  const [currency, setCurrency] = useState<Currency>('INR');
  const [activeCategoryFilter, setActiveCategoryFilter] = useState<string>('all');

  // Cart starts completely empty (0 items) by default
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const [cartOpen, setCartOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);

  const totalCartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  const handleNavigate = (page: PageView, param?: string) => {
    if (page === 'product-detail' && param) {
      setSelectedProductSlug(param);
    } else if (page === 'shop' && param) {
      setActiveCategoryFilter(param);
    }
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleAddToCart = (product: Product, packSize: '250g' | '500g' | '1kg', quantity: number = 1) => {
    setCartItems((prev) => {
      const existingIndex = prev.findIndex(
        (item) => item.product.id === product.id && item.packSize === packSize
      );
      if (existingIndex > -1) {
        const updated = [...prev];
        updated[existingIndex].quantity += quantity;
        return updated;
      } else {
        return [...prev, { product, packSize, quantity }];
      }
    });
  };

  const handleUpdateCartQuantity = (productId: string, packSize: '250g' | '500g' | '1kg', newQty: number) => {
    if (newQty <= 0) {
      handleRemoveCartItem(productId, packSize);
      return;
    }
    setCartItems((prev) =>
      prev.map((item) => {
        if (item.product.id === productId && item.packSize === packSize) {
          return { ...item, quantity: newQty };
        }
        return item;
      })
    );
  };

  const handleRemoveCartItem = (productId: string, packSize: '250g' | '500g' | '1kg') => {
    setCartItems((prev) =>
      prev.filter((item) => !(item.product.id === productId && item.packSize === packSize))
    );
  };

  const currentSelectedProduct = PRODUCTS.find((p) => p.slug === selectedProductSlug) || PRODUCTS[0];

  return (
    <div className={`app-container ${language === 'mr' || language === 'hi' ? 'font-marathi' : ''}`}>
      {/* 1. Top Announcement Bar */}
      <AnnouncementBar
        language={language}
        onLanguageChange={setLanguage}
        currency={currency}
        onCurrencyChange={setCurrency}
      />

      {/* 2. Main Navigation Header */}
      <Header
        currentPage={currentPage}
        onNavigate={handleNavigate}
        cartCount={totalCartCount}
        onOpenCart={() => setCartOpen(true)}
        onOpenSearch={() => setSearchOpen(true)}
        language={language}
      />

      {/* 3. Dynamic Page View Rendering */}
      <main>
        {currentPage === 'home' && (
          <>
            {/* Section 1: Hero (Follows exact reference image) */}
            <HeroSection onNavigate={handleNavigate} language={language} />

            {/* Section 2: Brand Introduction */}
            <BrandIntro onNavigate={handleNavigate} language={language} />

            {/* Section 3: Our Signature Collection */}
            <SignatureCollection
              onNavigate={handleNavigate}
              onAddToCart={handleAddToCart}
              onQuickView={(p) => setQuickViewProduct(p)}
              language={language}
              currency={currency}
              initialCategory="all"
            />

            {/* Section 4: Why Explore Jyotiraj? */}
            <WhyExplore onNavigate={handleNavigate} language={language} />

            {/* Section 5: Product Spotlight */}
            <ProductSpotlight onNavigate={handleNavigate} language={language} />

            {/* Section 6: Wholesale and International Export */}
            <WholesaleExportSection onNavigate={handleNavigate} language={language} />

            {/* Section 7: Frequently Asked Questions */}
            <FAQSection language={language} />

            {/* Section 8: Final Call To Action */}
            <FinalCTA onNavigate={handleNavigate} language={language} />
          </>
        )}

        {currentPage === 'shop' && (
          <div style={{ backgroundColor: 'var(--color-warm-ivory)', minHeight: '100vh', paddingBottom: '40px' }}>
            <SignatureCollection
              onNavigate={handleNavigate}
              onAddToCart={handleAddToCart}
              onQuickView={(p) => setQuickViewProduct(p)}
              language={language}
              currency={currency}
              initialCategory={activeCategoryFilter}
              backgroundColor="var(--color-warm-ivory)"
              padding="44px 0 80px 0"
            />
            <ProductComparison
              onNavigate={handleNavigate}
              language={language}
              backgroundColor="var(--color-warm-ivory)"
            />
            <FAQSection language={language} />
          </div>
        )}

        {currentPage === 'product-detail' && (
          <ProductDetailPage
            key={currentSelectedProduct.id}
            product={currentSelectedProduct}
            onNavigate={handleNavigate}
            onAddToCart={handleAddToCart}
            language={language}
            currency={currency}
          />
        )}

        {currentPage === 'about' && (
          <AboutPage onNavigate={handleNavigate} language={language} />
        )}

        {currentPage === 'wholesale' && (
          <WholesalePage onNavigate={handleNavigate} language={language} />
        )}

        {currentPage === 'export' && (
          <ExportPage onNavigate={handleNavigate} language={language} />
        )}

        {currentPage === 'contact' && (
          <ContactPage onNavigate={handleNavigate} language={language} />
        )}
      </main>

      {/* 4. Footer */}
      <Footer onNavigate={handleNavigate} language={language} />

      {/* 5. Modals & Drawers */}
      <CartDrawer
        isOpen={cartOpen}
        onClose={() => setCartOpen(false)}
        cartItems={cartItems}
        onUpdateQuantity={handleUpdateCartQuantity}
        onRemoveItem={handleRemoveCartItem}
        onClearCart={() => setCartItems([])}
        currency={currency}
        language={language}
      />

      <QuickViewModal
        product={quickViewProduct}
        onClose={() => setQuickViewProduct(null)}
        onAddToCart={handleAddToCart}
        onNavigate={handleNavigate}
        language={language}
        currency={currency}
      />

      <SearchModal
        isOpen={searchOpen}
        onClose={() => setSearchOpen(false)}
        onNavigate={handleNavigate}
        language={language}
      />
    </div>
  );
};

export default App;
