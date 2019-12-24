import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.scss']
})
export class HeroListComponent implements OnInit {
  accomadationHero = {
    title: 'Accomadations',
    lead: 'List of possible accomadations for guests'
  };
  registryHero = {
    title: 'Registry Information',
    lead: 'We\'re registered at Amazon, and are accepting Venmo as well as checks.',
  }
  venueHero = {
    title: 'Venue Info',
    lead: 'The wedding will be held at Nick\'s parent\'s house.',
  };


  constructor() { }

  ngOnInit() {
  }

}
