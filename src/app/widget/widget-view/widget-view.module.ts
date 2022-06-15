import { PoWidgetModule, PoModule } from '@po-ui/ng-components';
import { WidgetViewComponent } from './widget-view.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [WidgetViewComponent],
  exports: [WidgetViewComponent],
  imports: [CommonModule,PoModule, PoWidgetModule],
})
export class WidgetViewModule {}
