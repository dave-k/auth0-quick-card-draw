import { Suit } from './suit';
import { Rank } from './rank';

export class Card {

  public suit: string;          
  public rank: string;  //

  // new Card(Suit.hearts, Rank._A)
  constructor(      
    public suitId: Suit,
    public rankId: Rank,
    public deck: number = 0
  ) { 
    this.suit = Suit[this.suitId];          // 'hearts'
    this.rank = Rank.toString(this.rankId); // 'A'
  }

  static sort(card1: Card, card2: Card) {
    return Suit[card1.suit] < Suit[card2.suit] ? -1 : 
          Suit[card1.suit] > Suit[card2.suit] ? 1 : 
          card1.rankId < card2.rankId ? 1 : 
          card1.rankId > card2.rankId ? -1 : 
          0;
  }
}
