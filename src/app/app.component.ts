import { Component,OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  ngOnInit(){
    firebase.initializeApp({
      apiKey:"AIzaSyDqCi7vHzvySWqI52JOWz2XeeDIoafJ6IE",//copy web api form firebase
      authDomain:"ng-recipe-book-52387.firebaseapp.com"//copyproject id  form firebase
    })
  }
}
