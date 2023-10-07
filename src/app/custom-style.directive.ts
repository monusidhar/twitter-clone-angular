import { Directive, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[twitterCustomStyle]'
})
export class CustomStyleDirective implements OnInit {

  constructor(private renderer: Renderer2, private elementRef: ElementRef) { }

  ngOnInit(){
    this.renderer.setStyle(this.elementRef.nativeElement, 'color', 'red');
  }

}
