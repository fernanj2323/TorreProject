import { TestBed } from '@angular/core/testing';

import { TorreApiService } from './torre-api.service';

describe('TorreApiService', () => {
  let service: TorreApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TorreApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
