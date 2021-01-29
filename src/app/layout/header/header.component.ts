import { PPCB } from './../../share/constants/common.const';
import { Util } from './../../share/utils/util';
import { Component, HostListener, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import {SubscribeDataService} from '../../share/services/subscribe-data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  scroll    = '';
  activeMenuOverlay = 'active';
  showHumbergerMenuWrapper = false;
  positionFixed = false;

  constructor(private subscribeDataService: SubscribeDataService) {
    this.subscribeDataService.subscribeScrollData.subscribe( message => {
      if (message > 70) {
        this.positionFixed = true;
      } else  if (message < 70) {
        this.positionFixed = false;
      }
    });
  }

  ngOnInit(): void {
  }



  // tslint:disable-next-line:use-lifecycle-interface
  ngAfterViewInit(): void {
  }

  menuOverlay(event:any) {
    console.log(event);
    this.activeMenuOverlay = '';
    this.showHumbergerMenuWrapper = false;
  }

}
