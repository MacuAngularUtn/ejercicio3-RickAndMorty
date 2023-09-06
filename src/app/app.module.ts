import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './navbar/nav/nav.component';
import { CharacterListModule } from './character/list/character-list.module';
import { CharacterDetailModule } from './character/detail/character-detail/character-detail.module';
import { EpisodeDetailModule } from './episode/detail/episode-detail/episode-detail.module';
import { EpisodeListModule } from './episode/list/episode-list/episode-list.module';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CharacterListModule,
    CharacterDetailModule,
    EpisodeDetailModule,
    EpisodeListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
