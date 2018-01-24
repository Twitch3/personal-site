import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {

  public slides: any[] = [];
  public currentSlide: number = 0;

  @Input()
  public slideInterval: number;

  private slideIntervalFunction: any;

  constructor() { }

  ngOnInit() {
    this.slides = [
      { preText: 'Hello There', mainText: 'Welcome', subText: 'This site is a stomping ground for my personal projects and code samples. Feel free to poke around and explore! There\'s a little something for everyone.' },
      { imageURL: './assets/images/brachydios_by_bnaha-d6mz5pr.png' },
      { imageURL: './assets/images/MH3U-Brachydios_Artwork_001.jpg' }
    ];
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
    this.slideIntervalFunction = setInterval(() => { this.carouselTick(); }, this.slideInterval);
  }

}
