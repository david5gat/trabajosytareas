import { CommonModule } from '@angular/common';
import { Component, EventEmitter, OnInit, Output, output } from '@angular/core';
import { CardModule } from 'primeng/card';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { Proyecto } from '../../servicios/proyecto/proyecto';
import { Tareas } from '../../interfaces/tareas';
import { CheckboxModule } from 'primeng/checkbox';
import { Nabvar } from "../interface/nabvar/nabvar";
import { PrimeIcons, MenuItem } from 'primeng/api';
import { DialogModule } from 'primeng/dialog';
import { ReactiveFormsModule } from '@angular/forms';
import { TareaDialog } from "../../tarea-dialog/tarea-dialog";


@Component({
  selector: 'app-home',
  imports: [CardModule, ToggleButtonModule,
    CommonModule,
    InputTextModule,
    ButtonModule,
    CheckboxModule,
    FormsModule,
    Nabvar,
    DialogModule, 
    ReactiveFormsModule, TareaDialog],
  templateUrl: './home.html',
  styleUrl: './home.scss' 
})
export class Home implements OnInit {

  @Output() visibleChange = new EventEmitter<boolean>();

  abrirEditar : boolean = false;
  abrirEliminar : boolean = false;
  abrirCrear: boolean = false

  

  TareaSeleccion!: Tareas;

  userId: string = "No Existe Id";

  TareasYTrabajos:Tareas[] =[];

  constructor(private proyectoServ : Proyecto){

  }


ngOnInit(): void {
  let userId = localStorage.getItem('Id');
  if (userId) {
    this.userId = userId;
    this.proyectoServ.ObtenerProyectos(this.userId).subscribe({
      next: (resp) =>{
        const primer = {"userId": 0, "id":0, "title": "Crear Nueva tarea", "completed": false };
        this.TareasYTrabajos = [primer,...resp];
      }
    })
  }
}

editar(tarea:Tareas){
  this.visibleChange.emit(this.abrirCrear);
  this.TareaSeleccion = { ...tarea }; 
  this.abrirEditar = true;
}

guardar(id: number){
  const index = this.TareasYTrabajos.findIndex((val) => val.id === id );

  this.TareasYTrabajos[index].completed = this.TareaSeleccion.completed;
  this.TareasYTrabajos[index].title     = this.TareaSeleccion.title;
  
  this.abrirEditar = false;
}

inicarEliminar(tarea: Tareas){
  this.visibleChange.emit(this.abrirEliminar)
  this.TareaSeleccion = { ...tarea }; 
  this.abrirEliminar = true;
}



 crearTarea(tarea:Tareas){
  
   this.TareaSeleccion = { ...tarea }; 
   this.TareaSeleccion.id = 1+Math.max(...this.TareasYTrabajos.map( t => t.id));
   this.abrirCrear = true;
 }

 eliminarTarea(tarea: Tareas) {
  this.TareasYTrabajos = this.TareasYTrabajos.filter(t => t.id !== tarea.id);
  this.abrirEliminar = false; 
 }

creaNtarea(){
  this.TareasYTrabajos.push(this.TareaSeleccion);
  this.abrirCrear = false;
}

guardarCambios(tarea: Tareas) {
  debugger
  if (this.abrirEditar) {
    const index = this.TareasYTrabajos.findIndex((val) => val.id === tarea.id);
    this.TareasYTrabajos[index] = tarea;
  } else {
    tarea.id = 1 + Math.max(...this.TareasYTrabajos.map(t => t.id));
    this.TareasYTrabajos.push(tarea);
  }
  this.cerrarDialog();
}

cerrarDialog() {
  this.abrirEditar = false;
  this.abrirCrear = false;
}


}
