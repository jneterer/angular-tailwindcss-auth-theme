import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
    RouterModule,
    FormsModule,
    ReactiveFormsModule
  ],
  entryComponents: [
    ViewHideComponent,
    ViewShowComponent
  ],
  exports: [
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    LinkComponent,
    ViewHideComponent,
    ViewShowComponent
  ]
})
export class SharedModule { }
