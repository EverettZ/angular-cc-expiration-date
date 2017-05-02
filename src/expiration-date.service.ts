import { Injectable } from '@angular/core';
import { IExpirationDateFormatter } from './i-expiration-date';

@Injectable()
export class ExpirationDateService implements IExpirationDateFormatter {

  currYear: string;

  constructor() { 
    this.currYear = new Date().getFullYear().toString().substr(-2);
  }
// hi
  inputExpirationDate(event: any) {
    let val = event.target.value || '';
    let result = val;
    let inputChar = event.key;
    let len = val.length;

    let month = val.substr(0, 2) || val;
    let year = val.substr(2, 2) || val.substr(2) || '';

    if (len == 0 && parseInt(inputChar) > 1) {
      result = '0';
    } else if (len == 2) {
      result = result + '/';
    }
    return result

  }

  formatExpirationDate(val: string) {
    val = val.replace(/\D/g, '');
    if (val.length > 4) {
      val = val.substr(0, 4);
    }
    if (val.length == 2 && parseInt(val) > 12) {
      val = '12';
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
    if (val.length > 1) {
      val = val.substr(0, 2) + '/' + val.substr(2);
    }

    return val;
  }
}
