export interface IExpirationDateFormatter {
    currYear: string;
    formatExpirationDate(val: string);
    inputExpirationDate(event);
}