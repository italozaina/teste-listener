import { TestBed } from '@angular/core/testing';

import { SeletorService } from './seletor.service';

describe('SeletorService', () => {
  let service: SeletorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SeletorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
