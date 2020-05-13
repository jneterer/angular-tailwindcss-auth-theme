import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormTemplate } from '../../shared/templates/form/form-template.component';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html'
})
export class ForgotPasswordComponent extends FormTemplate implements OnInit {
  forgotPasswordForm: FormGroup;
  recoveryRequestSuccess: boolean = false;

  constructor(private formBuilder: FormBuilder) {
    super();
  }

  ngOnInit(): void {
    this.forgotPasswordForm = this.formBuilder.group({
      username: ['', Validators.required]
    });
  }

  /**
   * Forgot password submitted.
   * @param {any} event 
   */
  forgotPasswordSubmit(event: any): void {
    this.formSubmitted = true;
    if (this.forgotPasswordForm.valid) {
      this.recoveryRequestSuccess = true;
    }
  }

}
