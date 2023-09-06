import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharacterListComponent } from './character/list/character-list.component';
import { CharacterDetailComponent } from './character/detail/character-detail/character-detail.component';
import { EpisodeDetailComponent } from './episode/detail/episode-detail/episode-detail.component';
import { EpisodeListComponent } from './episode/list/episode-list/episode-list.component';

const routes: Routes = [
  {path:'', redirectTo:'character', pathMatch:'full'},
  {path:'character', component:CharacterListComponent},
  {path:'character/:id', component:CharacterDetailComponent},
  {path:'episode', component:EpisodeListComponent},
  {path:'episode/:id', component:EpisodeDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
