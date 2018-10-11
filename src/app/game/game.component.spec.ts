import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveFormsModule }   from '@angular/forms';

import { GameComponent } from './game.component';
import { FilterComponent } from '../filter/filter.component';
import { CardComponent } from '../card/card.component';

describe('GameComponent', () => {
  let component: GameComponent;
  let fixture: ComponentFixture<GameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GameComponent, FilterComponent, CardComponent ],
      imports: [ReactiveFormsModule],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
