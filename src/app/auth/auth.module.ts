import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';


import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import{AuthroutingModule}from './auth-routing.module';
@NgModule({
declarations:[
    SigninComponent,
    SignupComponent

],
imports:[
CommonModule,
FormsModule,
AuthroutingModule

],

})
export class AuthModule{}