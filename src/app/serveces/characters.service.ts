import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CharacterResponse } from '../models/character-response';
import { Character } from '../models/character';


@Injectable({
  providedIn: 'root'
})


export class CharactersService {

  endpoint = environment.RickAndMortyApiUrl + "character/"

  constructor(private client: HttpClient) { }

  getAll(page?: number): Observable<CharacterResponse> {
    let params = new HttpParams()

    if (page) {
      params.append('page', page);
    }

    return this.client.get<CharacterResponse>(this.endpoint, { params });
  }

  get(id: string): Observable<Character> {
    return this.client.get<Character>(`${this.endpoint}${id}/`);
  }

  getList(characters: string[]): Observable<Character[]> {
    return this.client.get<Character[]>(`${this.endpoint}${characters.toString()}`);
  }

  search(characterName: string): Observable<CharacterResponse> {
    let params = new HttpParams()

    if (characterName) {
      params.append('name', characterName);
    }

    return this.client.get<CharacterResponse>(`${this.endpoint}?name=${characterName}`);
  }
}
