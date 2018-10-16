import { TestBed } from '@angular/core/testing';

import { DeckService } from './deck.service';
import { Filter } from './filter';
import { Card } from './card';

describe('Service: DeckService', () => {
  let service: DeckService;
  let filter: Filter = new Filter();

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DeckService]
    })
    service = TestBed.get(DeckService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  // Add test for deck() function
  it('should initialize deck', () => {
    let deck:Array<Card> = service.deck(filter);
    let length = filter.ndeck * filter.suits.length * (filter.rank['max'] - filter.rank['min'] + 1);
    expect(deck.length).toEqual(length);
  });

  // Add test for shuffle() function
  it('should shuffle deck', () => {
    let deck:Array<Card> = service.deck(filter);
    let card:Card = deck[0];
    deck = service.shuffle(deck);
    expect(card).not.toEqual(deck[0]);
  });

  // Add tests for deck service
  it('should return an Observable<Array<Card>>',
    (done: DoneFn) => {
      service.getDeck().subscribe(value => {
        expect(value).toEqual(jasmine.any(Array));
        expect(value[0]).toEqual(jasmine.any(Card));
        done();
      });  
  });
});
