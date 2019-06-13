import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';

import {
  SiBreadcrumbModule,
  SiEmptyListModule,
  SiNavbarModule,
  SiSearchBarModule,
  SiStatusBarModule,
  SiTreeViewModule,
} from '@simpl/marengo-ng';

import { ObjectViewComponent } from './object-view.component';

const routes: Routes = [
  { path: '**', component: ObjectViewComponent }
];

@NgModule({
  declarations: [
    ObjectViewComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    SiBreadcrumbModule,
    SiEmptyListModule,
    SiNavbarModule,
    SiSearchBarModule,
    SiStatusBarModule,
    SiTreeViewModule,
    RouterModule.forChild(routes)
  ]
})
export class ObjectViewModule {}
