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

  public resetIntervalFunction() {
    clearInterval(this.slideIntervalFunction);
    this.slideIntervalFunction = setInterval(() => { this.carouselTick(); }, this.slideInterval);
  }

  public onHover() {
    clearInterval(this.slideIntervalFunction);
  }

  public onMouseOut() {
    this.resetIntervalFunction();
  }

  public navigateToSlide(index: number) {
    this.currentSlide = index;
    this.resetIntervalFunction();
  }

  public navigateToNextSlide() {
    if (this.currentSlide === this.slides.length - 1) {
      this.currentSlide = 0;
    } else {
      this.currentSlide++;
    }
    this.resetIntervalFunction();
  }

  public navigateToPreviousSlide() {
    if (this.currentSlide === 0) {
      this.currentSlide = this.slides.length - 1;
    } else {
      this.currentSlide--;
    }
    this.resetIntervalFunction();
  }

}
