import { NgModule } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  query,
  style,
  animate,
  transition,
} from '@angular/animations';

@Component({
  selector: 'app-welcome-hero',
  templateUrl: './welcome-hero.component.html',
  styleUrls: ['./welcome-hero.component.scss'],
  animations: [
    trigger('buttonInsertRemove', [
      state('open', style({
        height: '200px',
        opacity: 1,
      })),
      state('closed', style({
        height: '0px',
        opacity: 0.5,
        paddingTop: '0px',
        paddingBottom: '0px'
      })),
      transition('open => closed', [
        animate('0.3s')
      ]),
      transition('closed => open', [
        animate('0.3s')
      ])
    ]),
  ],
})
export class WelcomeHeroComponent implements OnInit {
  isOpen = true;
  constructor() { }

  ngOnInit() {
  }

  onClick() {
    this.isOpen = !this.isOpen;
  }

}
