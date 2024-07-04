import { AbstractControl, ValidationErrors } from "@angular/forms";

/** A hero's name can't match the given regular expression */
export class CustomValidators {
    
    static validationNumerodeTelefono(control: AbstractControl): ValidationErrors | null {
        const phoneNumberPattern = /^\+[0-9]{1,3}[0-9]{9,14}$/; // Prefijo internacional (1-3 dígitos) seguido de un número de teléfono (6-14 dígitos)
        const valid = phoneNumberPattern.test(control.value);
        return valid ? null : { invalidPhoneNumber: true };
    };
}

