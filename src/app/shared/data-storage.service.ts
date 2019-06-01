import { Injectable } from '@angular/core';
import { HttpClient ,HttpParams} from '@angular/common/http';

import { RecipeService } from '../recipes/recipe.service';
import { Recipe } from '../recipes/recipe.model';
import { map } from 'rxjs/operators';;
import {AuthService } from '../auth/auth.service';


@Injectable({
  providedIn: 'root'
})
export class DataStorageService {

  constructor(private http: HttpClient, private recipeService: RecipeService,private authService:AuthService) { }
  storeRecipe() {
    const token=this.authService.getToken();
    
    return this.http.put("https://ng-recipe-book-52387.firebaseio.com/recipes.json", this.recipeService
      .getRecipes(),{observe:'body',
    params:new HttpParams().set('auth',token)});
  }
  getRecipe() {
   const token=this.authService.getToken();
    this.http.
      get<Recipe[]>("https://ng-recipe-book-52387.firebaseio.com/recipes.json?auth="+token,{observe:'body',responseType:'json'})
      .pipe(map(
      (recipes) => {
        for (let recipe of recipes) {
          //to check ingredients r thr or not
          if (!recipe['ingredients']) {
            recipe['ingredients'] = [];
          }
        }
        return recipes
      }
      ))
      .subscribe((recipes:Recipe[])=>{
        this.recipeService.setRecipe(recipes);
      })
  }

}

