import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ChooseGameComponent } from './choose-game/choose-game.component';
import { AppRoutingModule } from './/app-routing.module';
import { DnDComponent } from './dn-d/dn-d.component';
import { GameNavComponent } from './game-nav/game-nav.component';
import { AboreaComponent } from './aborea/aborea.component';
import { DsaComponent } from './dsa/dsa.component';

@NgModule({
  declarations: [
    AppComponent,
    ChooseGameComponent,
    DnDComponent,
    GameNavComponent,
    AboreaComponent,
    DsaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
