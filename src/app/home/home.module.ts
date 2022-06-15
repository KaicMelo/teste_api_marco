import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { PoTableModule, PoButtonModule, PoFieldModule, PoModule } from '@po-ui/ng-components';
import { HomeRoutingModule } from './home-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    PoModule,
    HomeRoutingModule,
    PoTableModule,
    PoButtonModule,
    HttpClientModule,
    PoFieldModule,
    ReactiveFormsModule
  ]
})
export class HomeModule { }
