import { LayoutComponent } from './layout/layout/layout.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutBlankComponent } from './layout/layout-blank/layout-blank.component';
import {GetWayComponent} from './get-way/get-way.component';
import {ResultPayComponent} from './result-pay/result-pay.component';

const routes: Routes = [
  {path: '', redirectTo: '/product', pathMatch: 'full'},
  {path: 'get-way', component: GetWayComponent},
  {path: 'result-pay', component: ResultPayComponent},
  {
    path: '',
    component: LayoutComponent,
    children: [
      {path: '',              loadChildren: './products/products.module#ProductsModule'},
      {path: 'account',       loadChildren: './accounts/accounts.module#AccountsModule'},
      {path: 'sales',         loadChildren: './sales/sales.module#SalesModule'},
      {path: 'cart',          loadChildren: './carts/carts.module#CartsModule'},
      {path: 'notification',  loadChildren: './notification/notification.module#NotificationModule'},
    ]
  },
  {path: 'product', component: LayoutComponent, loadChildren: './products/products.module#ProductsModule'},
  {path: 'websocket', loadChildren: './websocket/websocket.module#WebsocketModule'},
  {path: 'components', component: LayoutBlankComponent, loadChildren: './components/components.module#ComponentsModule'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
