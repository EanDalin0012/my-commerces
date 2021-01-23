import { LayoutTabComponent } from './layout/layout-tab/layout-tab.component';
import { LayoutComponent } from './layout/layout/layout.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutBlankComponent } from './layout/layout-blank/layout-blank.component';

const routes: Routes = [
  {path: '', redirectTo: '/product', pathMatch: 'full'},
  {path: 'product', component: LayoutTabComponent, loadChildren: './products/products.module#ProductsModule'},
  {path: 'account', component: LayoutBlankComponent, loadChildren: './accounts/accounts.module#AccountsModule'},
  {path: 'sales', component: LayoutTabComponent, loadChildren: './sales/sales.module#SalesModule'},
  {path: 'cart', component: LayoutTabComponent, loadChildren: './carts/carts.module#CartsModule'},
  {path: 'notification', component: LayoutTabComponent, loadChildren: './notification/notification.module#NotificationModule'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
