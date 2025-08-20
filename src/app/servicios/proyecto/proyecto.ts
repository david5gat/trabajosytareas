import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Proyecto {

  constructor(private http : HttpClient){

  }
  
  url: string =  "https://jsonplaceholder.typicode.com/todos/";

  ObtenerProyecto(): Observable<any> {
    return this.http.get<any>(this.url)
  }
  
  
  ObtenerProyectos(id:string){
    return this.http.get<any>(this.url+"?userId="+id)
  }

}
