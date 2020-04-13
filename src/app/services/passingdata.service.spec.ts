import { TestBed } from '@angular/core/testing';

import { PassingdataService } from './passingdata.service';

describe('PassingdataService', () => {
  let service: PassingdataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PassingdataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
