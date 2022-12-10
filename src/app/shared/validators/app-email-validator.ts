import { ValidatorFn } from "@angular/forms";

export function appEmailValidator(string: any): ValidatorFn {
    const regexPattern = new RegExp('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$');
    return (control) => {
        return( control.value === '' || regexPattern.test(control.value)) ? null : { appEmailValidator:true };
    }
}