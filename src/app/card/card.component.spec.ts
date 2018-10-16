import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {Component} from "@angular/core";
import {ViewChild} from "@angular/core";

import {CardComponent} from './card.component';
import {Suit} from '../suit';
import {Rank} from '../rank';
import {Card} from '../card';

describe('Component: CardComponent', () => {
  let testHostComponent: TestHostComponent;
  let testHostFixture: ComponentFixture<TestHostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CardComponent, TestHostComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    testHostFixture = TestBed.createComponent(TestHostComponent);
    testHostComponent = testHostFixture.componentInstance;
  });

  it('should be created', () => {
    testHostComponent.componentUnderTestComponent.card = new Card(Suit.hearts, Rank._A);
    testHostFixture.detectChanges();
    expect(testHostComponent).toBeTruthy();
    expect(testHostFixture.nativeElement.querySelector('div.rank').innerText).toEqual('A');
    expect(testHostFixture.nativeElement.querySelector('div.card-img.hearts')).toBeTruthy();
  });

  @Component({
    selector: `host-component`,
    template: `<app-card></app-card>`
  })
  class TestHostComponent {
    @ViewChild(CardComponent)
    public componentUnderTestComponent: CardComponent;
  }
});
