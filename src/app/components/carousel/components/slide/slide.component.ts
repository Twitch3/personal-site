import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-slide',
  templateUrl: './slide.component.html',
  styleUrls: ['./slide.component.scss']
})
export class SlideComponent implements OnInit {

  @Input()
  imageURL: string;

  @Input()
  routerLink: string;

  @Input()
  preText: string;

  @Input()
  mainText: string;

  @Input()
  subText: string;

  @Input()
  numSlides: number;

  public fullImageURL: string;
  public cursorType: string;

  constructor(private router: Router) { }

  ngOnInit() {
    if (this.imageURL) {
      this.fullImageURL = 'url(' + this.imageURL + ')';
    }
    if (this.routerLink) {
      this.cursorType = 'pointer';
    }
  }

  public navigateToLink(): void {
    if (this.routerLink) {
      this.router.navigate([this.routerLink]);
    }
  }

}
