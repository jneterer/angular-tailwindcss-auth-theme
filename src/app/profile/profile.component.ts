import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html'
})
export class ProfileComponent implements OnInit {
  user = {
    firstName: 'Jacob',
    lastName: 'Neterer',
    username: 'jacobneterer',
    email: 'myemail@email.com'
  };
  wantsToDeleteAccnt: boolean = false;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  /**
   * Delete account event.
   * @param {MouseEvent} event 
   */
  deleteAccount(event: MouseEvent): void {
    this.router.navigate(['/login']);
  }

}
