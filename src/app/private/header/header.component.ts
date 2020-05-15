import { Component, OnInit } from '@angular/core';
import { IMenuItem } from 'src/app/contracts/menu/imenu-item';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {
  accountMenuItems: IMenuItem[] = [
    {
      url: '/app/profile',
      label: 'Profile'
    },
    {
      url: '/login',
      label: 'Logout'
    }
  ];
  accountMenuExpanded: boolean = false;
  navExpanded: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  /**
   * Collapses all the menus when a nav button is clicked.
   */
  collapseMenus() {
    this.accountMenuExpanded = false;
    this.navExpanded = false;
  }

}
