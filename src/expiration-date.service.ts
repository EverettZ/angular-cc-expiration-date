import { Injectable } from '@angular/core';

@Injectable()
export class ExpirationDateService {

  private currYear;

  constructor() {
    this.currYear = new Date().getFullYear().toString().substr(-2);
  }

  parseExpDate(val: string) {
    val = val.replace(/\D/g, '');
    if (val.length > 4) {
      val = val.substr(0, 4);
    }
    let month = val.substr(0, 2) || val;
    let year = val.substr(2, 2) || val.substr(2) || '';

    if (month.length === 1 && month[0] !== '0' && month[0] !== '1') {
      month = '0' + month;
    }

    if (year.length > 1 && parseInt(year) < parseInt(this.currYear)) {
      year = this.currYear;
    }

    val = month + year;
    if (val.length > 2) {
      val = val.substr(0, 2) + '/' + val.substr(2);
    }

    return val;
  }
}