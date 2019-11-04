import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.scss']
})
export class HeroListComponent implements OnInit {
  heros = [
    {
      title: 'Haley and Nick\'s Wedding',
      lead: 'Welcome to Haley and Nick\'s wedding. This site shows event details and updates from the bride and groom.',
      description: 'Come back here regularly to see wedding updates.'
    },
    {
      title: 'Venue',
      lead: 'The wedding will be held ',
      description: 'at 123 Fake St. Denver, CO'
    }
];

  constructor() { }

  ngOnInit() {
  }

}
