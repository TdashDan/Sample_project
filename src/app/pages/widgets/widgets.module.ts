import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AccordionModule } from 'ngx-bootstrap/accordion';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

import { WidgetsComponent } from './widgets.component';

const routes: Routes = [
  { path: '', component: WidgetsComponent }
];

@NgModule({
  declarations: [
    WidgetsComponent
  ],
  imports: [
    AccordionModule.forRoot(),
    ButtonsModule.forRoot(),
    TabsModule.forRoot(),
    BsDropdownModule.forRoot(),
    RouterModule.forChild(routes)
  ]
})
export class WidgetsModule {}
