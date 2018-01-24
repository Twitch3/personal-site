import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-slide',
  templateUrl: './slide.component.html',
  styleUrls: ['./slide.component.scss']
})
export class SlideComponent implements OnInit {

  @Input()
  imageURL: string;

  @Input()
  preText: string;

  @Input()
  mainText: string;

  @Input()
  subText: string;

  @Input()
  numSlides: number;

  public fullImageURL: string;

  constructor() { }

  ngOnInit() {
    if (this.imageURL) {
      this.fullImageURL = 'url(' + this.imageURL + ')';
    }
  }

}
