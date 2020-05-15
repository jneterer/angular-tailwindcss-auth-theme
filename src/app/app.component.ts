import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';
import { ContentService } from './shared/services/content/content.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  previousUrl: string = '';
  currentUrl: string = '';

  constructor(private router: Router,
              private contentService: ContentService) { }

  ngOnInit(): void {
    this.router.events.pipe(
      filter(event =>  event instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd) => {
      this.previousUrl = this.currentUrl;
      this.currentUrl = event.url;
      this.contentService.setUrlData(this.currentUrl, this.previousUrl);
    });
  }

}
