import { ProductsRoutingModule } from './products-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products/products.component';
import { ProductsDetailsComponent } from './products-details/products-details.component';
import { MSharesModule } from '../share/m-shares/m-shares.module';



@NgModule({
  declarations: [ProductsComponent, ProductsDetailsComponent],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    MSharesModule
  ]
})
export class ProductsModule {
  constructor() {
    console.log('product module');

  }
 }
