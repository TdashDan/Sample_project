import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LandingComponent } from './pages';

const routes: Routes = [
  {
    path: 'landing',
    component: LandingComponent,
  },
  {
    path: 'about',
    loadChildren: 'src/app/pages/about/about.module#AboutModule'
  },
  {
    path: 'widgets',
    loadChildren: 'src/app/pages/widgets/widgets.module#WidgetsModule'
  },
  {
    path: 'objectView',
    loadChildren: 'src/app/pages/object-view/object-view.module#ObjectViewModule'
  },
  {
    path: '**',
    redirectTo: 'landing'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
