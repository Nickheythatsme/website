import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [
    './app.component.scss',
  ]
})
export class AppComponent {
  title = 'website';
  imageSrcs = [
    'https://i.imgur.com/8fhTLp0.jpg',
    'https://i.imgur.com/2PewqYS.jpg',
    'https://i.imgur.com/0MlFKkk.jpg',
    'https://i.imgur.com/KKuQh6o.jpg',
    'https://i.imgur.com/ijWz2wx.jpg',
  ];

}
