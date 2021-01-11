import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TranslatedCompComponent } from './components/translated-comp/translated-comp.component';
import { AppRoutingModule } from './app-routing.module';
import { StartComponent } from './route-components/start/start.component';
import { Route1Component } from './route-components/route1/route1.component';

@NgModule({
  declarations: [
    AppComponent,
    TranslatedCompComponent,
    StartComponent,
    Route1Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
