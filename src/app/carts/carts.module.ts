import { CartsRoutingModule } from './carts-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddToCartsComponent } from './add-to-carts/add-to-carts.component';
import { CartsComponent } from './carts/carts.component';



@NgModule({
  declarations: [AddToCartsComponent, CartsComponent],
  imports: [
    CommonModule,
    CartsRoutingModule
  ]
})
export class CartsModule { }
