import { Directive, Input } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, Validator, ValidatorFn } from '@angular/forms';


export function validPasswordValidator(password: RegExp): ValidatorFn {
  return (control: AbstractControl): {[key: string]: any} | null => {
    const valid = password.test(control.value);
    return valid ? null : {'forbiddenPassword': {value: control.value}} ;
  };
}

@Directive({
  selector: '[appValidPassword]',
  providers: [{provide: NG_VALIDATORS, useExisting: ValidPasswordDirective, multi: true}]
})
export class ValidPasswordDirective {
    // https://stackoverflow.com/questions/44033676/angular-bind-to-an-input-alias
   // tslint:disable-next-line:no-input-rename
   @Input('appValidPassword') validPassword: string;

   validate(control: AbstractControl): {[key: string]: any} | null {
     return this.validPassword ? validPasswordValidator(new RegExp(this.validPassword, 'i'))(control) : null;
   }

}
