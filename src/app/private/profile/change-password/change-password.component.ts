import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormTemplate } from '../../../shared/templates/form/form-template.component';
import { MustMatch } from '../../../shared/validators/must-match.validator';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html'
})
export class ChangePasswordComponent extends FormTemplate implements OnInit {
  changePasswordForm: FormGroup;
  changePasswordSuccess: boolean = false;

  constructor(private formBuilder: FormBuilder) {
    super();
  }

  ngOnInit(): void {
    this.changePasswordForm = this.formBuilder.group({
      currentPassword: ['', Validators.required],
      newPassword: ['', Validators.required],
      confirmPassword: ['', Validators.required]
    }, {
      validator: MustMatch('newPassword', 'confirmPassword')
    });
  }

  /**
   * Change password event
   * @param {any} event 
   */
  changePassword(event: any): void {
    if (this.changePasswordForm.valid) {
      this.formSubmitted = false;
      this.changePasswordSuccess = true;
      this.changePasswordForm.patchValue({
        currentPassword: '',
        newPassword: '',
        confirmPassword: ''
      });
      this.changePasswordForm.markAsPristine();
      this.changePasswordForm.markAsUntouched();
      this.changePasswordForm.updateValueAndValidity();
    } else {
      this.formSubmitted = true;
    }
  }

}
