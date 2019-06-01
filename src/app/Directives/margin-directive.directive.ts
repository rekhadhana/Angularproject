import { Directive,Input,ElementRef,HostListener,HostBinding } from '@angular/core';

@Directive({
  selector: '[appMarginDirective]'
})
export class MarginDirectiveDirective {
  @HostBinding('style.display') disp:string;
  
  

  constructor(private eleRef:ElementRef) { }
  ngOnInit(){
    this.eleRef.nativeElement.style.diplay='block';
    
  }
  @HostListener('mouseenter') mouseover(eventData:Event){
    this.disp='none';
    
  }
  @HostListener('mouseleave') mouseleave(eventData:Event){
    this.disp='block';
    
  }
}