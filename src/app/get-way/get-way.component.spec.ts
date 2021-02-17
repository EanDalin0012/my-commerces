import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetWayComponent } from './get-way.component';

describe('GetWayComponent', () => {
  let component: GetWayComponent;
  let fixture: ComponentFixture<GetWayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetWayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetWayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
