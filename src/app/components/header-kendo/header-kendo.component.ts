import { Component, NgZone, OnInit } from '@angular/core';

const items: any[] = [
  {
      text: 'Item1',
      items: [{ text: 'Item 1.1' }, { text: 'Item 1.2', items: [{ text: 'Item 1.2.1' }, { text: 'Item 1.2.2' }] }]
  },
  {
      text: 'Item2',
      items: [{ text: 'Item 2.1' }, { text: 'Item 2.2' }, { text: 'Item 2.3' }]
  },
  {
      text: 'Item3'
  }
];

@Component({
  selector: 'app-header-kendo',
  templateUrl: './header-kendo.component.html',
  styleUrls: ['./header-kendo.component.css']
})
export class HeaderKendoComponent implements OnInit {


  // @ViewChild('anchor', { static: false })
  // public anchor: ElementRef<HTMLElement>;

  public kendokaAvatar = 'https://www.telerik.com/kendo-angular-ui-develop/components/navigation/appbar/assets/kendoka-angular.png';

    public margin = { horizontal: -46, vertical: 7 };
    show = false;
    public items: any[] = items;

    totalCartCounter = 0;
    // productList = new Array<Product>();

  constructor(
    private zone: NgZone) { }

  ngOnInit(): void {

  }

  public onToggle(): void {
    this.show = !this.show;
}
public ngAfterViewInit(): void {
  this.zone.runOutsideAngular(() => {
      window.addEventListener('resize', () => {
          if (this.show) {
              this.zone.run(() => this.onToggle());
          }
      });
  });
}

}
