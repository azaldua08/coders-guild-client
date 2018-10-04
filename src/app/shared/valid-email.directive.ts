import { Directive, Input } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, Validator, ValidatorFn } from '@angular/forms';

/** A hero's name can't match the given regular expression */
export function validEmailValidator(email: RegExp): ValidatorFn {
  return (control: AbstractControl): {[key: string]: any} | null => {
    const valid = email.test(control.value);
    return valid ? null : {'forbiddenEmail': {value: control.value}} ;
  };
}

@Directive({
  selector: '[appValidEmail]',
  providers: [{provide: NG_VALIDATORS, useExisting: EmailValidatorDirective, multi: true}]
})
export class EmailValidatorDirective implements Validator {
    // https://stackoverflow.com/questions/44033676/angular-bind-to-an-input-alias
   // tslint:disable-next-line:no-input-rename
  @Input('appValidEmail') validEmail: string;

  validate(control: AbstractControl): {[key: string]: any} | null {
    return this.validEmail ? validEmailValidator(new RegExp(this.validEmail, 'i'))(control) : null;
  }
}
