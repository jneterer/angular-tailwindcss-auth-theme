import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { LinkComponent } from './components/link/link.component';
import { ZondIconComponent } from './components/zond-icon/zond-icon.component';

@NgModule({
  declarations: [
    LinkComponent,
    ZondIconComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AngularSvgIconModule.forRoot()
  ],
  exports: [
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    LinkComponent,
    ZondIconComponent
  ]
})
export class SharedModule { }
