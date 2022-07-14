import { HttpClientModule } from '@angular/common/http';
import { VersionsRoutingModule } from './version-routing.module';
import { VersionsComponent } from './versions.component';
import { PoModule, PoTabsModule, PoTableModule } from '@po-ui/ng-components';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    VersionsComponent
  ],
  exports: [
    VersionsComponent
  ],
  imports: [
    CommonModule,
    VersionsRoutingModule,
    HttpClientModule,
    PoTabsModule,
    PoTableModule,
    PoModule
  ]
})
export class VersionsModule { }
