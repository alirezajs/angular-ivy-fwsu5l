import { Component, VERSION } from '@angular/core';
import { Product, ShppingCard } from '../models/ShppingCard.model';
import { ProductService } from './product.service';
import { shoppingService } from './shopping-car.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;
  products: Product[];

  constructor(
    private pService: ProductService,
    private pCardService: shoppingService
  ) {
    this.products = pService.getProducts();
  }

  public addToCard(item: Product) {
    this.pCardService.updateQuantity(1, item);
  }
}
