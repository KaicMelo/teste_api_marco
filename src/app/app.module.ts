import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PoButtonModule, PoDynamicModule, PoFieldModule, PoModule, PoTableModule } from '@po-ui/ng-components';
import { RouterModule } from '@angular/router';
import { PoTemplatesModule } from '@po-ui/ng-templates';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    PoModule,
    RouterModule.forRoot([]),
    PoTemplatesModule,
    PoDynamicModule,
    HttpClientModule,
    ReactiveFormsModule,
    PoFieldModule,
    PoButtonModule,
    PoTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
