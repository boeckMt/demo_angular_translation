import { DecimalPipe } from '@angular/common';
import { LOCALE_ID } from '@angular/core';
import { Inject } from '@angular/core';
import { Component } from '@angular/core';
import { Router, Routes } from '@angular/router';
import { routes } from './app-routing.module';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = $localize`:@@app.title: translateMe-App`;
  minutes = 1;
  gender = 'male';
  today = new Date();
  decimalNumber = 1000500.30;
  price = 5000;
  percentNumber = 1.2;
  formatedNumber;
  formatedNumberWhithDecimalPipe;

  routes: Routes = this.router.config.filter(r => r.data);

  constructor(@Inject(LOCALE_ID) public locale: string, public router: Router) {
    const decimalPipe = new DecimalPipe(this.locale);

    this.formatedNumber = new Intl.NumberFormat('de', { style: 'currency', currency: 'EUR' }).format(this.decimalNumber);

    this.formatedNumberWhithDecimalPipe = decimalPipe.transform(this.decimalNumber, '1.1-1');
  }


}
