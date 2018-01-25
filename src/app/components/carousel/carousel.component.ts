import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {

  public currentSlide: number = 0;

  @Input()
  public slideInterval: number;

  @Input()
  public slides: any[];

  private slideIntervalFunction: any;

  constructor() { }

  ngOnInit() {
    if (!this.slideInterval) {
      this.slideInterval = 5000;
    }
    this.slideIntervalFunction = setInterval(() => { this.carouselTick(); }, this.slideInterval);
  }

  public carouselTick() {
    if (this.currentSlide < this.slides.length - 1) {
      this.currentSlide++;
    } else {
      this.currentSlide = 0;
    }
  }

  public onHover() {
    clearInterval(this.slideIntervalFunction);
  }

  public onMouseOut() {
    clearInterval(this.slideIntervalFunction);
    this.slideIntervalFunction = setInterval(() => { this.carouselTick(); }, this.slideInterval);
  }

  public navigateToSlide(index: number) {
    this.currentSlide = index;
    clearInterval(this.slideIntervalFunction);
    this.slideIntervalFunction = setInterval(() => { this.carouselTick(); }, this.slideInterval);
  }

}
