import { PPCB } from './../../share/constants/common.const';
import { Util } from './../../share/utils/util';
import { Component, HostListener, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  scroll    = '';

  ngOnInit(): void {
  }



  // tslint:disable-next-line:use-lifecycle-interface
  ngAfterViewInit(): void {
    // Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    // Add 'implements AfterViewInit' to the class.
    window.addEventListener('scroll', this.menuscroll, false); // third parameter
  }

  @HostListener('window:storage', ['$event'])

  // tslint:disable-next-line:typedef
  menuscroll() {
    if ($(".menuWrap").length > 0 && $(".page_title .guideWrap").length > 0) {
      const sc    = $(window).scrollTop();
      console.log(sc);
      // const menuH = $(".menuWrap").offset().top;
      // const chat  = $(".page_title .guideWrap").offset().top;

      // if (sc >= menuH) {
      //   $(".menuWrap").addClass("fix");
      // } else {
      //   $(".menuWrap").removeClass("fix");
      // }

      // if (sc + 56 >= chat) {
      //   $(".btn_livechat").addClass("fix");
      //   $(".btn_top").show();
      // } else {
      //   $(".btn_livechat").removeClass("fix");
      //   $(".btn_top").hide();
      // }
    }
  }

  menuOverlay(event) {
    console.log(event);
  }

}
