import { Component, OnInit } from '@angular/core';
import{trigger,state,style,transition,animate,keyframes} from '@angular/animations';
 @Component({
  selector: 'app-home',
  template: `<img [@myAwesomeAnimation]="state" (click)="animateMe()" src="assets/logo.PNG" alt="RecipePoint">
 
  `,
  styles: [`img{
    position:absolute;
    top:25%;
    left:35%;
    width:200px;
    background:lightgray;
    margin:100px auto;
    content-align:center;
    padding:20px;
    font-size:1.5em;
  }`],
  animations:[
    trigger('myAwesomeAnimation',[
      state('small',style({
        transform:'scale(1)',

      })),
      state('large',style({
      transform:'scale(2)',
      })),
      transition('small<=>large',animate('4000ms ease',keyframes([
        style({opacity:0,transform:'translateY(-75%)',offset:0}),
        style({opacity:1,transform:'translateY(100px)',offset:0.5}),
        style({opacity:2,transform:'translateY(0)',offset:1}),
        
      ]))),
    ]),
  ]
})
export class HomeComponent implements OnInit {
state:string='small';
animateMe(){
  this.state=(this.state==='small'? "large":"small");
}
  constructor() { }

  ngOnInit() {
  }

}
