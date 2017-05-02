import { Directive, ElementRef, HostListener } from '@angular/core';
import { ExpirationDateService } from './expiration-date.service'
@Directive({
  selector: '[exp-date]'
})
export class ExpirationDateDirective {

  // THIS WILL BE FIRED IF SOMEONE CHANGES THE INPUT
  @HostListener('keypress', ['$event'])
  inputChanged(event: any) {
    const digitOnly = /[0-9]+/g;
    let inputChar = event.key;
    let val: string = event.target.value;

    if (digitOnly.test(inputChar) && val.length + 1 < 6) {
      event.target.value = this._expirationDate.inputExpirationDate(event);
    } else {
      event.preventDefault();
    }

  }



  constructor(private el: ElementRef, private _expirationDate: ExpirationDateService) {

  }



}
