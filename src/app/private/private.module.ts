import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { AboutComponent } from './about/about.component';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './header/menu/menu.component';
import { PrivateRoutingModule } from './private-routing.module';
import { PrivateComponent } from './private.component';
import { AccountInfoComponent } from './profile/account-info/account-info.component';
import { ChangePasswordComponent } from './profile/change-password/change-password.component';
import { ProfileComponent } from './profile/profile.component';

@NgModule({
  declarations: [
    AboutComponent,
    AccountInfoComponent,
    ChangePasswordComponent,
    HeaderComponent,
    MenuComponent,
    PrivateComponent,
    ProfileComponent
  ],
  imports: [
    CommonModule,
    PrivateRoutingModule,
    SharedModule
  ]
})
export class PrivateModule { }
