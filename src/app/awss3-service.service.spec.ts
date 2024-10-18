import { TestBed } from '@angular/core/testing';

import { AWSS3ServiceService } from './awss3-service.service';

describe('AWSS3ServiceService', () => {
  let service: AWSS3ServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AWSS3ServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
