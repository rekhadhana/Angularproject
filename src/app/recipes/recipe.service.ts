import { Injectable,EventEmitter } from '@angular/core';
import {Recipe} from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import {ShoppingListService} from '../shopping-list/shopping-list.service'
import{Subject} from 'rxjs';
@Injectable()
export class RecipeService {
 
 recipeChanged=new Subject<Recipe[]>();
 
 
  //it will hold some Recipe Data
// recipeSelected=new EventEmitter<Recipe>();
  //as it is a private we cant access this as directly from outside
  private recipes:Recipe[]=[
    //create a new object based on blue pring Recipe bases class
    new Recipe("tasty veg Roll",
    "test description",
    "https://cdn.pixabay.com/photo/2017/10/23/17/59/bread-2881871__340.jpg",
  [new Ingredient('meat',1), new Ingredient('carrot',2),new Ingredient('wheat',1)
]),

  
    new Recipe("Tasty schnitzel","test description2",
    "https://cdn.pixabay.com/photo/2017/07/16/10/43/recipe-2508859_960_720.jpg",
    [new Ingredient('meat',1),new Ingredient('tommoto',2)]),
   new Recipe("Tasty schnitzel","ThirdRecipe Description","https://cdn.pixabay.com/photo/2013/03/13/19/15/italian-93237__340.jpg",
   [new Ingredient('buns',2),new Ingredient('banana',2)]),
   new Recipe('burgr',"Fourth Recipe Description","https://cdn.pixabay.com/photo/2017/10/16/09/01/hamburger-2856548__340.jpg",
   [new Ingredient('meat',1),new Ingredient('carrot',2),new Ingredient('buns',2)])
   ];
   
   
   //to set a new recipe
   setRecipe(recipe:Recipe[]){
      this.recipes=recipe;
      this.recipeChanged.next(this.recipes.slice());
      //we hv to subscribe to this
   }
   
   
   //to return recipes
   getRecipes(){
     return this.recipes.slice();
     //slice will return a new array wich is exact copy of this servie file

   }

//way to get recipe by id/index
getRecipe(index:number){
return this.recipes[index];
}

   //inject shopping list service
   constructor(private slService:ShoppingListService) { }
  
   //methods for adding ingdrnt to shopinglist
   addIngredientsToShoppingList(ingredients:Ingredient[]){
//we need to acces to shoppinglist service
    this.slService.addIngredients(ingredients);
   }


   addRecipe(recipe:Recipe){
    this.recipes.push(recipe);
    //emmit new value
    this.recipeChanged.next(this.recipes.slice());
   }
   updateRecipe(index:number,newRecipe:Recipe){
     this.recipes[index]=newRecipe;
    this.recipeChanged.next(this.recipes.slice());
    
   }
   deleteRecipe(index:number){
     this.recipes.splice(index,1);
     //emit copy of updated one
     this.recipeChanged.next(this.recipes.slice());
   }
}
