import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ListTaskComponent } from "../list-task/list-task.component";
import { NavegacionComponent } from '../navegacion/navegacion.component';

@Component({
  selector: 'home',
  imports: [RouterOutlet, NavegacionComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
