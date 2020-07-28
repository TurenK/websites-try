export interface Item {
  title: string;
  price: number;
  location: string;
  categoryName: string;
  condition: string;
  shippingType: string;
  shippingServiceCost: number;
  shipToLocations: string;
  expeditedShipping: boolean;
  oneDayShippingAvailable: boolean;
  bestOfferEnabled: boolean;
  buyItNowAvailable: boolean;
  listingType: string;
  gift: boolean;
  watchCount: number;
  galleryURL: string;
  viewItemURL: string; 
  error: string;
}