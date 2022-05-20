import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PassengerDemandsComponent } from './passenger-demands.component';

describe('PassengerDemandsComponent', () => {
  let component: PassengerDemandsComponent;
  let fixture: ComponentFixture<PassengerDemandsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PassengerDemandsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PassengerDemandsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
