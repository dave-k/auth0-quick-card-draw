import { TestBed } from '@angular/core/testing';

import { FilterService } from './filter.service';
import { Filter } from './filter';
import { of } from 'rxjs';

describe('FilterService', () => {
  let filterService: FilterService;
  let filterResponse: Filter = new Filter();

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FilterService]
    });

    filterService = TestBed.get(FilterService);
  });

  it('should be created', () => {
    expect(filterService).toBeTruthy();
  });

  // Add tests for getFilter() method
  describe('getFilter', () => {
    it('should return an Observable<Filter>', () => {
      filterResponse.ndeck = 1;
      filterResponse.suits = [0, 1, 2, 3];    // clubs ...
      filterResponse.size= 5;
      filterResponse.rank = { max: 12, min: 0 };
      
      let response: Filter;
      //spyOn(filterService, 'getFilter').and.returnValue(of(filterResponse));

      filterService.getFilter()
        .subscribe(res => response = res);

      expect(response).toEqual(filterResponse);
    });
  });
});
