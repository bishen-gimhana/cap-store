import { TestBed } from '@angular/core/testing';

import { ProductDataService } from './product-data.service';

describe('ProductsDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProductDataService = TestBed.get(ProductDataService);
    expect(service).toBeTruthy();
  });
});
