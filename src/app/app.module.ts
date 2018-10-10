import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { FilterComponent } from './filter/filter.component';

import { AuthService } from "./auth/auth.service";
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { GameComponent } from './game/game.component';
import { CallbackComponent } from "./callback/callback.component";

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    FilterComponent,
    HomeComponent,
    GameComponent,
    CallbackComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
