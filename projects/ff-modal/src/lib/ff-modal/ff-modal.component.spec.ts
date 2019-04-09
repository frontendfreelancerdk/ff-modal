import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FFModalComponent } from './ff-modal.component';

describe('FfModalComponent', () => {
  let component: FFModalComponent;
  let fixture: ComponentFixture<FFModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FFModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FFModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
