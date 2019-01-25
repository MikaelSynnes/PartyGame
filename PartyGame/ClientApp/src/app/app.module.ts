import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { CreatePlayerComponent } from './create-player/create-player.component';
import { GameComponent } from './game/game.component';
import { AftergameComponent } from './aftergame/aftergame.component';
import { CreateGameComponent } from './creategame/creategame.component';
import { SendAssumptionComponent } from './sendassumption/sendassumption.component';
import { ApiService } from './api.service';

@NgModule({
  declarations: [
    AppComponent,
    CreatePlayerComponent,
    GameComponent,
    AftergameComponent,
    CreateGameComponent,
    SendAssumptionComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: CreatePlayerComponent, pathMatch: 'full' },
      { path: 'ready', component: CreateGameComponent},
      { path: 'makeassumptions', component: SendAssumptionComponent },
      { path: 'game', component: GameComponent },
    ])
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
