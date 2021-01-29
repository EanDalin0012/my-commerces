import { TestBed } from '@angular/core/testing';

import { SubscribeDataService } from './subscribe-data.service';

describe('SubscribeDataService', () => {
  let service: SubscribeDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SubscribeDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
