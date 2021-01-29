import { Component, HostListener, OnInit } from '@angular/core';
import * as $ from 'jquery';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products: Product[] = [];
  productTypes: ProductType[] =[];
  allDepartments = true;

  scroll    = '';
  constructor() {

  }

  ngOnInit(): void {
    this.products = dataItmes;
    this.productTypes = ProductTypeItems;
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
  isSlideShow?: boolean;
}

interface ProductType {
  type: string;
  uri: string;
}

const dataItmes: Product[] = [
  {
    productName: "Product A",
    price: 30,
    url: 'https://img.etimg.com/thumb/msid-64446447,width-640,resizemode-4,imgsize-364438/densuke-watermelons.jpg',
  },
  {
    productName: "Product B",
    price: 30,
    url: 'https://cdn.shopify.com/s/files/1/0859/3640/products/SN_Passion_Fruit_1024x1024.jpg?v=1489907403',
  },
  {
    productName: "Product C",
    price: 30,
    url: 'https://img.alicdn.com/i4/au-rogor-new-zealand-around-9-a4150g-100-single-fruit-imported-fruit-gina-afterburner-fruit-gala-apple-fruit-fruit/TB1xHqvJFXXXXXoaXXXXXXXXXXX_!!0-item_pic.jpg',
  },
  {
    productName: "Product D",
    price: 30,
    url: 'https://scontent-sin6-3.xx.fbcdn.net/v/t1.0-9/1934418_123296467111_5934916_n.jpg?_nc_cat=110&ccb=2&_nc_sid=cdbe9c&_nc_eui2=AeFnSRuGzPwYRNGXnmoGHW9RTz2Qo18Fs7tPPZCjXwWzuyoMvyTlpaZdl9pe3UiJWKO2CFE18FD0nF9oMkm2UDh4&_nc_ohc=Z91p7e6m08UAX9zLzQE&_nc_ht=scontent-sin6-3.xx&oh=e6957aa6c27f6dc39b39b18cdccb830b&oe=6034E0D3',
  },
  {
    productName: "Product E",
    price: 30,
    url: 'https://toppng.com/uploads/preview/fresh-single-blackberry-fruit-115283287979ktotwapfu.png',
  },{
    productName: "Product F",
    price: 30,
    url: 'https://webstockreview.net/images/banana-clipart-banna-9.jpg',
  },
  {
    productName: "Product F",
    price: 30,
    url: 'https://webstockreview.net/images/banana-clipart-banna-9.jpg',
  },
  {
    productName: "Product Z",
    price: 30,
    url: 'https://turkishfruits.org/fresh-cherry-exporter.jpg',
  }


];

const ProductTypeItems: ProductType[] = [
  {
    type: 'Fresh Fruit',
    uri: 'https://resources.ediblearrangements.com/resources/en-us/i/a/16oz_FruitSalad_PineGrapeHdewStrw_410x4105.jpg'
  },
  {
    type: 'drink fruits',
    uri: 'https://img4.goodfon.com/wallpaper/nbig/1/d9/smuzi-napitok-vitaminy-laim-granat-kivi-frukty.jpg'
  },
  {
    type: 'Vegetables',
    uri: 'https://cdn.britannica.com/17/196817-050-6A15DAC3/vegetables.jpg'
  },
  {
    type: 'Fresh Meat',
    uri: 'https://image.freepik.com/free-photo/raw-fresh-meat-with-rosemary_105495-275.jpg'
  },
  {
    type: 'Ocean Foods',
    uri: 'https://1.bp.blogspot.com/-ZQTadxpjmIo/Vtp-wqvkVYI/AAAAAAAATeU/r3_kVpCDOxI/s1600/IMG_3541.JPG'
  },
  {
    type: 'Butter & Eggs',
    uri: 'https://www.ketodomain.com/wp-content/uploads/2018/03/scrambled-eggs.jpg'
  }
];
