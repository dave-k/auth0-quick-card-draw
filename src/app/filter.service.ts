import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

import { Filter } from './filter';

@Injectable({
  providedIn: 'root'
})
export class FilterService {

  private filter: Filter = new Filter(); 
  
  constructor() { }

  public getFilter(): Observable<Filter> {
    return of<Filter>(this.filter).pipe(delay(20));
  }

  public updateFilter(filter:Filter) {
    this.filter = filter; 
  }
}
