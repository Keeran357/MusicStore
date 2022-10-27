import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FAQComponent } from './faq/faq.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RequestsListComponent } from './requests/requests-list/requests-list.component';
import { AddRequestComponent } from './requests/add-request/add-request.component';
import { UserProfileComponent } from './user-profile/user-profile.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'dashboard' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'faq', component: FAQComponent },
  { path: 'requests', component: RequestsListComponent },
  { path: 'request', component: AddRequestComponent },
  { path: 'profile', component: UserProfileComponent },
];
  
  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }