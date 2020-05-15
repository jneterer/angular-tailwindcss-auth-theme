import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { IUrlData } from 'src/app/contracts/url-data/iurl-data';
import { IMenuItem } from '../../contracts/menu/imenu-item';
import { ContentService } from '../../shared/services/content/content.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit, OnDestroy {
  private unsubscribe: Subject<any> = new Subject<any>();
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
  currentUrl: string = '';

  constructor(private contentService: ContentService) { }

  ngOnInit(): void {
    // Subscribe to any changes in the url data to set whether a nav button is active.
    this.contentService.urlData$.pipe(takeUntil(this.unsubscribe))
    .subscribe((urlData: IUrlData) => {
      this.currentUrl = urlData.currentUrl;
    });
  }

  /**
   * Collapses all the menus when a nav button is clicked.
   */
  collapseMenus(): void {
    this.accountMenuExpanded = false;
    this.navExpanded = false;
  }

  ngOnDestroy(): void {
    // Prevent memory leaks and other errors by unsubscribing from subscriptions.
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }

}
