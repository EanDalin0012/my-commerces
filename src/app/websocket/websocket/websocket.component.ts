import { Component, OnInit } from '@angular/core';
import {WebSocketService} from '../../share/services/web-socket.service';

@Component({
  selector: 'app-websocket',
  templateUrl: './websocket.component.html',
  styleUrls: ['./websocket.component.css']
})
export class WebsocketComponent implements OnInit {

  greeting: any;
  name: string;
  constructor(
    private WebSocketService: WebSocketService
  ) { }

  ngOnInit(): void {
  }

  disconnect(){
    this.WebSocketService.disconnect();
  }

  sendMessage(){
    this.WebSocketService.send(this.name);
  }

  handleMessage(message){
    this.greeting = message;
  }

  connect(): void {
    this.WebSocketService.connect();
  }

}
