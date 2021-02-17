import { Component, OnInit } from '@angular/core';
import {SubscribeDataService} from '../../share/services/subscribe-data.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-check-out',
  templateUrl: './check-out.component.html',
  styleUrls: ['./check-out.component.css']
})
export class CheckOutComponent implements OnInit {

  constructor(
    private subscribeDataService: SubscribeDataService,
    private router: Router) {
  }

  ngOnInit(): void {
  }

  testing() {
    avascript:self.close()

    const remark = new Date().toISOString();
    const  baseURL = 'https://stageonline.wingmoney.com/wingonlinesdk/';
    const data = {
      "sandbox": "0",
      "amount": "0.1",
      "username": "online.localhost",
      "is_inquiry": "1",
      "remark": remark,
      "rest_api_key": "e57a02ba51f8aa63bf8fdd0ab4cc843096e79f0795d90b66058f6a2fc4bf712a",
      "return_url": "http://localhost:4200/result-pay?order_id="+remark,
      "bill_till_rbtn": "0",
      "bill_till_number": "2000"
    }

    var mapForm = document.createElement("form");
    mapForm.method = "POST"; // or "post" if appropriate
    mapForm.action = baseURL;
    var mapInput = document.createElement("input");

    mapInput.type = "hidden";
    mapInput.name = 'sandbox';
    mapInput.setAttribute("value", '0');
    mapForm.appendChild(mapInput);

    Object.keys(data).forEach(function(param){
      console.log(param, data[param])
      var mapInput = document.createElement("input");
      mapInput.type = "hidden";
      mapInput.name = param;
      mapInput.setAttribute("value", data[param]);
      mapForm.appendChild(mapInput);
    });

    document.body.appendChild(mapForm);
    mapForm.submit();



  }

}
