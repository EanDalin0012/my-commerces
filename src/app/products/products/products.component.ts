import { Component, HostListener, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { SlidesOutputData, OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  // ngx-owl-carousel
  dynamicSlides = [
    {
      id: 1,
      src:'https://freakyjolly.com/demo/jquery/PreloadJS/images/1.jpg',
      alt:'Side 1',
      title:'Side 1'
    },
    {
      id: 2,
      src:'https://freakyjolly.com/demo/jquery/PreloadJS/images/2.jpg',
      alt:'Side 2',
      title:'Side 2'
    },
    {
      id: 3,
      src:'https://freakyjolly.com/demo/jquery/PreloadJS/images/3.jpg',
      alt:'Side 3',
      title:'Side 3'
    },
    {
      id: 4,
      src:'https://freakyjolly.com/demo/jquery/PreloadJS/images/4.jpg',
      alt:'Side 4',
      title:'Side 4'
    },
    {
      id: 5,
      // src:'https://via.placeholder.com/600/f66b97',
      src:'https://freakyjolly.com/demo/jquery/PreloadJS/images/10.jpg',
      alt:'Side 5',
      title:'Side 5'
    }
  ];

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    navSpeed: 10,
    autoplay: true,
    navText: ['&#8249', '&#8250;'],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      760: {
        items: 3
      },
      1000: {
        items: 4
      }
    },
    nav: true
  }
  customOptions1: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    navSpeed: 10,
    autoplay: true,
    navText: ['&#8249', '&#8250;'],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      760: {
        items: 3
      },
      1000: {
        items: 4
      }
    },
    nav: false
  }

  images = [
    {
      text: "Everfresh Flowers",
      image: "https://freakyjolly.com/demo/jquery/PreloadJS/images/1.jpg"
    },
    {
      text: "Festive Deer",
      image: "https://freakyjolly.com/demo/jquery/PreloadJS/images/2.jpg"
    },
    {
      text: "Morning Greens",
      image: 'https://freakyjolly.com/demo/jquery/PreloadJS/images/3.jpg'
    },
    {
      text: 'Bunch of Love',
      image: 'https://freakyjolly.com/demo/jquery/PreloadJS/images/4.jpg'
    },
    {
      text: 'Blue Clear',
      image: "https://freakyjolly.com/demo/jquery/PreloadJS/images/5.jpg"
    },
    {
      text: "Evening Clouds",
      image: "https://freakyjolly.com/demo/jquery/PreloadJS/images/7.jpg"
    },
    {
      text: "Fontains in Shadows",
      image: "https://freakyjolly.com/demo/jquery/PreloadJS/images/8.jpg"
    },
    {
      text: "Kites in the Sky",
      image: "https://freakyjolly.com/demo/jquery/PreloadJS/images/9.jpg"
    },
    {
      text: "Sun Streak",
      image: "https://freakyjolly.com/demo/jquery/PreloadJS/images/10.jpg"
    }
  ];
  // ngx-owl-carousel

  latestProducts = [
    {
      productName: '1 Crab Pool Security',
      pricie: '$ 30',
      uri: '../../../assets/img/latest-product/lp-1.jpg'
    },
    {
      productName: '2 Crab Pool Security',
      pricie: '$ 30',
      uri: '../../../assets/img/latest-product/lp-2.jpg'
    },
    {
      productName: '3 Crab Pool Security',
      pricie: '$ 30',
      uri: '../../../assets/img/latest-product/lp-3.jpg'
    },
    {
      productName: '4 Crab Pool Security',
      pricie: '$ 30',
      uri: '../../../assets/img/latest-product/lp-1.jpg'
    },
    {
      productName: '5 Crab Pool Security',
      pricie: '$ 30',
      uri: '../../../assets/img/latest-product/lp-2.jpg'
    },
    {
      productName: '6 Crab Pool Security',
      pricie: '$ 30',
      uri: '../../../assets/img/latest-product/lp-3.jpg'
    },
    {
      productName: '7 Crab Pool Security',
      pricie: '$ 30',
      uri: '../../../assets/img/latest-product/lp-2.jpg'
    },
    {
      productName: '8 Crab Pool Security',
      pricie: '$ 30',
      uri: '../../../assets/img/latest-product/lp-3.jpg'
    },
    {
      productName: '9 Crab Pool Security',
      pricie: '$ 30',
      uri: '../../../assets/img/latest-product/lp-3.jpg'
    }
  ];

  latestProductsNew = [];

  products: Product[] = [];
  productTypes: ProductType[] =[];

  activeSlides: any;

  scroll    = '';

  constructor() {

  }

  getPassedData(data: any) {
    this.activeSlides = data;
    console.log(this.activeSlides);
  }

  datav = [];
  ngOnInit(): void {
    this.products = dataItmes;
    const i = 0;
    let t = true;
    let arrLength = this.latestProducts.length;
    console.log(arrLength);
    this.latestProducts.forEach((item, i) => {
      i += 1;
      // @ts-ignore
      this.datav.push(item);
      console.log(i);
      if (i % 3 == 0 ) {
        // @ts-ignore
        this.latestProductsNew.push(this.datav);
        console.log(i,arrLength,this.datav);
        this.datav = [];
      }
      if(arrLength % 3 != 0 && arrLength == i ){
        // @ts-ignore
        this.latestProductsNew.push(this.datav);
      }

    });
    console.log("setInterval", this.latestProductsNew);
    this.productTypes = ProductTypeItems;
    // setInterval(() => {
    //   console.log("setInterval");
    // }, 5000);
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
    productName: 'Product Z',
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
