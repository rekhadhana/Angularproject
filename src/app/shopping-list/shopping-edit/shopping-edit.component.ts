import { Component,ViewChild, OnInit, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';


@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
@ViewChild('f') slForm:NgForm;
  subscription: Subscription;
  editMode=false;
  editedItemIndex:number;
  editedItem:Ingredient;
  //inject service
  constructor(private slService: ShoppingListService) { }

  ngOnInit() {
    //listen to stertedediting
    this.subscription = this.slService.startedEditing.subscribe(
    (index:number)=>{
      this.editedItemIndex=index;
this.editMode=true;
this.editedItem=this.slService.getIngredient(index);
this.slForm.setValue({
  name:this.editedItem.name,
  amount:this.editedItem.amount
})
    }
    );
  }
  onAddItem(form: NgForm) {
    //const we are not going change this value future
    const value = form.value;
    const newIngredient = new Ingredient(value.name, value.amount);
   if(this.editMode){
     this.slService.updateIngredient(this.editedItemIndex,newIngredient)
   }else{
    this.slService.addIngreedient(newIngredient);
   }
   this.editMode=false;
   form.reset();
  }
  onClear(){
this.slForm.reset();
this.editMode=false;
  }
  onDelete(){
    this.slService.deleteIngredient(this.editedItemIndex);
    this.onClear();
  }

 ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
