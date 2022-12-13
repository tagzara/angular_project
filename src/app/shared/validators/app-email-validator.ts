import { ValidatorFn } from "@angular/forms";

export function appEmailValidator(string: any): ValidatorFn {
    const regexPattern = new RegExp('^[^@]+@[^@]+\.[^@]{2,4}$');
    return (control) => {
        return( control.value === '' || regexPattern.test(control.value)) ? null : { appEmailValidator:true };
    }
}