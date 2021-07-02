import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SkillTooltipComponent } from './skill-tooltip/skill-tooltip.component';
import { PopupHostDirective } from './directives/host.directive';
@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, PopupHostDirective, SkillTooltipComponent ],
  bootstrap:    [ AppComponent ],
  entryComponents: [ SkillTooltipComponent ]
})
export class AppModule { 
  
}
