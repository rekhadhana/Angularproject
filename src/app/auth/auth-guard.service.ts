import { Injectable } from '@angular/core';
import{CanActivate,ActivatedRouteSnapshot,RouterStateSnapshot} from '@angular/router';
import {AuthService } from '././auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate{

  constructor(private authService:AuthService) { }
  CanActivate(router:ActivatedRouteSnapshot,state:RouterStateSnapshot){
 //if isAuthenticated is oly true then return boolean value
  return this.authService.isAuthenticated();
}
}
