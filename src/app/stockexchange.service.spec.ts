import { TestBed } from '@angular/core/testing';

import { StockExchangeService } from './stockexchange.service';

describe('StockexchangeService', () => {
  let service: StockExchangeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StockExchangeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
