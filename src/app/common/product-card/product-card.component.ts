import { Component, input } from '@angular/core';
import { Product } from './model';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-product-card',
  imports: [MatButtonModule],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css',
})
export class ProductCardComponent {
  product = input.required<Product>();
}
