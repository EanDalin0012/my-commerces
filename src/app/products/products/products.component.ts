import { Component, HostListener, OnInit } from '@angular/core';
import * as $ from 'jquery';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products: Product[] = [];
  scroll    = "";
  constructor() {

  }

  ngOnInit(): void {
    this.products = dataItmes;
  }

  ngAfterViewInit(): void {
    // Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    // Add 'implements AfterViewInit' to the class.
    window.addEventListener('scroll', this.menuscroll, false); // third parameter
  }

  @HostListener('window:storage', ['$event'])

  menuscroll() {
    if ($(".menuWrap").length > 0 && $(".page_title .guideWrap").length > 0) {
      const sc    = $(window).scrollTop();
      console.log(sc);
      // const menuH = $(".menuWrap").offset().top;
      // const chat  = $(".page_title .guideWrap").offset().top;

      // if (sc >= menuH) {
      //   $(".menuWrap").addClass("fix");
      // } else {
      //   $(".menuWrap").removeClass("fix");
      // }

      // if (sc + 56 >= chat) {
      //   $(".btn_livechat").addClass("fix");
      //   $(".btn_top").show();
      // } else {
      //   $(".btn_livechat").removeClass("fix");
      //   $(".btn_top").hide();
      // }
    }
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
  },
  {
    productName: "Product D",
    price: 30,
    url: 'https://scontent-sin6-3.xx.fbcdn.net/v/t1.0-9/1934418_123296467111_5934916_n.jpg?_nc_cat=110&ccb=2&_nc_sid=cdbe9c&_nc_eui2=AeFnSRuGzPwYRNGXnmoGHW9RTz2Qo18Fs7tPPZCjXwWzuyoMvyTlpaZdl9pe3UiJWKO2CFE18FD0nF9oMkm2UDh4&_nc_ohc=Z91p7e6m08UAX9zLzQE&_nc_ht=scontent-sin6-3.xx&oh=e6957aa6c27f6dc39b39b18cdccb830b&oe=6034E0D3',
  },
  {
    productName: "Product E",
    price: 30,
    url: 'https://webstockreview.net/images/banana-clipart-banna-9.jpg',
  },{
    productName: "Product F",
    price: 30,
    url: 'https://webstockreview.net/images/banana-clipart-banna-9.jpg',
  }
];

