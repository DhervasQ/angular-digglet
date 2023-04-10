import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './components/cards/card/card.component';
import { CardsComponent } from './components/cards/cards.component';
import { PuntuacionComponent } from './components/puntuacion/puntuacion.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    CardsComponent,
    PuntuacionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
