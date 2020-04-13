import { TestBed } from '@angular/core/testing';

import { HistoryRestService } from './history-rest.service';

describe('HistoryRestService', () => {
  let service: HistoryRestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HistoryRestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
