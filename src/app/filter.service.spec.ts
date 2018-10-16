import { TestBed } from '@angular/core/testing';

import { FilterService } from './filter.service';
import { Filter } from './filter';

describe('Service: FilterService', () => {
  let service: FilterService;
  let filter: Filter = new Filter();

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FilterService]
    });

    service = TestBed.get(FilterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  // Add tests for filter service
  it('should return an Observable<Filter>',
    (done: DoneFn) => {
      service.getFilter().subscribe(value => {
        expect(value).toEqual(filter);
        done();
      });  
  });

  // Add tests for filter service
  it('should update filter', (done: DoneFn) => {
    
    let filter: Filter = new Filter();
    filter.ndeck = 2;
    service.updateFilter(filter);

    service.getFilter().subscribe(value => {
      expect(value.ndeck).toEqual(2);
      done();
    });  
  });
});
