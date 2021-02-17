import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
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
    private router: Router,
    private httpClient: HttpClient) { }

  ngOnInit(): void {
  }

  testing() {
    const  baseURL = 'https://stageonline.wingmoney.com/wingonlinesdk/';
    const data = {
      "sandbox": "0",
      "amount": "0.1",
      "username": "online.localhost",
      "is_inquiry": "1",
      "remark":"remark20210216",
      "rest_api_key": "e57a02ba51f8aa63bf8fdd0ab4cc843096e79f0795d90b66058f6a2fc4bf712a",
      "return_url": "",
      "bill_till_rbtn": "0",
      "bill_till_number": "2000"
    }

    const  url = '';
    var mapForm = document.createElement("form");
    mapForm.target = "_blank";
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

    // this.router.navigate(['https://stageonline.wingmoney.com/wingonlinesdk/'], {state: data});
    //
    // const form = new FormData();
    // let headers = new HttpHeaders();
    // headers.set('Content-Type', 'application/json; charset=utf-8');
    // headers.set('Referer ', 'http://localhost:8080/');
    //
    // this.httpClient.post('https://stageonline.wingmoney.com/wingonlinesdk/', data, {
    //   headers: headers,
    //   responseType: 'text'
    // }).subscribe(res=> {
    //   if(res) {
    //     this.subscribeDataService.htmlWingMessage(res.toString());
    //
    //   }
    //
    // });
  }

}
