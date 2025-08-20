import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { CardModule } from 'primeng/card';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Proyecto } from '../../servicios/proyecto/proyecto';

@Component({
  selector: 'app-home',
  imports: [CardModule,ToggleButtonModule,CommonModule,InputTextModule,ButtonModule],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home implements OnInit {

  userId: string = "No Existe Id";

  constructor(private proyectoServ : Proyecto){

  }


ngOnInit(): void {
  let userId = localStorage.getItem('Id');
  if (userId) {
    this.userId = userId;
  }

  
  this.proyectoServ.ObtenerProyecto().subscribe((r:any) => {
    console.log(r);
    
  })
}



}
