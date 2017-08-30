import { Injectable } from '@angular/core';
import { IExpirationDateFormatter } from './i-expiration-date';

@Injectable()
export class ExpirationDateService implements IExpirationDateFormatter {

  constructor() { }

  hasTextSelected(target) {
    return target.selectionStart !== null && target.selectionStart !== target.selectionEnd;
  }

  restrictExpiry(key, target) {
    let digit,
      value;
    digit = String.fromCharCode(key);
    if (!/^\d+$/.test(digit) || this.hasTextSelected(target)) {
      return false;
    }
    value = `${target.value}${digit}`.replace(/\D/g, '');

    return value.length > 6;
  }

  replaceFullWidthChars(str) {
    if (str === null) {
      str = '';
    }

    let chr,
      idx,
      fullWidth = '\uff10\uff11\uff12\uff13\uff14\uff15\uff16\uff17\uff18\uff19',
      halfWidth = '0123456789',
      value = '',
      chars = str.split('');

    for (let i = 0; i < chars.length; i++) {
      chr = chars[i];
      idx = fullWidth.indexOf(chr);
      if (idx > -1) {
        chr = halfWidth[idx];
      }
      value += chr;
    }
    return value;
  }

  formatExpiry(expiry) {
    let parts = expiry.match(/^\D*(\d{1,2})(\D+)?(\d{1,4})?/),
      mon,
      sep,
      year;

    if (!parts) {
      return '';
    }

    mon = parts[1] || '';
    sep = parts[2] || '';
    year = parts[3] || '';

    if (year.length > 0) {
      sep = ' / ';
    } else if (sep === ' /') {
      mon = mon.substring(0, 1);
      sep = '';
    } else if (mon.length === 2 || sep.length > 0) {
      sep = ' / ';
    } else if (mon.length === 1 && (mon !== '0' && mon !== '1')) {
      mon = `0${mon}`;
      sep = ' / ';
    }
    return `${mon}${sep}${year}`;
  }

  restrictNumeric(e): boolean {
    let input;
    if (e.metaKey || e.ctrlKey) {
      return true;
    }
    if (e.which === 32) {
      return false;
    }
    if (e.which === 0) {
      return true;
    }
    if (e.which < 33) {
      return true;
    }
    input = String.fromCharCode(e.which);
    return !!/[\d\s]/.test(input);
  }

  safeVal(value, target) {
    let cursor = null,
      last = target.value,
      result: any = null;

    try {
      cursor = target.selectionStart;
    } catch (error) { }

    target.value = value;

    if (cursor !== null && target === document.activeElement) {
      if (cursor === last.length) {
        cursor = value.length;
      }

      if (last !== value) {
        let prevPair = last.slice(cursor - 1, +cursor + 1 || 9e9),
          currPair = value.slice(cursor - 1, +cursor + 1 || 9e9),
          digit = value[cursor];

        if (/\d/.test(digit) && prevPair === (`${digit} `) && currPair === (` ${digit}`)) {
          cursor = cursor + 1;
        }
      }

      result = cursor;
    }
    return result;
  }

}
