import { TestBed } from '@angular/core/testing';

import { RoomsTableServiceService } from './rooms-table-service.service';

describe('RoomsTableServiceService', () => {
  let service: RoomsTableServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RoomsTableServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
