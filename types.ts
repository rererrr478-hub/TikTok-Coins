export interface CoinPackage {
  id: number;
  coins: number | 'Custom';
  price: number;
  isCustom?: boolean;
}

export interface CardDetails {
  cardNumber: string;
  cardName: string;
  expiry: string;
}
