import { LayoutTabComponent } from './layout/layout-tab/layout-tab.component';
import { MLayoutModule } from './layout/layout.module';
import { LayoutComponent } from './layout/layout/layout.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutBlankComponent } from './layout/layout-blank/layout-blank.component';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { MSharesModule } from './share/m-shares/m-shares.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';
import { PopupModule } from '@progress/kendo-angular-popup';
import { TreeViewModule } from '@progress/kendo-angular-treeview';
import { DialogsModule } from '@progress/kendo-angular-dialog';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { GridModule } from '@progress/kendo-angular-grid';
import { DateInputsModule } from '@progress/kendo-angular-dateinputs';
import { LabelModule } from '@progress/kendo-angular-label';
import { PDFExportModule } from '@progress/kendo-angular-pdf-export';
import { ExcelExportModule } from '@progress/kendo-angular-excel-export';
import { ChartsModule } from '@progress/kendo-angular-charts';
import 'hammerjs';
import { GaugesModule } from '@progress/kendo-angular-gauges';
import { IconsModule } from '@progress/kendo-angular-icons';
import { IndicatorsModule } from '@progress/kendo-angular-indicators';
import { MenuModule } from '@progress/kendo-angular-menu';
import { NavigationModule } from '@progress/kendo-angular-navigation';
import { NotificationModule } from '@progress/kendo-angular-notification';
import { SchedulerModule } from '@progress/kendo-angular-scheduler';
import { ScrollViewModule } from '@progress/kendo-angular-scrollview';
import { UploadModule } from '@progress/kendo-angular-upload';






















export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    LayoutBlankComponent,
    LayoutTabComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MLayoutModule,
    MSharesModule.forRoot(),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient]
      },
    }),
    HttpClientModule,
    BrowserAnimationsModule,
    BrowserModule,
    DropDownsModule,
    PopupModule,
    TreeViewModule,
    DialogsModule,
    ButtonsModule,
    GridModule,
    DateInputsModule,
    LabelModule,
    PDFExportModule,
    ExcelExportModule,
    ChartsModule,
    GaugesModule,
    IconsModule,
    IndicatorsModule,
    MenuModule,
    NavigationModule,
    NotificationModule,
    SchedulerModule,
    ScrollViewModule,
    UploadModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
