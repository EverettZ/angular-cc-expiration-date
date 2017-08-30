export interface IExpirationDateFormatter {
    hasTextSelected(target): boolean;
    restrictExpiry(key, target);
    replaceFullWidthChars(str);
    formatExpiry(expiry);
    restrictNumeric(e): boolean;
    safeVal(value, target);
}
