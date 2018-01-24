import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { JournalComponent } from './journal/journal.component';
import { RecipesComponent } from './recipes/recipes.component';
import { DeveloperPlaygroundComponent } from './developer-playground/developer-playground.component';
import { AboutComponent } from './about/about.component';
const routes: Routes = [
  {
    path: '',
    component: LandingComponent
  },
  {
    path: 'journal',
    component: JournalComponent
  },
  {
    path: 'recipes',
    component: RecipesComponent
  },
  {
    path: 'developer-playground',
    component: DeveloperPlaygroundComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
