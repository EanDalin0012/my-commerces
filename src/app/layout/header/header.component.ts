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
  // ** UI
  sltLanguageList = false;
  sltFavoriteList = false;
  sltSitemapList  = false;
  /**
   * Control
   */
  util = new Util();
  timeCheckInterval: any; // 자동 로그아웃 인터벌 함수
  viewText: any; // Translate 접근용 변수

  /**
   * View
   */
  path = '';
  scroll    = "";
  isScrollTop = false;
  userInfo  = this.util.getSecureStorage( 'USER_INFO' ); // 사용자 정보
  recordsTotal: any; // 알림 수
  menuRightData = [{
    programTypeCode       : '',
    level1MenuCode        : '',
    level2MenuCode        : '',
    menuUseRightTypeCode  : '',
    level1MenuDescription : '',
    level2MenuDescription : '',
    registerDate          : '',
    changeDate            : '',
    seqNo                 : '',
  }];
  imageURL = this.userInfo.corporateUserProfileImageURL;
  // 탭 메뉴 If 조건
  favoriteMenuList  = [
    {
      level2MenuDescription: '',
      seqNo: ''
    }
  ]; // this.util.getSecureStorage("favoritelist"); // 즐겨찾기 List
  langCode          = this.translate.currentLang; // 언어 코드
  langData          = { // 언어코드별 Text 및 Class
    en: { class: "eng", text: "English"},
    km: { class: "khmer", text: "ខ្មែរ"},
    zh: { class: "china", text: "中文"},
  };
  public imagePreviews: any;
  bankNetworkList: Array<{ value: string, text: string }> = [
    { value: 'default', text: 'LAYOUT.LABEL.FOOTER4' },
    { value: 'ppcb', text: 'LAYOUT.LABEL.FOOTER5' },
    { value: 'jeonbuk', text: 'LAYOUT.LABEL.FOOTER6' },
    { value: 'apro', text: 'LAYOUT.LABEL.FOOTER7' },
  ];
  bankNetwork: { value: string, text: string } = { value: '', text: 'LAYOUT.LABEL.FOOTER8' };

  winFileUrl: any;
  macFileUrl: any;
  isOS = '';

  constructor(
    private translate: TranslateService,
  ) { }

  ngOnInit(): void {
  }

  clearInquiryCondition() {
    this.util.removeSecureStorage('INQUIRY_CONDITION');
}

clearSearchCondition() {
  this.util.removeSecureStorage('SEARCH_CONDITION');
}

ngAfterViewInit(): void {
  // Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
  // Add 'implements AfterViewInit' to the class.
  window.addEventListener('scroll', this.menuscroll, false); // third parameter
}

onClickBody() {
  // this.authService.setLastEventTime();
  this.sltLanguageList  = false;
  this.sltFavoriteList  = false;
  this.sltSitemapList   = false;
}

ngOnDestroy() {
  // this.dataService.unsubscribe();
}

/**
 * window scroll events
 */
// @HostListener('window:scroll', ['$event'])
menuscroll() {

}

@HostListener('window:storage', ['$event'])
onstorage(event: any) {

}

makeFavoriteList() {

}

/**
 * 즐겨찾기 목록 삭제
 */
onDeleteFavorite(favoriteMenu: any) {
  console.log(favoriteMenu);

}

/**
 * 페이지 방문 List 업데이트
 */
setVisitList(path: string) {
  console.log(path);

}

/**
 * 즐겨찾기 리스트 조회
 */
getFavoriteList() {


}

/**
 * 로그아웃
 */
logout() {

  this.translate.get('LAYOUT').subscribe(message => {
    this.viewText = message;
  });
}

onOpenNew() {
  window.open("/main/home");
}

/**
 * 화면 이동
 */
onOpenPage(urlCode: any) {
  console.log(urlCode);

}

/**
 * 스크롤 상단으로 이동 함수
 */
onScrollTop() {
  // $("HTML, BODY").animate({
  //     scrollTop: 0
  // }, 500);
  // $(window).scrollTop(0);
}

/**
 * 언어코드 변경
 */
onChangeLanguage(code: string) {
  this.langCode = code;
  this.translate.use( this.langCode );
  this.util.setSecureStorage( 'langCode', this.langCode );
}

/**
 * 즐겨찾기 팝업 오픈
 */
onOpenFavorite() {
}
/**
 * 알림목록 조회
 */
noticeList() {

}

// ppcb 관련 홈페이지 이동
logo() {
  window.open(PPCB.MAIN, "_blank");
}
news() {
  window.open(PPCB.NOTICE, "_blank");
}
rates() {
  window.open(PPCB.RATES, "_blank");
}
privacy() {
  window.open(PPCB.PRIVACY, "_blank");
}
contact() {
  window.open(PPCB.CONTACT, "_blank");
}
facebook() {
  window.open(PPCB.FACEBOOK, "_blank");
}

/**
 * 연관 사이트 오픈
 */
onBankSelect(value: any) {
  console.log(value);
}

userMenu() {
}



}
