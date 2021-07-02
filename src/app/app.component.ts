import { Component, HostListener, ComponentRef, ComponentFactoryResolver, ViewChild } from '@angular/core';
import { SkillTooltipComponent } from './skill-tooltip/skill-tooltip.component';
import { PopupHostDirective } from './directives/host.directive';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  basicTable = [
    {
      key: '1',
      name: 'John Brown, John Brown, John Brown, John Brown, New York No. 1 Lake Park',
      age: 32,
      code: 'CDL Management Service Pte. Ltd.',
      address: '07/06/2021'
    },
    {
      key: '2',
      name: 'Oim Green, New York No. 1 Lake Park, Jim Green Jim GreenJim Green ',
      age: 42,
      code: 'Panasonic Company ABC',
      address: '07/06/2021'
    },
    {
      key: '3',
      name: 'Noe Black Sidney No. 1 Lake Park, Sidney No. 1 Lake Park, Sidney No. 1 Lake Park',
      age: 32,
      code: 'Noe Black Sidney No. 1 Lake Park, Sidney No',
      address: '07/06/2021'
    },
    {
      key: '4',
      name: 'Black Black Sidney No. 1 Lake Park, Sidney No. 1 Lake Park, Sidney No. 1 Lake Park  1 Lake Park, Sidney No. 1 Lake Park',
      age: 32,
      code: 'Black Black Sidney No. 1 Lake Park, Sidney No. 1 Lake Park',
      address: '07/06/2021'
    },
    {
      key: '3',
      name: 'Noe Black Sidney No. 1 Lake Park, Sidney No. 1 Lake Park, Sidney No. 1 Lake Park',
      age: 32,
      code: 'Noe Black Sidney No. 1 Lake Park, Sidney No',
      address: '07/06/2021'
    },
    {
      key: '3',
      name: 'Noe Black Sidney No. 1 Lake Park, Sidney No. 1 Lake Park, Sidney No. 1 Lake Park',
      age: 32,
      code: 'Noe Black Sidney No. 1 Lake Park, Sidney No',
      address: '07/06/2021'
    },
    {
      key: '3',
      name: 'Noe Black Sidney No. 1 Lake Park, Sidney No. 1 Lake Park, Sidney No. 1 Lake Park',
      age: 32,
      code: 'Noe Black Sidney No. 1 Lake Park, Sidney No',
      address: '07/06/2021'
    },
    {
      key: '3',
      name: 'Noe Black Sidney No. 1 Lake Park, Sidney No. 1 Lake Park, Sidney No. 1 Lake Park',
      age: 32,
      code: 'Noe Black Sidney No. 1 Lake Park, Sidney No',
      address: '07/06/2021'
    },
    {
      key: '3',
      name: 'Noe Black Sidney No. 1 Lake Park, Sidney No. 1 Lake Park, Sidney No. 1 Lake Park',
      age: 32,
      code: 'Noe Black Sidney No. 1 Lake Park, Sidney No',
      address: '07/06/2021'
    },
    {
      key: '3',
      name: 'Noe Black Sidney No. 1 Lake Park, Sidney No. 1 Lake Park, Sidney No. 1 Lake Park',
      age: 32,
      code: 'Noe Black Sidney No. 1 Lake Park, Sidney No',
      address: '07/06/2021'
    },
  ];
  skillInf = 'Some additional information'
  currentSkillElement: any;
  private calloutRef: ComponentRef<SkillTooltipComponent>;
  @ViewChild(PopupHostDirective)
    private popupHost: PopupHostDirective;
  constructor(private componentFactoryResolver: ComponentFactoryResolver) { }

  onSkillMouseEnter(event, skill) {
    setTimeout(() => {
      this.currentSkillElement = event.target;
      const currentPosition = this.offset(event.target);
      this.showCallout(skill, currentPosition);
    }, 200)
    

  }
  @HostListener('mouseover', ['$event'])
  onSkillMouseOver(event) {
    debugger;
    let hoverComponent = event.target;
    let inside = false;
    do {
      if (this.calloutRef) {
        if (hoverComponent === this.calloutRef.location.nativeElement || hoverComponent === this.currentSkillElement) {
          inside = true;
        }
      }
      hoverComponent = hoverComponent.parentNode;
    } while (hoverComponent);
    if (inside) {
      console.log('inside');
    } else {
      console.log('outside');
      this.hideCallout();
    }
  }
  private createCallout(data: any): ComponentRef<SkillTooltipComponent> {
    const viewContainer = this.popupHost.viewContainerRef;
    viewContainer.clear();
    const calloutComponentFactory =
      this.componentFactoryResolver.resolveComponentFactory(SkillTooltipComponent);
    const calloutComponentRef = viewContainer.createComponent(calloutComponentFactory);
    calloutComponentRef.instance.data = data;
    return calloutComponentRef;
  }
  showCallout(skill, currentPosition) {
    this.calloutRef = this.createCallout(skill);
    this.calloutRef.instance.styleLeft = currentPosition.left + 560 + 'px';
    this.calloutRef.instance.styleTop = currentPosition.top - 10 + 'px';
  }
  hideCallout() {
    if (this.calloutRef) {
      this.calloutRef.destroy();
      this.calloutRef = null;
    }
  }
  private offset(el) {
    const rect = el.getBoundingClientRect();
    const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return { top: rect.top + scrollTop, left: rect.left + scrollLeft };
  }
}