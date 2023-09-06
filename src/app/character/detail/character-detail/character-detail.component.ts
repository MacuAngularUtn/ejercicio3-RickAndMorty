import { Component, OnInit,Pipe, PipeTransform } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Character } from 'src/app/models/character';
import { CharactersService } from 'src/app/serveces/characters.service';

@Component({
  selector: 'app-character-detail',
  templateUrl: './character-detail.component.html',
  styleUrls: ['./character-detail.component.css']
})
export class CharacterDetailComponent implements OnInit {
  character?:Character

  constructor(private service: CharactersService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    let idCharacter = this.route.snapshot.paramMap.get('id');
    this.service.get(idCharacter!).subscribe(x => {
      this.character = x
    })
  }
}
