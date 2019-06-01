import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import { ShoppingListComponent } from './shopping-list.component';
import { ShoppingEditComponent } from './shopping-edit/shopping-edit.component';

@NgModule({
declarations:[
    ShoppingListComponent,
    ShoppingEditComponent
],
imports:[
CommonModule,
FormsModule
],
// exports:[FormsModule]
})
export class ShoppingListModule{}