import { Suit } from './suit';
import { Rank } from './rank';

export class Filter {
  constructor(
    private _suits: Array<Suit> = [ Suit.clubs, Suit.diamonds, Suit.hearts, Suit.spades ],
    private _size: number = 52,
    private _rank: object = { max: Rank._A, min: Rank._2 },
    private _ndeck: number = 1
  ) {
    // FormGroup patchValue: make Getters and Setters enumerable
    Object.defineProperty( this, 'suits', {
      enumerable: true,
      get: function () { return this._suits; },
      set: function(value: Array<Suit>) { this._suits = value; }
    } );

    Object.defineProperty( this, 'size', {
      enumerable: true,
      get: function () { return this._size; },
      set: function(value: number) { this._size = value; }
    } );

    Object.defineProperty( this, 'rank', {
      enumerable: true,
      get: function () { return this._rank; },
      set: function(value: object) { this._rank = value; }
    } );

    Object.defineProperty( this, 'ndeck', {
      enumerable: true,
      get: function () { return this._ndeck; },
      set: function(value: number) { this._ndeck = value; }
    } );
  }

  public get suits(): Array<Suit> {
    return this._suits;
  }

  public set suits(suits: Array<Suit>) {
    this._suits = suits;
  }
  
  public get size(): number {
    return this._size;
  }

  public set size(size: number) {
    this._size = size;
  }

  public get rank(): object {
    return this._rank;
  }

  public set rank(rank: object) {
    this._rank = rank;
  }

  public get ndeck(): number {
    return this._ndeck;
  }

  public set ndeck(ndeck: number) {
    this._ndeck = ndeck;
  }
}
