import { Component, OnInit } from '@angular/core';
import { HeroContents } from '../foldable-hero/hero-contents';

@Component({
  selector: 'app-welcome-hero',
  templateUrl: './welcome-hero.component.html',
  styleUrls: ['./welcome-hero.component.scss'],
})

export class WelcomeHeroComponent implements OnInit {
  contents = {
    title: 'Haley and Nick\'s Wedding',
    lead: 'Welcome to Haley and Nick\'s wedding. This site shows event details and updates from the bride and groom.',
    description: 'Come back here regularly to see wedding updates.'
  };

  constructor() { }

  ngOnInit() {
  }
}
