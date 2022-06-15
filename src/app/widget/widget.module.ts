import { WidgetViewModule } from './widget-view/widget-view.module';
import { WidgetRoutingModule } from './widget-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WidgetComponent } from './widget.component';
import { PoInfoModule, PoWidgetModule } from '@po-ui/ng-components';

@NgModule({
  declarations: [
    WidgetComponent
  ],
  imports: [
    CommonModule,
    WidgetRoutingModule,
    PoWidgetModule,
    WidgetViewModule,
    PoInfoModule
  ]
})
export class WidgetModule { }
