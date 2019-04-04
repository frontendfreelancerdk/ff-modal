import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FfModalComponent } from './ff-modal.component';

describe('FfModalComponent', () => {
  let component: FfModalComponent;
  let fixture: ComponentFixture<FfModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FfModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FfModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
