import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import{BrowserAnimationsModule} from '@angular/platform-browser/animations';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import{sharedModule}from '././shared/shared.module';
import{ShoppingListModule}from './shopping-list/shopping-list.module'
import{AuthModule} from './auth/auth.module';
import{CoreModule} from './core/core.module'
import{PageNOtFoundComponent} from './page-not-found/page-not-found.component';


@NgModule({
  declarations: [
    AppComponent,

    PageNOtFoundComponent,
  ],
  imports: [
    BrowserModule,
  HttpClientModule,
  sharedModule,
  ShoppingListModule,
  AuthModule ,
  CoreModule,
  AppRoutingModule,
  BrowserAnimationsModule

  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
