import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'navegacion',
  imports: [RouterLink],
  templateUrl: './navegacion.component.html',
  styleUrl: './navegacion.component.css'
})
export class NavegacionComponent {

  constructor (private routes: Router){}

  elementsOfMenu: any = [
    {  name: 'Agregar Tarea', routes: 'addT'},
    {name: 'Editar una Tarea', routes: 'editT'},
    {name: 'Buscar por Título', routes: 'searchBT'}
   
  ]

  iconImg: any = [
  "📑",
  "📝",
  "🔍" 
];

}

