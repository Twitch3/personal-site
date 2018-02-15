import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { JournalComponent } from './routes/journal/journal.component';
import { LandingComponent } from './routes/landing/landing.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { RecipesComponent } from './routes/recipes/recipes.component';
import { DeveloperPlaygroundComponent } from './routes/developer-playground/developer-playground.component';
import { AboutComponent } from './routes/about/about.component';
import { FooterComponent } from './components/footer/footer.component';
import { SlideComponent } from './components/carousel/components/slide/slide.component';
import { LargeContentBlockComponent } from './components/large-content-block/large-content-block.component';
import { RecipeDataService } from './routes/recipes/services/recipe-data.service';
import { ApiService } from './services/api.service';
import { RecipeHeaderComponent } from './routes/recipes/components/recipe-header/recipe-header.component';
import { LoadingSpinnerComponent } from './components/loading-spinner/loading-spinner.component';
import { RecipeListComponent } from './routes/recipes/routes/recipe-list/recipe-list.component';
import { RecipeSearchComponent } from './routes/recipes/routes/recipe-list/components/recipe-search/recipe-search.component';


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
    LargeContentBlockComponent,
    RecipeHeaderComponent,
    LoadingSpinnerComponent,
    RecipeListComponent,
    RecipeSearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule
  ],
  providers: [
    ApiService,
    RecipeDataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
