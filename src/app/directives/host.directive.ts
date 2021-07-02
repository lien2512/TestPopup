import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[popup]',
})
export class PopupHostDirective {
  constructor(public viewContainerRef: ViewContainerRef) { }
}
