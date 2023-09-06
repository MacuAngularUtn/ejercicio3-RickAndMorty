import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EpisodeDetailComponent } from './episode-detail.component';
import { AppRoutingModule } from 'src/app/app-routing.module';



@NgModule({
  declarations: [
    EpisodeDetailComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ]
})
export class EpisodeDetailModule { }
