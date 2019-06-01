import { NgModule } from '@angular/core';
import { AppRoutingModule } from '../app-routing.module';
import{CommonModule} from '@angular/common'

import { HomeComponent } from './home/home.component';
import {HeaderComponent } from './header/header.component';
import{sharedModule}from '../shared/shared.module';
import{ShoppingListService} from '../shopping-list/shopping-list.service';
import{RecipeService}from '../recipes/recipe.service';
import{DataStorageService} from '../shared/data-storage.service';
import {AuthService } from '../auth/auth.service';




@NgModule({
    declarations:[HomeComponent,HeaderComponent],
    imports:[
        CommonModule,
        sharedModule,
        AppRoutingModule,
        
    ],
    exports:[AppRoutingModule,HeaderComponent],
    providers:[ShoppingListService,
        RecipeService,
        DataStorageService,
        AuthService]
})
export class CoreModule{}