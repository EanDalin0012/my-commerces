import { ComponentsRoutingModule } from './components-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsComponent } from './components/components.component';
import { IndexComponent } from './index/index.component';
import { HeaderComponent } from './header/header.component';
import { BoxComponent } from './box/box.component';



@NgModule({
  declarations: [ComponentsComponent, IndexComponent, HeaderComponent, BoxComponent],
  imports: [
    CommonModule,
    ComponentsRoutingModule
  ],
  exports: [
    HeaderComponent,
    BoxComponent
  ]
})
export class ComponentsModule { }
