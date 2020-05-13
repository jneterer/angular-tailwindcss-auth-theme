import { AbstractControl } from '@angular/forms';

export class FormTemplate {
  // The submitted state of the form.
  formSubmitted: boolean = false;
  // Toggles whether the password is shown or not given a password form control.
  showPassword: boolean = false;
  // You can override these default messages in the component that extends this template.
  requiredMessage: string = 'This field is required.';
  emailMessage: string = 'Please provide a valid email address.';
  matchmessage: string = 'Fields do not match.';

  /**
   * Determines if there are errors present on a given form control.
   * @param {AbstractControl} formControl 
   * @returns {boolean}
   */
  errorIsActive(formControl: AbstractControl): boolean {
    return (formControl.touched || this.formSubmitted) && Object.keys(Object.assign({}, formControl.errors)).length > 0;
  }

  /**
   * Determines if there are any errors present on the form control
   * @param {AbstractControl} formControl 
   * @returns {string}
   */
  getErrorMessage(formControl: AbstractControl): string {
    const errors: object = Object.assign({}, formControl.errors);
    if (errors['required']) {
      return this.requiredMessage;
    } else if (errors['email']) {
      return this.emailMessage;
    } else if (errors['mustMatch']) {
      return this.matchmessage;
    }
    return null;
  }

}
