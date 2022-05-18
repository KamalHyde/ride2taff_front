import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemandsReceivedComponent } from './demands-received.component';

describe('DemandsReceivedComponent', () => {
  let component: DemandsReceivedComponent;
  let fixture: ComponentFixture<DemandsReceivedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemandsReceivedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DemandsReceivedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
