import {Component, NgZone, OnInit} from '@angular/core';
import {SubscribeDataService} from '../share/services/subscribe-data.service';

@Component({
  selector: 'app-get-way',
  templateUrl: './get-way.component.html',
  styleUrls: ['./get-way.component.css']
})
export class GetWayComponent implements OnInit {
  data : any;
  constructor(
    private subscribeDataService: SubscribeDataService,
) {
    this.subscribeDataService.htmlWingData.subscribe( data => {
      console.log(data);
      this.data = data;
    });
  }
  ngOnInit(): void {
  }

}
