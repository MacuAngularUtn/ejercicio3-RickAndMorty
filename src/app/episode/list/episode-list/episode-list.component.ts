import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Episode } from 'src/app/models/episode';
import { EpisodesService } from 'src/app/serveces/episodes.service';

@Component({
  selector: 'app-episode-list',
  templateUrl: './episode-list.component.html',
  styleUrls: ['./episode-list.component.css']
})
export class EpisodeListComponent {
  episodes?: Episode[]
  prev?: string
  next?: string


  constructor(private service: EpisodesService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getPage()
  }



  getPage(pageNumber?: string) {
    this.service.getAll(pageNumber || "1").subscribe(x => {
      this.episodes = x.results
      this.prev = x.info.prev?.split('page=').pop()
      this.next = x.info.next?.split('page=').pop()
    })
  }
}
