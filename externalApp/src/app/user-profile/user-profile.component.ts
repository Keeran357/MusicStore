import { Component, OnInit } from '@angular/core';
import { IUserProfile } from '../data/user-profile';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  originalUserProfile : IUserProfile = {
    name: 'Sam',
    email: 'sam@comviva.com',
    userRole: 'Admin',
    userType: 'SPOC',
    mobile: '',
    address1: '',
    address2: '',
    company: '',
    consent: true
  };

  userProfile:IUserProfile = {...this.originalUserProfile};
  constructor() { }

  ngOnInit(): void {
  }

}
