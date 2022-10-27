import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  postUrl = "https://jsonplaceholder.typicode.com/posts";
  photosUrl = "https://jsonplaceholder.typicode.com/photos";

  constructor(private http: HttpClient) { 
  } 

  getPosts(): Observable<any> {
    return this.http.get(this.postUrl);
  } 

  getPhotos(): Observable<any> {
    return this.http.get(this.photosUrl);
  } 

}
