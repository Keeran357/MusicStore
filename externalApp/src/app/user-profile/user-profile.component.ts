import { Component, OnInit } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';
import { Observable } from 'rxjs';
import { DataService } from '../data/data.service';
import { IUserProfile } from '../data/user-profile';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  postError = false;
  postErrorMessage = '';
  userRoles!: Observable<string[]>;
  startDate!: Date;
  
  bsValue = new Date();
  bsRangeValue: Date[];
  minDate: Date;
  maxDate = new Date();


  //Rating variables start-------------
rating = 0;
maxRating = 10;
  //Rating variables end-------------

  originalUserProfile : IUserProfile = {
    name: 'Sam',
    email: 'sam@comviva.com',
    userRole: 'Admin',
    userType: 'SPOC',
    mobile: '',
    address1: '',
    address2: '',
    company: '',
    consent: true,
    profilePic:'assets/images/up.jpg'
  };

  userProfile:IUserProfile = {...this.originalUserProfile};

  profilePicture:string= this.originalUserProfile.profilePic;//"assets/images/user.png";

  constructor(private dataService: DataService) { 
    this.minDate = new Date();
    this.maxDate = new Date();
    this.minDate.setDate(this.minDate.getDate() - 1);
    this.maxDate.setDate(this.maxDate.getDate() + 7);

    this.bsRangeValue = [this.bsValue, this.maxDate];
  }

  ngOnInit(): void {
    this.startDate = new Date();
    this.userRoles = this.dataService.getUserRoles();
  }

  onSubmit(form : NgForm) {
    console.log('in submit: ', form.valid);

    if(form.valid){
      this.postError = false;
      this.dataService.postUserProfileForm(this.originalUserProfile).subscribe(
        result => console.log('success:', result),
        error => this.onHttpError(error)
      );
    }
    else{
      this.postError = true;
      this.postErrorMessage = "Please fix the above errors.";
    }
  }

  onHttpError(errorResponse:any) {
    console.log('error: ', errorResponse);
    this.postError = true;
    this.postErrorMessage = errorResponse.error.errorMessage;
  }

  onBlur(field : NgModel) {
    console.log('in onBlur: ', field.valid);
  }

}
