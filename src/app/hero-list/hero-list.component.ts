import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.scss']
})
export class HeroListComponent implements OnInit {
  accomodationHero = {
    title: 'Accomodations',
    lead: 'For guests who need to travel'
  };
  registryHero = {
    title: 'Registry Information',
    lead: null
    }
  venueHero = {
    title: 'Venue Info',
    lead: null,
  };


  constructor() { }

  ngOnInit() {
  }

}
