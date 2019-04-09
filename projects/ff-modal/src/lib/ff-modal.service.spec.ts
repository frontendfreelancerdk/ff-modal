import {TestBed} from '@angular/core/testing';

import {FFModalService} from './ff-modal.service';
import {FFModalComponent} from './ff-modal/ff-modal.component';
import {BrowserDynamicTestingModule} from '@angular/platform-browser-dynamic/testing';
import {FFOverlayModule} from 'ff-overlay';

describe('FFModalService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FFModalComponent],
      imports: [FFOverlayModule]
    });
    TestBed.overrideModule(BrowserDynamicTestingModule, {
      set: {
        entryComponents: [FFModalComponent]
      }
    });
  });

  it('should be created', () => {
    const service: FFModalService = TestBed.get(FFModalService);
    expect(service).toBeTruthy();
  });
});
