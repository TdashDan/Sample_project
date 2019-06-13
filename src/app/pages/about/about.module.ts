import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SiAboutModule } from '@simpl/marengo-ng';

import { AboutComponent } from './about.component';

const routes: Routes = [
  {path: '', component: AboutComponent}
];

@NgModule({
  declarations: [
    AboutComponent
  ],
  imports: [
    SiAboutModule,
    RouterModule.forChild(routes)
  ]
})
export class AboutModule {}
