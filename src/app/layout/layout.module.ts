import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MSharesModule } from '../share/m-shares/m-shares.module';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';
import { LayoutTabComponent } from './layout-tab/layout-tab.component';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
  ],
  imports: [
    CommonModule,
    DropDownsModule,
    MSharesModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    DropDownsModule
  ]
})
export class MLayoutModule { }
