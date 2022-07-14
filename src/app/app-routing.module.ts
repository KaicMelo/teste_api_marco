import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadChildren: () => import('./home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'widget',
    loadChildren: () =>
      import('./widget/widget.module').then((m) => m.WidgetModule),
  },
  {
    path: 'versions',
    loadChildren: () =>
      import('./versions/versions.module').then((m) => m.VersionsModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
