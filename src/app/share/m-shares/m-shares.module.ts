import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { ChartsModule } from '@progress/kendo-angular-charts';
import { DateInputsModule } from '@progress/kendo-angular-dateinputs';
import { ExcelExportModule } from '@progress/kendo-angular-excel-export';
import { PDFExportModule } from '@progress/kendo-angular-pdf-export';
import { PDFModule, SchedulerModule } from '@progress/kendo-angular-scheduler';
import { NotificationModule } from '@progress/kendo-angular-notification';
import { NavigationModule } from '@progress/kendo-angular-navigation';
import { UploadModule } from '@progress/kendo-angular-upload';
import { LabelModule } from '@progress/kendo-angular-label';
import { IndicatorsModule } from '@progress/kendo-angular-indicators';
import { ScrollViewModule } from '@progress/kendo-angular-scrollview';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DialogModule, DialogsModule } from '@progress/kendo-angular-dialog';
import { GridModule } from '@progress/kendo-angular-grid';
import { LayoutModule } from '@progress/kendo-angular-layout';
import { SortableModule } from '@progress/kendo-angular-sortable';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';
import { InputsModule, SharedModule, TextBoxModule } from '@progress/kendo-angular-inputs';
import { IconModule } from '@progress/kendo-angular-icons';
import { MenusModule } from '@progress/kendo-angular-menu';
import { CarouselModule } from 'ngx-owl-carousel-o';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: [
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    TranslateModule,
    DialogModule,
    GridModule,
    LayoutModule,
    SharedModule,
    SortableModule,
    DropDownsModule,
    PDFModule,
    ButtonsModule,
    ChartsModule,
    DateInputsModule,
    DialogsModule,
    ExcelExportModule,
    PDFExportModule,
    SchedulerModule,
    NotificationModule,
    UploadModule,
    NavigationModule,

    IconModule,
    InputsModule,
    LabelModule,
    IndicatorsModule,
    TextBoxModule,
    MenusModule,
    ScrollViewModule,
    CarouselModule

  ]
})
export class MSharesModule {
  static forRoot(): ModuleWithProviders<MSharesModule> {
    return {
      ngModule: MSharesModule,
      providers: []
    };
  }
}
