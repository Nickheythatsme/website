import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-image-viewer',
  templateUrl: './image-viewer.component.html',
  styleUrls: ['./image-viewer.component.scss']
})
export class ImageViewerComponent implements OnInit {
  @Input() imageSrcs: [string];
  currentIndex = 0;

  constructor() { }

  ngOnInit() {
  }
  
  nextImage() {
    ++this.currentIndex;
    this.currentIndex = this.currentIndex % this.imageSrcs.length;
  }

  previousImage() {
    --this.currentIndex;
    if (this.currentIndex < 0) {
      this.currentIndex = this.imageSrcs.length - 1;
    }
  }

}
