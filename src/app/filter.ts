import { Suit } from './suit';
import { Rank } from './rank';

export class Filter {
  constructor(
    public suits: Array<Suit> = [ Suit.clubs, Suit.diamonds, Suit.hearts, Suit.spades ],
    public size: number = 52,
    public rank: { } = { max: Rank._A, min: Rank._2 },
    public ndeck: number = 1
  ) { }
}
