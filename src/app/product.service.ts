import { Injectable } from '@angular/core';
import { Product } from '../models/ShppingCard.model';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private products: Product[];

  constructor() {
    this.products = [
      {
        id: '1',
        quantity: 1,
        title: 'Product-1',
        price: 100,
      },
      {
        id: '2',
        quantity: 2,
        title: 'Product-2',
        price: 100,
      },
      {
        id: '3',
        quantity: 1,
        title: 'Product-3',
        price: 100,
      },
      {
        id: '4',
        quantity: 1,
        title: 'Product-4',
        price: 100,
      },
      {
        id: '7',
        quantity: 1,
        title: 'Product-5',
        price: 100,
      },
      {
        id: '16',
        quantity: 1,
        title: 'Product-6',
        price: 100,
      },
    ];
  }

  getProducts(): Product[] {
    return this.products;
  }

  setProduct(product: Product): void {
    this.products.push(product);
  }
}
