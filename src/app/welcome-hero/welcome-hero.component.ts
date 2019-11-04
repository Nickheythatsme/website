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
      transition(':enter', [
        style({ transform: 'translateX(-100%)' }),
        animate('0.5s')
      ]),
      transition(':leave', [
        animate('0.2s'),
        style({ transform: 'translateX(100%)' }),
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
