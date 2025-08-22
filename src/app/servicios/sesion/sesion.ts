import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Sesion {

  estalogueado :Boolean = false

  setSesion(Usuariosesion: {Email:string,sesion:string,id:number}){
      localStorage.setItem("Email",Usuariosesion.Email)
      localStorage.setItem("Sesion",Usuariosesion.sesion)
      if (Usuariosesion.sesion === "true") {
        this.estalogueado = true
      }
       let usuarioid = Usuariosesion.id.toString();
      localStorage.setItem("Id",usuarioid)
  }

  clearSesion(){
    localStorage.removeItem("Email")
    localStorage.removeItem("Sesion")
    localStorage.removeItem("Id")
  }

  estaAutenticado(){
    return this.estalogueado || localStorage.getItem('Sesion') === 'true';
  }
  
}
