import { Component, OnInit } from '@angular/core';
import { HeroContents } from '../foldable-hero/hero-contents';

@Component({
  selector: 'app-welcome-hero',
  templateUrl: './welcome-hero.component.html',
  styleUrls: ['./welcome-hero.component.scss'],
})

export class WelcomeHeroComponent implements OnInit {
  constructor() { }

  ngOnInit() {
  }
}
