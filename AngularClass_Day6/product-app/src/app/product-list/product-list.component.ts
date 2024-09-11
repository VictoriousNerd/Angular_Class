import { Component } from '@angular/core';
import { Product } from '../product.model'; 

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products: Product[] = [
    { name: 'Laptop', price: 999.99, releaseDate: new Date('2024-01-15') },
    { name: 'Smartphone', price: 599.99, releaseDate: new Date('2024-06-22') },
    { name: 'Tablet', price: 399.99, releaseDate: new Date('2024-03-10') }
  ];
}
