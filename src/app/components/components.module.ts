import { ComponentsRoutingModule } from './components-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsComponent } from './components/components.component';
import { IndexComponent } from './index/index.component';
import { HeaderComponent } from './header/header.component';
import { BoxComponent } from './box/box.component';
import { HeaderKendoComponent } from './header-kendo/header-kendo.component';
import { MSharesModule } from '../share/m-shares/m-shares.module';
import { Header1Component } from './header1/header1.component';



@NgModule({
  declarations: [ComponentsComponent, IndexComponent, HeaderComponent, BoxComponent, HeaderKendoComponent, Header1Component],
  imports: [
    CommonModule,
    ComponentsRoutingModule,
    MSharesModule
  ],
  exports: [
    HeaderComponent,
    BoxComponent
  ]
})
export class ComponentsModule { }
