import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

  public landingSlides: any[] = [
    {
      preText: 'Hello There',
      mainText: 'Welcome',
      subText: 'This site is a stomping ground for my personal projects, scribblings, recipes, and code samples. Feel free to poke around and explore! There\'s a little something for everyone.'
    },
    {
      mainText: 'Recipes',
      subText: 'A collection of my personal and family recipes.',
      imageURL: './assets/images/burger.jpg',
      routerLink: '/recipes'
    },
    {
      mainText: 'Journel',
      subText: 'An archive of a few things I\'ve written.',
      imageURL: './assets/images/brachydios.png',
      routerLink: '/journal'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
