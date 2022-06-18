import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardViewComponent } from './card-view.component';



@NgModule({
  declarations: [
    CardViewComponent
  ],
  exports:[
    CardViewComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CardViewModule { }
