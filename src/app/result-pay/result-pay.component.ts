import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router, RouterStateSnapshot} from '@angular/router';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Component({
  selector: 'app-result-pay',
  templateUrl: './result-pay.component.html',
  styleUrls: ['./result-pay.component.css']
})
export class ResultPayComponent implements OnInit {

  constructor(private route: ActivatedRoute,
              private httpClient: HttpClient) {
    const orderId = this.route.snapshot.queryParams.order_id;
    if(orderId) {
      const  data = {
        username: 'online.localhost',
        'rest_api_key': 'e57a02ba51f8aa63bf8fdd0ab4cc843096e79f0795d90b66058f6a2fc4bf712a',
        remark: orderId,
        sandbox: '1'
      };
      const headers = new HttpHeaders();
      headers.set('Content-Type', 'application/json; charset=utf-8');

      this.httpClient.post('https://stageonline.wingmoney.com/wingonlinesdk/inquiry', data, {
        headers: headers,
      }).subscribe(res => {
        console.log('inquiry', res);
      });
    }

  }

  ngOnInit(): void {
  }

}
