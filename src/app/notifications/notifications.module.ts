import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotificationsComponent } from './notifications/notifications.component';
import { NotificationsDetailsComponent } from './notifications-details/notifications-details.component';



@NgModule({
  declarations: [NotificationsComponent, NotificationsDetailsComponent],
  imports: [
    CommonModule
  ]
})
export class NotificationsModule { }
