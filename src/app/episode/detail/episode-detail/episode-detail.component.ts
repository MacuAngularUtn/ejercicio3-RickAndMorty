import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Character } from 'src/app/models/character';
import { Episode } from 'src/app/models/episode';
import { CharactersService } from 'src/app/serveces/characters.service';
import { EpisodesService } from 'src/app/serveces/episodes.service';

@Component({
  selector: 'app-episode-detail',
  templateUrl: './episode-detail.component.html',
  styleUrls: ['./episode-detail.component.css']
})
export class EpisodeDetailComponent implements OnInit {
    episode?:Episode
    characters:Character[]=[]
  
    constructor(private service: EpisodesService, private characterService: CharactersService, private route: ActivatedRoute) { }
  
    ngOnInit(): void {
      let idCharacter = this.route.snapshot.paramMap.get('id');
      this.service.get(Number(idCharacter)).subscribe(response => {
        this.episode = response
        this.getCharacters()
      })

    }


    getCharacters():void{      
      let charactersIds:string[] =  this.episode!.characters.map(x => x.split('/').pop()!)
       this.characterService.getList(charactersIds).subscribe(x => {this.characters = x})
    }
}
