export type Language = 'en' | 'mr' | 'hi';
export type Currency = 'INR' | 'USD' | 'AED';

export interface Product {
  id: string;
  slug: string;
  name: string;
  marathiName: string;
  hindiName?: string;
  subtitle: string;
  marathiSubtitle: string;
  hindiSubtitle?: string;
  category: 'laddu' | 'roll-barfi' | 'hamper';
  categoryLabel: string;
  image: string;
  galleryImages?: string[];
  badge?: string;
  rating: number; // For internal UI feel, kept realistic
  reviewCount: number;
  provisionalPrice: {
    '250g': number;
    '500g': number;
    '1kg': number;
  };
  overview: string;
  marathiOverview?: string;
  hindiOverview?: string;
  websiteDescription: string;
  proposedIngredients: {
    name: string;
    hindiName: string;
    verified: boolean;
  }[];
  sensoryProfile: {
    taste: string;
    texture: string;
    aroma: string;
    appearance: string;
  };
  highlights: string[];
  allergens: string[];
  servingPrecautions?: string;
  nutritionalHighlights: string[];
  shape: string;
  expectedFlavour: string;
  expectedTexture: string;
  suggestedPositioning: string;
}

export interface CartItem {
  product: Product;
  packSize: '250g' | '500g' | '1kg';
  quantity: number;
}

export type PageView = 'home' | 'shop' | 'product-detail' | 'about' | 'wholesale' | 'export' | 'contact';
