import { internalFromArray } from 'rxjs/internal/observable/fromArray';

export interface ShppingCard {
  id: string;
  products: Product[];
  subTotal: number;
}
export interface Product {
  id: string;
  quantity: number;
  title: string;
  price: number;
}
