import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IUser } from '../../../contracts/user/iuser';
import { FormTemplate } from '../../../shared/templates/form/form-template.component';

@Component({
  selector: 'app-account-info',
  templateUrl: './account-info.component.html'
})
export class AccountInfoComponent extends FormTemplate implements OnInit {
  @Input() user: IUser;
  accountInfoForm: FormGroup;
  accountInfoUpdated: boolean = false;

  constructor(private formBuilder: FormBuilder) {
    super();
  }

  ngOnInit(): void {
    this.accountInfoForm = this.formBuilder.group({
      firstName: this.user.firstName,
      lastName: this.user.lastName,
      email: [this.user.email, [Validators.required, Validators.email]]
    });
  }

  /**
   * Updates the user account info.
   * @param {any} event 
   */
  updateAccountInfo(event: any): void {
    this.formSubmitted = true;
    if (this.accountInfoForm.valid) {
      this.accountInfoUpdated = true;
    }
  }

}
