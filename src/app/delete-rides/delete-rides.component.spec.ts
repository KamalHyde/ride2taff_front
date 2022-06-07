import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteRidesComponent } from './delete-rides.component';

describe('DeleteRidesComponent', () => {
  let component: DeleteRidesComponent;
  let fixture: ComponentFixture<DeleteRidesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteRidesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteRidesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
