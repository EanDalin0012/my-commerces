import { LANGUAGE, LOCAL_STORAGE } from './share/constants/common.const';
import {Component, HostListener, OnInit} from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Utils } from './share/utils/utils.static';
import {SubscribeDataService} from './share/services/subscribe-data.service';
import {DeviceDetectorService, DeviceInfo} from 'ngx-device-detector';
import {HttpClient} from '@angular/common/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'my-commerces';
  deviceInfo: DeviceInfo | undefined;
  constructor(
    private translate: TranslateService,
    private subscribeDataService: SubscribeDataService,
    private deviceDetectorService: DeviceDetectorService,
    private http:HttpClient
  ) {
    translate.setDefaultLang('en');
    translate.use("en");
  }

  setInitialAppLanguage() {
    const i18n = Utils.getSecureStorage( LOCAL_STORAGE.I18N );
    if ( !i18n ) {
      Utils.setSecureStorage(LOCAL_STORAGE.I18N, LANGUAGE.I18N_EN.toString());
      this.translate.setDefaultLang( LANGUAGE.I18N_EN.toString() );
      this.translate.use( LANGUAGE.I18N_EN.toString() );
    } else {
      this.translate.setDefaultLang( 'en' );
      this.translate.use( i18n );
    }
  }

  // @HostListener('scroll', ['$event']) // for scroll events of the current element
  @HostListener('window:scroll', ['$event']) // for window scroll events
  onScroll(event:any) {
    this.subscribeDataService.subscribeScrollMessage(window.pageYOffset);
  }

  ngOnInit(): void {
    this.deviceInfo = this.deviceDetectorService.getDeviceInfo();

    this.getIPAddress();
    console.log("deviceInfo",this.deviceInfo)
  }

  public getIPAddress()
  {
    this.http.get<{ip:string}>('https://jsonip.com')
      .subscribe( data => {
        console.log('th data', data);
      })
  }


}
