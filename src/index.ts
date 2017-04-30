// https://www.npmjs.com/package/generator-angular2-library
import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExpirationDateDirective } from './expiration-date.directive';
import { ExpirationDatePipe } from './expiration-date.pipe';
import { ExpirationDateService } from './expiration-date.service';

export * from './expiration-date.directive';
export * from './expiration-date.pipe';
export * from './expiration-date.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ExpirationDateDirective,
    ExpirationDatePipe
  ],
  exports: [
    ExpirationDateDirective
  ],
  providers: [
    ExpirationDateService
  ]
})
export class ExpirationDateModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: ExpirationDateModule,
      providers: [ExpirationDateService]
    };
  }
}
