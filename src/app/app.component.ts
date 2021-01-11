import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = $localize`:@@app.title: translateMe-App`;
  minutes = 1;
  gender = 'male';
}
