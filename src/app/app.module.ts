import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LanguagePickerComponent } from './language-picker/language-picker.component';

@NgModule({
  declarations: [
    AppComponent,
    LanguagePickerComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
