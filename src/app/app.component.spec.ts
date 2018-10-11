import { TestBed, async } from '@angular/core/testing';
import { ReactiveFormsModule }   from '@angular/forms';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { GameComponent } from './game/game.component';
import { FilterComponent } from './filter/filter.component';
import { CardComponent } from './card/card.component';
import { CallbackComponent } from "./callback/callback.component";
import { AppRoutingModule } from './app-routing.module';
import { AuthService } from "./auth/auth.service";
import { AuthGuard } from "./auth/auth.guard";

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        HomeComponent,
        GameComponent,
        FilterComponent,
        CardComponent,
        CallbackComponent
      ],
      imports: [ReactiveFormsModule, AppRoutingModule],
      providers: [AuthGuard, AuthService],
    }).compileComponents();
  }));
  
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have as title 'Auth0 Quick Draw'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Auth0 Quick Draw');
  }));
  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Auth0 Quick Draw');
  }))
  
});
