import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Episode } from '../models/episode';
import { Observable } from 'rxjs'
import { EpisodeResponse } from '../models/episode-response';

@Injectable({
  providedIn: 'root'
})
export class EpisodesService {

  endpoint = environment.RickAndMortyApiUrl + "episode/"

  constructor(private client: HttpClient) { }

  getAll(page: string): Observable<EpisodeResponse> {
    let params = new HttpParams()
    return this.client.get<EpisodeResponse>(`${this.endpoint}?page=${page}`);
  }

  get(id: number): Observable<Episode> {
    return this.client.get<Episode>(`${this.endpoint}${id}/`);
  }
}
