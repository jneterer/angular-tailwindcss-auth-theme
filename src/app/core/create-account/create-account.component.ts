import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormTemplate } from '../../shared/templates/form/form-template.component';
import { MustMatch } from '../../shared/validators/must-match.validator';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html'
})
export class CreateAccountComponent extends FormTemplate implements OnInit {
  createAccountForm: FormGroup;
  formSubmitted: boolean = false;

  constructor(private formBuilder: FormBuilder) {
    super();
  }

  ngOnInit(): void {
    this.createAccountForm = this.formBuilder.group({
      firstName: [''],
      lastName: [''],
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required]
    }, {
      validator: MustMatch('password', 'confirmPassword')
    });
  }

  /**
   * Create account event.
   * @param {any} event 
   */
  createAccount(event: any) {
    this.formSubmitted = true;
  }

}
