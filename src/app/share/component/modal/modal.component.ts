import { Component, OnInit } from '@angular/core';
import { ModalDataService } from './modalData.service';

@Component({
  template: '<div [innerHTML]="message"></div>'
})
export class ModalComponent implements OnInit {

  message = '';

  constructor(
    private modalDataService: ModalDataService
  ) {
    this.modalDataService.currentMessage.subscribe(message => this.message = message);
  }

  ngOnInit() {
    this.modalDataService.currentMessage.subscribe(message => this.message = message)
  }
}
