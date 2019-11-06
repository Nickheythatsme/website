import { Component, OnInit } from '@angular/core';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';


@Component({
  selector: 'app-welcome-hero',
  templateUrl: './welcome-hero.component.html',
  styleUrls: ['./welcome-hero.component.scss'],
})

export class WelcomeHeroComponent implements OnInit {

  photoSrc = '';

  constructor(breakpointObserver: BreakpointObserver) {
    const layoutChange = breakpointObserver.observe([
      '(max-width: 550px)'
    ]);
    layoutChange.subscribe(result => {
      if (result.matches) {
        this.useSmallLayout();
      } else {
        this.useLargeLayout();
      }
    });
  }

  ngOnInit() {
  }

  useLargeLayout() {
    this.photoSrc = 'https://wedding-885vz.s3-us-west-2.amazonaws.com/hero-background.jpg';
  }

  useSmallLayout() {
    this.photoSrc = 'https://wedding-885vz.s3-us-west-2.amazonaws.com/hero-background-vertical.jpg';
  }
}
