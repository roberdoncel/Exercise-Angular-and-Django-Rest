import { TestBed } from '@angular/core/testing';

import { AddtobookmarksService } from './addtobookmarks.service';

describe('AddtobookmarksService', () => {
  let service: AddtobookmarksService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddtobookmarksService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
