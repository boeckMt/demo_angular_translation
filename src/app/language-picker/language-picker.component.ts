import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-language-picker',
  templateUrl: './language-picker.component.html',
  styleUrls: ['./language-picker.component.css']
})
export class LanguagePickerComponent {

  constructor(private translate: TranslateService) { }

  useLang(langCode: string) {
    this.translate.use(langCode);
  }

}
