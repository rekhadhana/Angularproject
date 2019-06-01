import { Directive , ElementRef , OnInit,Input,HostListener,HostBinding} from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective implements OnInit {

@Input() defaultbgColor:string='lightgrey';
@Input() highlightColor:string;
@HostBinding('style.backgroundColor') backgroundColor=this.defaultbgColor;
constructor(private eleRef:ElementRef){

}
 ngOnInit(){
   this.eleRef.nativeElement.style.backgroundColor ='red';
 }
 @HostListener('mouseenter') mouseenter(eventData:Event){
   this.backgroundColor=this.highlightColor;
 }
 @HostListener('mouseleave') mouseout(eventData:Event){
   this.backgroundColor=this.defaultbgColor;
 }
 

}
