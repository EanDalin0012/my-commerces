import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderKendoComponent } from './header-kendo.component';

describe('HeaderKendoComponent', () => {
  let component: HeaderKendoComponent;
  let fixture: ComponentFixture<HeaderKendoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderKendoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderKendoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
