import { Component } from '@angular/core';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {

  constructor(private route:Router){}


  activePage():string{
    if(this.route.url.includes('character')){
      return 'character'
    }
    else
      return 'episode'
  }
}
