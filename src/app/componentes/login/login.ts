import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { FloatLabelModule } from 'primeng/floatlabel';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { LoginService } from '../../servicios/login/login';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { Sesion } from '../../servicios/sesion/sesion';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [ButtonModule,
    CommonModule,
    FloatLabelModule,
    FormsModule,
    InputTextModule,
    ToggleButtonModule,
    ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrl: './login.scss'
})
export class Login {

  loginBad : boolean = false
  exampleForm!: FormGroup;

   constructor(private fb: FormBuilder, private loginServ : LoginService, 
    private sesionServ : Sesion,
    private router : Router) {
    this.exampleForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }
  value1: string = "";
  value2: string = "";
  value3: string = "";

  login(){
    
      this.loginServ.login().subscribe({
        next: (resp) => {
          console.log(resp);
          const findUser = resp.find((u: any)=> u.email === this.value1)
          if (findUser) {
            console.log("Usuario encontrado");
            
            this.router.navigate(["/home"]);
            this.loginBad = false;
            let usuarioEmailStorage:{Email:string,sesion:string,id:number} ={"Email": this.value1, "sesion": "true", "id":findUser.id}
           this.sesionServ.setSesion(usuarioEmailStorage);
          } else {
            console.log("Usuario no encontrado");
            this.loginBad = true;
          }
        },
        error: (err) => {
          console.log(err); 
        }
      })
  }

  

}
