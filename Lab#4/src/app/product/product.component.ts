import { Component, OnInit, Input } from '@angular/core';
import { item } from '../app.component';

@Component({
  selector: 'app-product-item',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductItemComponent implements OnInit {

  @Input() declare item: item;
  constructor() {
  }

  ngOnInit(): void {
  }

  getTelegramLink(): string {
    return `https://t.me/share/url?url=${this.item.link}&text=${'Hello! I\'ve found the best Store of different products.'}`;
  }

}
