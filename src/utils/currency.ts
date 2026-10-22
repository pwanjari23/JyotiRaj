import { Currency } from '../types';

export interface CurrencyConfig {
  code: Currency;
  symbol: string;
  prefix: string;
  rate: number; // multiplier from INR base
  decimals: number;
}

export const CURRENCY_CONFIGS: Record<Currency, CurrencyConfig> = {
  INR: {
    code: 'INR',
    symbol: '₹',
    prefix: '₹',
    rate: 1,
    decimals: 0,
  },
  USD: {
    code: 'USD',
    symbol: '$',
    prefix: '$',
    rate: 1 / 84, // 1 USD ≈ 84 INR
    decimals: 2,
  },
  AED: {
    code: 'AED',
    symbol: 'د.إ',
    prefix: 'AED ',
    rate: 1 / 23, // 1 AED ≈ 23 INR
    decimals: 1,
  },
};

/**
 * Converts an INR base amount to the selected currency and formats it with its symbol.
 */
export function formatPrice(inrAmount: number, currency: Currency = 'INR'): string {
  const config = CURRENCY_CONFIGS[currency] || CURRENCY_CONFIGS.INR;
  const converted = inrAmount * config.rate;

  if (config.decimals === 0) {
    return `${config.prefix}${Math.round(converted)}`;
  }
  return `${config.prefix}${converted.toFixed(config.decimals)}`;
}

/**
 * Returns just the numeric value in the target currency (useful for calculations).
 */
export function convertPrice(inrAmount: number, currency: Currency = 'INR'): number {
  const config = CURRENCY_CONFIGS[currency] || CURRENCY_CONFIGS.INR;
  const converted = inrAmount * config.rate;
  return Number(converted.toFixed(config.decimals));
}

/**
 * Returns the currency symbol (e.g. ₹, $, AED).
 */
export function getCurrencySymbol(currency: Currency = 'INR'): string {
  return CURRENCY_CONFIGS[currency]?.symbol || '₹';
}
