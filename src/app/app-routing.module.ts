import { NgModule } from '@angular/core';
import { Routes, RouterModule ,PreloadAllModules} from '@angular/router';
import {RecipesComponent} from './recipes/recipes.component';

import {ShoppingListComponent} from './shopping-list/shopping-list.component';
import { RecipeStartComponent } from './recipes/recipe-start/recipe-start.component';
import {RecipeDetailComponent} from './recipes/recipe-detail/recipe-detail.component';
import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';
import {AuthGuardService } from './auth/auth-guard.service';
import { HomeComponent } from './core/home/home.component';

import{PageNOtFoundComponent} from './page-not-found/page-not-found.component';


const routes: Routes = [

  
  {
    path:'',
    component:HomeComponent,
    pathMatch:'full'

  },
  {
    path:'recipes',loadChildren:'./recipes/recipes.module#RecipesModule'
  },
  {
    path:'shopping-list',
    component:ShoppingListComponent
    },
   
    {
      path:'**',
      component:PageNOtFoundComponent
    }
    // ,{
    //   path:'**',
    //   redirectTo:'/not-found'
    // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{preloadingStrategy:PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
