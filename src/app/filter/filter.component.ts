import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { tap, delay } from 'rxjs/operators';

import { FilterService } from '../filter.service';
import { DeckService } from '../deck.service';

import { Filter } from '../filter';
import { Suit } from '../suit';
import { Rank } from '../rank';
import { Card } from '../card';
import { FormValidator, RankValidator } from '../validator';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})

export class FilterComponent implements OnInit {

  // Component properties to bind to HTML controls
  public filter$: Observable<Filter>;
  public suits:{}[] = Suit.options();
  public deck:{}[] = Rank.options();
  public hand: Array<Card> = Array();
  
  // Form
  form: FormGroup = this.fb.group({
    ndeck: [''],
    suits: ['', [ Validators.required ]],
    size:  ['', [ Validators.min(1), Validators.required ]],
    rank: this.fb.group({
      max: [''],
      min: [''],
    }, { validator: RankValidator })
  }, { validator: FormValidator() });

  constructor(
    private fb: FormBuilder, 
    private filterService: FilterService,
    private deckService: DeckService) { }

  ngOnInit() {
    // Initialize form from filter data
    this.filter$ = this.filterService.getFilter().pipe(
      tap(filter => this.form.patchValue(filter)));
  }

  onSubmit() {
    this.quickDraw(this.form.value);
  }

  quickDraw(filter: Filter): void {
    this.hand = [];
    this.filterService.updateFilter(filter);
    this.deckService.getDeck()
      .subscribe(deck => {
        for(let i = 0; i < filter.size; i++) {
          this.hand
            .push(<Card>deck[i]);
        }
        this.hand
          .sort((card1, card2) => Card.sort(card1, card2));
      });
  }
}
