import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FAQComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  //dummy data
  //selectedData = [{ id: 1}, { id: 2}, { id: 3}, { id: 4}, { id: 5}, { id: 6 }];
  selectedData = [
    { id: 11, q: "How to Register External user?", a: "External User can register them self from User registration link. While sign in to system if email id was not found then user can click on registration link. External user needs to fill some basic information like Name, Email Id, Mobile Number, Company Name, Mailing Address."}, 
    { id: 12, q: "How to Register Internal User?", a: "Internal users already register. System will fetch user’s information internally and allow user to sign in."}, 
    { id: 13, q: "Who Can Raised the Request?", a: "External User can register them self from User registration link. While sign in to system if email id was not found then user can click on registration link. External user needs to fill some basic information like Name, Email Id, Mobile Number, Company Name, Mailing Address."},
    { id: 14, q: "How to edit user profile?", a: "User can edit his information from my profile option. User can edit his details from page."}
  ];
}
