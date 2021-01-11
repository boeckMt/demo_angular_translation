import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TranslatedCompComponent } from './components/translated-comp/translated-comp.component';

@NgModule({
  declarations: [
    AppComponent,
    TranslatedCompComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
