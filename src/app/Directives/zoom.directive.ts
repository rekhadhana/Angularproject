import { Directive,ElementRef,OnInit,HostListener,HostBinding,Input,ViewChild} from '@angular/core';

@Directive({
  selector: '[appZoom]'
})
export class ZoomDirective implements OnInit{
@Input() zoomscale:string='scale(1,1)';
@Input() minusscale:string;
// @ViewChild('contenInput') contentmargine:ElementRef;


@HostBinding('style.transform') scalor=this.zoomscale;
@HostBinding('style.backgrundColor') bgColor:string='grey';// @HostBinding('style.margin') disp:string;


  constructor(private eleRef:ElementRef) { }
ngOnInit(){
this.eleRef.nativeElement.style.transform='scale(1,0.7)';


}
@HostListener('mouseenter') mouseover(eventData:Event){
this.scalor=this.zoomscale;
// this.contentmargine.nativeElement.style.margin='20px';
// this.contentmargine.nativeElement.style.backgrundColor=this.bgColor;

}
@HostListener('mouseleave') mouseleave(eventData:Event){
  this.scalor=this.minusscale;
    // this.disp='top(20px)';

}
}
