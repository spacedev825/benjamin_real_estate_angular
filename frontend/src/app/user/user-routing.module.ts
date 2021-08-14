import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SigninComponent } from './signin/signin.component';

import { UserPage } from './user.page';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/user/account',
    pathMatch: 'full'
  },
  {
    path: 'account',
    component: UserPage
  },
  {
    path: 'signin',
    component: SigninComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserPageRoutingModule { }
