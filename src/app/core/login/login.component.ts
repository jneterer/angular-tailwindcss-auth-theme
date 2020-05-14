import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from '@angular/router';
import { FormTemplate } from '../../shared/templates/form/form-template.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent extends FormTemplate implements OnInit {
  loginForm: FormGroup;

  constructor(private router: Router,
              private formBuilder: FormBuilder) {
    super();
  }

  ngOnInit(): void {
    // Build the login form
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  /**
   * Login event.
   * @param {any} event 
   */
  login(event: any): void {
    this.formSubmitted = true;
    if (this.loginForm.valid) {
      this.router.navigate(['/app/profile']);
    }
  }

}
