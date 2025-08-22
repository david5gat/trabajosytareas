import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Login } from "./componentes/login/login";
import { Nabvar } from "./componentes/interface/nabvar/nabvar";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected title = 'trabajosytareas';
}
