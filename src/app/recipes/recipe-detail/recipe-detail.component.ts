import { Component, OnInit,Input } from '@angular/core';
import{ActivatedRoute,Params,Router}from '@angular/router';

import {Recipe} from '../recipe.model';
import{RecipeService} from '../recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
// we have sest it from outside
//  @Input() recipe:Recipe;
//bind it in recipe component in app-recipe-list
 recipe:Recipe;
 id:number;

 
 //inject recipe service,it also has shopinglist service
 constructor(private recipeService:RecipeService,
private route:ActivatedRoute,private router:Router) { }

  ngOnInit() {
    //getting id using snapashop,it only wrk whn the first tm compnent loaded
    // const id=this.route.snapshot.params['id'];
    //_________using params obsservable
    this.route.params.subscribe(
      (params:Params)=>{
this.id=+params['id'];
this.recipe=this.recipeService.getRecipe(this.id);
      }
    );
  }
  onAddToShoppingList(){
this.recipeService.addIngredientsToShoppingList(this.recipe.ingredients);
  }
  onEditRecipe(){
this.router.navigate(['edit'],{relativeTo:this.route});//we dont need id inthis case if we wnt see nxt line
// this.router.navigate(['../',this.id,'edit'],{relativeTo:this.route});//this cmlx route
  }
  onDeleteRecipe(){
    this.recipeService.deleteRecipe(this.id);
    this.router.navigate(['/recipes']);
  }
}
