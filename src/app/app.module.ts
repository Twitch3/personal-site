import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { JournalComponent } from './journal/journal.component';
import { LandingComponent } from './landing/landing.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { RecipesComponent } from './recipes/recipes.component';
import { DeveloperPlaygroundComponent } from './developer-playground/developer-playground.component';
import { AboutComponent } from './about/about.component';
import { FooterComponent } from './components/footer/footer.component';
import { SlideComponent } from './components/carousel/components/slide/slide.component';
import { LargeContentBlockComponent } from './components/large-content-block/large-content-block.component';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    JournalComponent,
    LandingComponent,
    CarouselComponent,
    RecipesComponent,
    DeveloperPlaygroundComponent,
    AboutComponent,
    FooterComponent,
    SlideComponent,
    LargeContentBlockComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
