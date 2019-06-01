// import {Component} from '@angula/core';
import { Component } from '@angular/core';
import{HttpEvent,HttpEventType} from '@angular/common/http';

import{DataStorageService} from '../../shared/data-storage.service';
import {AuthService } from '../../auth/auth.service';

@Component({

    selector: 'app-header',
    templateUrl: './header.component.html'
})
export class HeaderComponent{
   constructor(private dataStorageService:DataStorageService,private authService:AuthService)
   {} 
   onSave(){
      this.dataStorageService.storeRecipe().subscribe(
          (response:HttpEvent<object>)=>{
              console.log(response);
          }
      )
    }

    onFetchData(){
        this.dataStorageService.getRecipe();
    }
    onLogout(){
        this.authService.logout();
    }
    isAuthenticated(){
        return this.authService.isAuthenticated();
    }
}