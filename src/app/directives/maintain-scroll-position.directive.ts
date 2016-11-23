import { Directive, OnInit, ElementRef, Input } from '@angular/core';
import { Observable } from "rxjs/Observable";

@Directive({
  selector: '[appMaintainScrollPosition]'
})
export class MaintainScrollPositionDirective implements OnInit {
  @Input() beforeContentChanges: Observable < any >;
  @Input() contentChanges: Observable < any >;

  element: Element;
  previousScrollHeightMinusTop: number;

  constructor(element: ElementRef) {
    this.element = element.nativeElement;
    this.previousScrollHeightMinusTop = 0;
  }

  ngOnInit(): void {
    this.beforeContentChanges.subscribe(() => {
      console.log('beforeContentChanges');
      this.previousScrollHeightMinusTop = this.element.scrollHeight - this.element.scrollTop;
    });

    this.contentChanges.subscribe(() => {
      console.log('contentChanges');
      this.element.scrollTop = this.element.scrollHeight - this.previousScrollHeightMinusTop;
    });
  }

}
