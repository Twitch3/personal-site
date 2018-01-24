import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-large-content-block',
  templateUrl: './large-content-block.component.html',
  styleUrls: ['./large-content-block.component.scss']
})
export class LargeContentBlockComponent implements OnInit {

  @Input()
  imageURL: string;

  @Input()
  mainText: string;

  @Input()
  subText: string;

  public fullImageURL: string;

  constructor() { }

  ngOnInit() {
    if (this.imageURL) {
      this.fullImageURL = 'url(' + this.imageURL + ')';
    }
  }

}
