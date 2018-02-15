import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from './routes/landing/landing.component';
import { JournalComponent } from './routes/journal/journal.component';
import { RecipesComponent } from './routes/recipes/recipes.component';
import { RecipeListComponent } from './routes/recipes/routes/recipe-list/recipe-list.component';
import { DeveloperPlaygroundComponent } from './routes/developer-playground/developer-playground.component';
import { AboutComponent } from './routes/about/about.component';
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
    component: RecipesComponent,
    children: [
      {
        path: '',
        component: RecipeListComponent
      }
    ]
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
