import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { IUrlData } from '../../../contracts/url-data/iurl-data';

@Injectable({
  providedIn: 'root'
})
export class ContentService {
  private urlData: BehaviorSubject<IUrlData> = new BehaviorSubject({
    currentUrl: null,
    previousUrl: null
  });
  public urlData$: Observable<IUrlData> = this.urlData.asObservable();

  constructor() { }

  /**
   * Sets the current and previous url.
   * @param {string} currentUrl 
   * @param {string} previousUrl 
   */
  setUrlData(currentUrl: string, previousUrl: string): void {
    this.urlData.next({
      currentUrl: currentUrl,
      previousUrl: previousUrl
    });
  }

}
