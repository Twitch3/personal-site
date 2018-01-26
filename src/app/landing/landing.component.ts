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
      subText: 'This site is a stomping ground for my personal projects, scribblings, recipes, and code samples. Feel free to poke around and explore! There\'s a little something for everyone.',
      imageURL: './assets/images/slate.jpg'
    },
    {
      mainText: 'Journel',
      subText: 'An archive of a few things I\'ve written.',
      imageURL: './assets/images/brachydios.png',
      routerLink: '/journal'
    },
    {
      mainText: 'Recipes',
      subText: 'A collection of my personal and family recipes.',
      imageURL: './assets/images/burger.jpg',
      routerLink: '/recipes'
    },
    {
      mainText: 'Developer Playground',
      subText: 'Here you can find a few examples of my side projects that I\'ve coded over the years.' ,
      imageURL: './assets/images/dev-playground.png',
      routerLink: '/recipes'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
