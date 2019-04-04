import { TestBed } from '@angular/core/testing';

import { FFModalService } from './ff-modal.service';

describe('FFModalService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FFModalService = TestBed.get(FFModalService);
    expect(service).toBeTruthy();
  });
});
