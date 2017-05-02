import { Directive, ElementRef, HostListener } from '@angular/core';
import { ExpirationDateService } from './expiration-date.service'
@Directive({
  selector: '[exp-date]'
})
export class ExpirationDateDirective {

  // THIS WILL BE FIRED IF SOMEONE CHANGES THE INPUT
  @HostListener('keypress', ['$event'])
  inputChanged(event) {
    const digitOnly = /[0-9]+/g;
    let inputChar = event.key;
    let val: string = event.target.value;

    if (!digitOnly.test(inputChar) || val.length > 5) {
      // invalid character, prevent input
      event.preventDefault()
    } else {
      event.target.value = this._expirationDate.formatExpirationDate(event.target.value);
    }
  }



  constructor(private el: ElementRef, private _expirationDate: ExpirationDateService) {

  }



}
