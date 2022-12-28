import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlayerComponent } from './components/player/player.component';
import { SpriteComponent } from './components/sprite/sprite.component';
import { PlayerShowcaseComponent } from './components/player-showcase/player-showcase.component';
import { GameComponent } from './components/game/game.component';

@NgModule({
  declarations: [AppComponent, PlayerComponent, SpriteComponent, PlayerShowcaseComponent, GameComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
