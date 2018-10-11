import { TestBed } from '@angular/core/testing';

import { AppRoutingModule } from '../app-routing.module';
import { ReactiveFormsModule }   from '@angular/forms';

import { AuthService } from './auth.service';
import { CallbackComponent } from "../callback/callback.component";

import { HomeComponent } from '../home/home.component';
import { GameComponent } from '../game/game.component';
import { FilterComponent } from '../filter/filter.component';
import { CardComponent } from '../card/card.component';


describe('AuthService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    declarations: [CallbackComponent, HomeComponent, GameComponent, FilterComponent, CardComponent],
    providers: [AuthService],
    imports: [AppRoutingModule, ReactiveFormsModule],
  }));

  it('should be created', () => {
    const service: AuthService = TestBed.get(AuthService);
    expect(service).toBeTruthy();
  });
});
