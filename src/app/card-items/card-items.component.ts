import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../../models/ShppingCard.model';
import { shoppingService } from '../shopping-car.service';

@Component({
  selector: 'app-card-items',
  templateUrl: './card-items.component.html',
  styleUrls: ['./card-items.component.css'],
})
export class CardItemsComponent implements OnInit {
  products$: Observable<Product[]>;
  constructor(private shoppingCardService: shoppingService) {}

  ngOnInit() {
    this.products$ = this.shoppingCardService.getProducts();
  }
}
