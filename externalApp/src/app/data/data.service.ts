import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IUserProfile } from './user-profile';

@Injectable({
    providedIn:'root'
})
export class DataService {
    

    constructor(private http : HttpClient) { }

    postUserProfileForm(userProfile : IUserProfile) :Observable<any> {
        return this.http.post('https://putsreq.com/eImtarAnjF14Yli5C1bj',userProfile);
        //return of(userProfile);
    }

    getUserRoles(): Observable<string[]> {
        return of(['Requestor', 'SPOC', 'Employee', 'Admin']);
    }
}
