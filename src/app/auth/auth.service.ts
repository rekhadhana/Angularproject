import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import{Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  token: string;
  constructor(private router:Router) { }
  
  //method to call to sign a user up
  signupUser(email: string, password: string) {
    firebase.auth().createUserWithEmailAndPassword(email, password).catch(
      error => console.log(error)

    )
  }
  signinUser(email: string, password: string) {
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(
      response => {
        //navigate to root after signin
this.router.navigate(['/']);
        console.log(response);
        // FirebaseInstanceId.getInstance().getToken()
        firebase.auth().currentUser.getIdToken()
          .then(
          (token: string) => this.token = token
          )
      }
      )

      .catch(
      error => console.log(error)

      )
  }

  getToken() {
    firebase.auth().currentUser.getIdToken()
      .then(
      (token: string) => this.token = token
      );
    return this.token;
    //i will not return to finish i will return the token
  }
  isAuthenticated(){
    return this.token!=null;
  }
logout(){
  firebase.auth().signOut();
  //reset the toke
  this.token=null;
}

}
