import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WebsocketComponent } from './websocket/websocket.component';
import {WebsocketRoutingModule} from './websocket-routing.module';
import {MSharesModule} from '../share/m-shares/m-shares.module';



@NgModule({
  declarations: [WebsocketComponent],
  imports: [
    CommonModule,
    WebsocketRoutingModule,
    MSharesModule
  ]
})
export class WebsocketModule { }
