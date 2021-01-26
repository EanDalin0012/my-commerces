import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products: Product[] = [];

  constructor() {

  }

  ngOnInit(): void {
    this.products = dataItmes;
  }

}

interface Product {
  productName: string;
  price: number;
  url: string;
}
const dataItmes: Product[] = [
  {
    productName: "Product A",
    price: 30,
    url: 'https://webstockreview.net/images/banana-clipart-banna-9.jpg',
  },
  {
    productName: "Product B",
    price: 30,
    url: 'https://webstockreview.net/images/banana-clipart-banna-9.jpg',
  },
  {
    productName: "Product C",
    price: 30,
    url: 'https://webstockreview.net/images/banana-clipart-banna-9.jpg',
  }
];

