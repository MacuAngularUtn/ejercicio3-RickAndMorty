import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Character } from 'src/app/models/character';
import { CharactersService } from 'src/app/serveces/characters.service';

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.css']
})
export class CharacterListComponent implements OnInit {
  characters: Character[] = []
  nextPage?:string 
  previusPage?:string
  characterSearch:string=''


  constructor(private service: CharactersService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.service.getAll().subscribe(response => {
      this.characters = response.results
      this.nextPage = response.info.next
      this.previusPage = response.info.prev
      console.log(response)
    })
  }

  search(){
    console.log(this.characterSearch)
    this.service.search(this.characterSearch).subscribe(response => {
      this.characters = response.results
      this.nextPage = response.info.next
      this.previusPage = response.info.prev
      console.log(response)
    })
  }
}
