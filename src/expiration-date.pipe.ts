import { Injectable, PipeTransform, Pipe } from '@angular/core';

@Pipe({
  name: 'expDatePipe'
})
@Injectable()
export class ExpirationDatePipe implements PipeTransform {
  transform(val: string, args: any[] = null): string {
    val = val.replace(/\D/g, '');
    if (val.length > 4) {
      val = val.substr(0, 4);
    }
    if (val.length > 2) {
      val = val.substr(0, 2) + '/' + val.substr(2);
    }
    return val;
  }
}
