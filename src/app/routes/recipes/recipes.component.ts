import { Component, OnInit } from '@angular/core';
import { RecipeDataService } from './services/recipe-data.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss']
})
export class RecipesComponent implements OnInit {

  constructor(private recipeDataService: RecipeDataService) { }

  ngOnInit() {
    this.recipeDataService.getRecipes()
    .then(res => {
      console.log(res);
    });
  }

}
