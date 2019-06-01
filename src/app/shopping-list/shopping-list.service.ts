import { Injectable, EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import{Subject}from 'rxjs';


// @Injectable({
//   providedIn: 'root'
// })
export class ShoppingListService {
  ingredientsChanged = new Subject<Ingredient>();
startedEditing=new Subject<number>();
  private ingeredients: Ingredient[] = [
    new Ingredient('apples', 5),
    new Ingredient('babana', 10)
  ];
  //way to get ingerdient
  getIngredients() {
    return this.ingeredients.slice()
  }
getIngredient(index:number){
  return this.ingeredients[index];
}

  addIngreedient(ingerdient: Ingredient) {
    this.ingeredients.push(ingerdient);
    this.ingredientsChanged.next(this.ingeredients.slice());
  }
  //methods to get ingredients from recipe-detail
  addIngredients(ingredients: Ingredient[]) {
    //     for (let ingerdient of ingredients) {
    // this.addIngredients(ingerdient);

    //directly add all ingdts in one go thn emit evnt
    this.ingeredients.push(...ingredients);
    this.ingredientsChanged.next(this.ingeredients.slice());
    //(...)is spread opreator in type scipt,which can sprd our ingredients
    //into a list of single ingredits
  }
  updateIngredient(index:number, newIngredient:Ingredient){
    this.ingeredients[index]=newIngredient;
    this.ingredientsChanged.next(this.ingeredients.slice());
  }
  deleteIngredient(index:number){
    this.ingeredients.splice(index,1);
    this.ingredientsChanged.next(this.ingeredients.slice());
  }
constructor() { }

}
