import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveFormsModule }   from '@angular/forms';
import { HomeComponent } from './home.component';
import { GameComponent } from '../game/game.component';
import { FilterComponent } from '../filter/filter.component';
import { CardComponent } from '../card/card.component';
import { CallbackComponent } from "../callback/callback.component";
import { AuthService } from "../auth/auth.service";
import { AuthGuard } from "../auth/auth.guard";
import { AppRoutingModule } from '../app-routing.module';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeComponent, GameComponent, FilterComponent, CardComponent, CallbackComponent ],
      imports: [ReactiveFormsModule, AppRoutingModule],
      providers: [AuthGuard, AuthService],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
