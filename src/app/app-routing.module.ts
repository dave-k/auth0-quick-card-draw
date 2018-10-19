import { NgModule } from '@angular/core';
import { Routes, RouterModule } from "@angular/router";
import { CommonModule } from '@angular/common';
import { HomeComponent } from "./home/home.component";
import { GameComponent } from "./game/game.component";
import { CallbackComponent } from "./callback/callback.component";
import { AuthGuard } from "./auth/auth.guard";
import {APP_BASE_HREF} from '@angular/common';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "game",
    component: GameComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "callback",
    component: CallbackComponent
  }
]; 

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ],
  providers: [AuthGuard, {provide: APP_BASE_HREF, useValue: '/auth0-quick-card-draw'}],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
