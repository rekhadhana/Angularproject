import { Component, OnInit ,OnDestroy} from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import{ShoppingListService} from './shopping-list.service';
import{Subscription}from 'rxjs';
@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit,OnDestroy {
ingeredients:Ingredient[];
private subscription:Subscription;
//initial it is undefined bcz we get it from service
//provide shopping list service in app.modul so we can use in recipe

//injecting our service
  constructor(private slService:ShoppingListService) { }

  ngOnInit() {
    //initialization can be done in ngOninit
    this.ingeredients=this.slService.getIngredients();
  this.subscription=this.slService.ingredientsChanged.subscribe(
    (ingredient:Ingredient[])=>{
      this.ingeredients=ingredient;
    }
  )
  }
  // onIngredientAdded(ingredient:Ingredient){
  //   this.ingeredients.push(ingredient);
  // }
  onEdittItem(index:number){
    this.slService.startedEditing.next(index);

  }


  ngOnDestroy(){
   this.subscription.unsubscribe();
  }

}
