import { LayoutComponent } from './layout/layout/layout.component';
import { LayoutTabComponent } from './layout/layout-tab/layout-tab.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutBlankComponent } from './layout/layout-blank/layout-blank.component';

const routes: Routes = [
  {path: '', redirectTo: '/product', pathMatch: 'full'},
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
  {path: 'components', component: LayoutBlankComponent, loadChildren: './components/components.module#ComponentsModule'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
