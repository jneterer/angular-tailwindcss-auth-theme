import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LinkComponent } from './components/link/link.component';
import { ViewHideComponent } from './icons/view-hide/view-hide.component';
import { ViewShowComponent } from './icons/view-show/view-show.component';

@NgModule({
  declarations: [
    LinkComponent,
    ViewHideComponent,
    ViewShowComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  entryComponents: [
    ViewHideComponent,
    ViewShowComponent
  ],
  exports: [
    RouterModule,
    LinkComponent,
    ViewHideComponent,
    ViewShowComponent
  ]
})
export class SharedModule { }
