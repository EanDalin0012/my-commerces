import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slide-show1',
  templateUrl: './slide-show1.component.html',
  styleUrls: ['./slide-show1.component.css']
})
export class SlideShow1Component implements OnInit {


  constructor() { }
  css = 'ng1';
  ngOnInit(): void {
     setInterval(() => {
       if(this.css == 'ng') {
        this.css = 'ng1';
       } else {
        this.css = 'ng';
       }

    }, 5000);
  }

}
