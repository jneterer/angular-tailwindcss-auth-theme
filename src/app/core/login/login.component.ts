import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  formSubmitted: boolean = false;
  showPassword: boolean = false;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    // Build the login form
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  /**
   * Determines if there are errors present on a given form control.
   * @param {AbstractControl} formControl 
   * @returns {boolean}
   */
  errorIsActive(formControl: AbstractControl): boolean {
    return (formControl.touched || this.formSubmitted) && Object.keys(Object.assign({}, formControl.errors)).length > 0;
  }

  /**
   * Login event.
   * @param {any} event 
   */
  login(event: any): void {
    this.formSubmitted = true;
  }

}
