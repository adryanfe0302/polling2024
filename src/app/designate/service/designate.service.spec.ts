import { TestBed } from '@angular/core/testing';

import { DesignateService } from './designate.service';

describe('DesignateService', () => {
  let service: DesignateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DesignateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
