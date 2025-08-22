import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators, FormGroup } from '@angular/forms';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { CheckboxModule } from 'primeng/checkbox';
import { CommonModule } from '@angular/common';
import { Tareas } from '../interfaces/tareas';
import { FormsModule } from '@angular/forms';
import { CardModule } from 'primeng/card';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { DeferBlockBehavior } from '@angular/core/testing';


@Component({
  selector: 'app-tarea-dialog',
  imports: [CommonModule, ReactiveFormsModule, 
    DialogModule, ButtonModule, 
    InputTextModule, CheckboxModule,ToggleButtonModule,CardModule,FormsModule],
  templateUrl: './tarea-dialog.html',
  styleUrl: './tarea-dialog.scss'
})
export class TareaDialog {
  @Input() visible: boolean = false;
  @Input() titulo: string = "Nueva tarea";
  @Input() tarea!: Tareas;
  @Output() onGuardar = new EventEmitter<Tareas>();
  @Output() onEliminar = new EventEmitter<Tareas>();
  @Output() onCancelar = new EventEmitter<void>();

  form!: FormGroup;

  constructor(private fb: FormBuilder) {
    const form  = this.fb.group({
    id:[{value: '', disabled: true}],
    userId:['',Validators.required],
    title: ['', Validators.required],
    completed: [false]
  });

  this.form = form;
  }

  ngOnChanges() {
    if (this.tarea) {
      this.form.patchValue(this.tarea);
    }
  }

  guardar() {
    debugger
    if (this.form.valid) {
      
      this.onGuardar.emit({...this.form.getRawValue()});
    }
  }

  eliminar(){
      this.onEliminar.emit({...this.form.getRawValue()});
  }
  
  cerrar() {
    this.onCancelar.emit();
  }
}
