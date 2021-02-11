import { ComponentsComponent } from './components/components.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { SlideShow1Component } from './slide-show1/slide-show1.component';

const routes: Routes = [
  {path: '', component: ComponentsComponent},
  {path: 'index', component: IndexComponent},
  {path: 'slide', component: SlideShow1Component},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComponentsRoutingModule { }
