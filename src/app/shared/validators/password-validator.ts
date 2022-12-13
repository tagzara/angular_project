import { FormGroup, ValidatorFn } from "@angular/forms";

export function passwordMatchValidator(controlPass1: string, controlPass2: string): ValidatorFn {
    return (control) => {
        const group = control as FormGroup;
        const pass1 = group.get(controlPass1);
        const pass2 = group.get(controlPass2);
        return pass1?.value === pass2?.value ? null : { passwordMatchValidator: true };
    };
}