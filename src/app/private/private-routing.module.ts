import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { PrivateComponent } from './private.component';
import { PrivateGuard } from './private.guard';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  { 
    path: '',
    component: PrivateComponent,
    canActivateChild: [ PrivateGuard ],
    children: [
      { path: '', redirectTo: 'about', pathMatch: 'full' },
      { path: 'about', component: AboutComponent },
      { path: 'profile', component: ProfileComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [
    PrivateGuard
  ]
})
export class PrivateRoutingModule { }
