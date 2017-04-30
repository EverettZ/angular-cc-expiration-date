import { Directive, ElementRef, HostListener } from '@angular/core';
import { ExpirationDateService } from './expiration-date.service'
@Directive({
  selector: '[exp-date]'
})
export class ExpirationDateDirective {

  // THIS WILL BE FIRED IF SOMEONE CHANGES THE INPUT
  @HostListener('keyup', ['$event'])
  inputChanged(event) {
    if (event.target.value) {
      event.target.value = this._expirationDate.parseExpDate(event.target.value);
    }
  }

  constructor(private el: ElementRef, private _expirationDate: ExpirationDateService) {

  }



}