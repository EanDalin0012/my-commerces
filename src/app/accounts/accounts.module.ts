import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateAccountComponent } from './create-account/create-account.component';
import { EditAccountComponent } from './edit-account/edit-account.component';
import { ProfileAccountComponent } from './profile-account/profile-account.component';



@NgModule({
  declarations: [CreateAccountComponent, EditAccountComponent, ProfileAccountComponent],
  imports: [
    CommonModule
  ]
})
export class AccountsModule { }
