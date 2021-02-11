import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slide-show1',
  templateUrl: './slide-show1.component.html',
  styleUrls: ['./slide-show1.component.css']
})
export class SlideShow1Component implements OnInit {


  constructor() { }
  Interval = '-720px';
  style = '';
  ngOnInit(): void {
    this.style = 'transform: translate3d('+this.Interval+', 0px, 0px); transition: all 1.2s ease 0s; width: 2160px;';
     setInterval(() => {
       if(this.Interval == '-720px') {
        this.Interval = '-1080px';
       } else {
        this.Interval = '-720px';
       }
      console.log(this.Interval);

    }, 5000);
  }

}
