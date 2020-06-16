import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export class CustomValidators {

    static regexpValidator(regex: RegExp, error: ValidationErrors, reverseReturn: boolean): ValidatorFn {
        return (control: AbstractControl): { [key: string]: any } => {
            if (!control.value) {
                return null;
            }

            if (!reverseReturn) {
                const valid = regex.test(control.value);
                return valid ? null : error;
            } else {
                const valid = !regex.test(control.value);
                return valid ? null : error;
            }

        };
    }
}
