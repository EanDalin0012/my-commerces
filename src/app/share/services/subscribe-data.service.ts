import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SubscribeDataService {

  private subscribeScroll = new BehaviorSubject<any>('');
  subscribeScrollData = this.subscribeScroll.asObservable();

  private htmlWing = new BehaviorSubject<any>('');
  htmlWingData = this.htmlWing.asObservable();

  constructor() { }

  subscribeScrollMessage(message:any) {
    this.subscribeScroll.next(message);
  }

  htmlWingMessage(message:any) {
    this.htmlWing.next(message);
  }

}
