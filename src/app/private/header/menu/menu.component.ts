import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IMenuItem } from '../../../contracts/menu/imenu-item';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html'
})
export class MenuComponent implements OnInit {
  // If the menu is expanded (parent button is clicked).
  @Input() expanded: boolean = false;
  // How far right from the right side of the webpage the menu should open. This is only
  // important for above mobile views. If you change this value, make sure it is defined
  // in the inset property in the tailwindcss.config.js file.
  @Input() right: number = 0;
  // The origin in which the menu expands.
  @Input() origin: 'top' | 'top-right' | 'top-left' = 'top';
  // The menu items.
  @Input() menuItems: IMenuItem[];
  // The current url that helps determine if a menu item needs highlighted if we are on its page.
  @Input() currentUrl: string;
  // Event emitted to collapse all menus if a menu item is clicked.
  @Output() collapseMenu: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

}
