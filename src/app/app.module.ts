import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { TranslateModule } from '@ngx-translate/core';
import { SiNavbarModule, SiFooterModule, SiCardModule, SiCardsModule } from '@simpl/marengo-ng';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './pages';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    TranslateModule.forRoot(),
    SiCardModule,
    SiCardsModule,
    SiNavbarModule,
    SiFooterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
