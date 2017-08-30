import { Injectable, PipeTransform, Pipe } from '@angular/core';
import { ExpirationDateService } from './expiration-date.service'

@Pipe({
  name: 'expDatePipe'
})
@Injectable()
export class ExpirationDatePipe implements PipeTransform {
  
  constructor(private _expirationDate: ExpirationDateService) { }

  transform(val: string, args: any[] = null): string {
    return this._expirationDate.formatExpiry(val);
  }
}
