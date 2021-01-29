import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SubscribeDataService {

  private subscribeScroll = new BehaviorSubject<any>('');
  subscribeScrollData = this.subscribeScroll.asObservable();

  constructor() { }

  subscribeScrollMessage(message:any) {
    this.subscribeScroll.next(message);
  }

}
