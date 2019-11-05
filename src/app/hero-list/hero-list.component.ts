import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.scss']
})
export class HeroListComponent implements OnInit {
  welcomeHero = {
    title: 'Welcome',
    lead: 'We\'ll post any updates and details to this site.'
  };
  venueHero = {
    title: 'Venue Info',
    lead: 'The wedding will be held at Nick\'s parent\'s house.',
    description: 'at 123 Fake St. Denver, CO'
  };

  constructor() { }

  ngOnInit() {
  }

}
