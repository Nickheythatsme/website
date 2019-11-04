import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { HeroContents } from './hero-contents';
import {
  trigger,
  state,
  query,
  style,
  animate,
  transition,
} from '@angular/animations';

@Component({
  selector: 'app-foldable-hero',
  templateUrl: './foldable-hero.component.html',
  styleUrls: ['./foldable-hero.component.scss'],
  animations: [
    trigger('buttonInsertRemove', [
      state('open', style({
        opacity: 1,
      })),
      state('closed', style({
        height: '0px',
        opacity: 0,
      })),
      transition('open => closed', [
        animate('0.2s')
      ]),
      transition('closed => open', [
        animate('0.2s')
      ])
    ]),
  ],
})
export class FoldableHeroComponent implements OnInit {
  @Input() heroContents: HeroContents;
  isOpen = true;

  constructor() { }

  ngOnInit() {

  }

  onClick() {
    this.isOpen = !this.isOpen;
  }

}

