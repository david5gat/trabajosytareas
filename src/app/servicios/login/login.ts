import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subscriber } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http : HttpClient){
  }

  url= "https://jsonplaceholder.typicode.com/users";


  login(): Observable<any> {
    return  this.http.get<any[]>(this.url)
  }
  
}
