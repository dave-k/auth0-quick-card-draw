import { TestBed } from '@angular/core/testing';

import { DrawService } from './draw.service';
import { Card } from './Card';
import { Observable, of } from 'rxjs';

describe('DrawService', () => {
  let drawService: DrawService;
  let drawResponse: Card[] = [];

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DrawService]
    })
    drawService = TestBed.get(DrawService);
  });

  it('should be created', () => {
    expect(drawService).toBeTruthy();
  });

  // Add tests for getDraw() method
  describe('getDraw', () => {
    it('should return an Observable<Card[]>', () => {

      let responseSize: Number = 52;
      let response: Card[];

      let card = new Card(0, 0, 12);
      drawResponse.push(card);
      //responseSize = 1;
      //spyOn(drawService, 'getDraw').and.returnValue(of(drawResponse));

      drawService.getDraw()
        .subscribe(res => response = res);

      expect(response.length).toEqual(responseSize);
    });

  });
});
