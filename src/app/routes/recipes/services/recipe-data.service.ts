import { Injectable } from '@angular/core';
import { ApiService } from '../../../services/api.service';
@Injectable()
export class RecipeDataService {

  private recipeData: any[] = [];

  constructor(private apiService: ApiService) { }

  public getRecipes(): Promise<any> {
    return this.apiService.getData('/assets/api/recipes/recipes.json');
  }

}
