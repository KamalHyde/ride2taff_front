import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddRegularRideComponent } from './add-regular-ride.component';

describe('AddRegularRideComponent', () => {
  let component: AddRegularRideComponent;
  let fixture: ComponentFixture<AddRegularRideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddRegularRideComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddRegularRideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
