import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay, map } from 'rxjs/operators';

import { FilterService } from './filter.service';
import { Filter } from './filter';
import { Card } from './card';
import { Suit } from './suit';
import { Rank } from './rank';

@Injectable({
  providedIn: 'root'
})
export class DeckService {

  constructor(private filterService: FilterService) { }

  public getDeck(): Observable<Array<Card>> {
    return this.filterService.getFilter()
      .pipe(
        map(
          filter => {
            return this.shuffle(this.deck(filter));
        }),
        delay(20)
      );
  }

  public deck(filter: Filter): Array<Card> {
    let card: Card;
    let _deck: Array<Card> = Array();

    for(let deck = 0; deck < filter.ndeck; deck++) {
      for(let suit:Suit = 0; suit < filter.suits.length; suit++) {
        for(let rank:Rank = filter.rank['min']; rank <= filter.rank['max']; rank++) {
          card = new Card(filter.suits[suit], rank, deck);
          _deck.push(card);
        }
      }
    }
    return _deck;
  }

  public shuffle(_deck: Array<Card>):Array<Card> {
    // for 1000 turns
    // switch the values of two random cards
    for (let i = 0; i < 1000; i++)
    {
      let location1 = Math.floor((Math.random() * _deck.length));
      let location2 = Math.floor((Math.random() * _deck.length));
      let tmp = _deck[location1];

      _deck[location1] = _deck[location2];
      _deck[location2] = tmp;
    }
    return _deck;
  }
}
