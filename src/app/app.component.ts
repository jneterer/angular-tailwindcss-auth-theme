import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router, NavigationStart } from '@angular/router';
import { filter } from 'rxjs/operators';
import { ContentService } from './shared/services/content/content.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  previousUrl: string = '';
  currentUrl: string = '';
  scrollStack: number[] = [];

  constructor(private router: Router,
              private contentService: ContentService) { }

  ngOnInit(): void {
    this.router.events.pipe(
      filter(event => (event instanceof NavigationStart || event instanceof NavigationEnd))
    )
    .subscribe((event: NavigationEnd) => {
      if (event instanceof NavigationStart) {
        if (event.url !== this.previousUrl) {
          this.scrollStack.push(window.scrollY);
        }
      } else if (event instanceof NavigationEnd) {
        if (event.url === this.previousUrl) {
          // Scroll the user to their previous location on the page if they go back.
          window.scrollTo(0, this.scrollStack.pop());
        } else {
          // Scroll the user to the top of the page on navigation.
          window.scrollTo({ left: 0, top: 0, behavior: 'smooth' });
        }
        this.previousUrl = this.currentUrl;
        this.currentUrl = event.url;
        this.contentService.setUrlData(this.currentUrl, this.previousUrl);
      }
    });
  }

}
