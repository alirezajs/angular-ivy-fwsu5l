import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { pluck } from 'rxjs/operators';
import { Product, ShppingCard } from '../models/ShppingCard.model';

@Injectable({
  providedIn: 'root',
})
export class shoppingService {
  private shoppingCard$: BehaviorSubject<ShppingCard>;

  constructor() {
    this.shoppingCard$ = new BehaviorSubject<ShppingCard>({
      id: '',
      products: [],
      subTotal: 0,
    });
  }

  public setShopingCard(shoppngCard: ShppingCard) {
    this.shoppingCard$.next(shoppngCard);
  }

  public getProducts(): Observable<Product[]> {
    console.log('test');
    return this.shoppingCard$.pipe(pluck('products'));
  }
  public updateQuantity(updateQuantity: number, updateItem: Product) {
    const shppingCard = { ...this.shoppingCard$.value };
    shppingCard.products = shppingCard.products.map((item) => {
      item.quantity =
        item.id === updateItem.id ? +updateQuantity : item.quantity;
      return item;
    });

    this.setShopingCard(shppingCard);
  }
}
