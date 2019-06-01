import { Component, OnInit } from '@angular/core';
import {Recipe} from './recipe.model';
// import { HighlightDirective } from '../highlight.directive';
@Component({
  selector: 'app-recipes',
  // directives: [HighlightDirective],
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {
 selectedRecipe:Recipe;
//  initially this is undifined i will assign once the recipeWasSelected event occures
//inject recipeservice
  constructor() { }

  ngOnInit() {
    //i can setup my listner
  //  this.recipeService.recipeSelected
  //  .subscribe(
  //     (recipe:Recipe)=>{
  //       this.selectedRecipe=recipe;
  //      }
  //  );
  }

}
