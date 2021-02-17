import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WebSocketService {

  webSocketEndPoint: string = 'http://localhost:8080/ws';
  topic: string = "/topic/greetings";
  stompClient: any;

  constructor() { }

  public connect(): void {
    // console.log("Initialize WebSocket Connection");
    // let ws = new SockJS(this.webSocketEndPoint);
    // this.stompClient = Stomp.over(ws);
    // const thisValue = this;
    // thisValue.stompClient.connect({}, function (frame) {
    //   thisValue.stompClient.subscribe(thisValue.topic, function (sdkEvent) {
    //     thisValue.onMessageReceived(sdkEvent);
    //   });
    //   //_this.stompClient.reconnect_delay = 2000;
    // }, this.errorCallBack);
  }

  disconnect() {
    if (this.stompClient !== null) {
      this.stompClient.disconnect();
    }
    console.log("Disconnected");
  }

  // on error, schedule a reconnection attempt
  errorCallBack(error) {
    console.log("errorCallBack -> " + error)
    setTimeout(() => {
      this.connect();
    }, 5000);
  }

  /**
   * Send message to sever via web socket
   * @param {*} message
   */
  send(message) {
    console.log("calling logout api via web socket"+ message);
    this.stompClient.send("/app/hello", {}, JSON.stringify(message));
  }

  onMessageReceived(message): any {
    console.log("Message Recieved from Server :: " + message);
    return message;
  }
}
