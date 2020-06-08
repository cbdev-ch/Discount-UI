export interface Product {
  id: string;
  category: string;
  storeName: string;
  productName: string;
  productType: string;
  discountSearchString: string;
  notAvailableSearchString: string;
  isDiscount: boolean;
  isAvailable: boolean;
  url: string;
  active: boolean;
}
