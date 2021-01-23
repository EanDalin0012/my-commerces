import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddToCartsComponent } from './add-to-carts.component';

describe('AddToCartsComponent', () => {
  let component: AddToCartsComponent;
  let fixture: ComponentFixture<AddToCartsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddToCartsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddToCartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
