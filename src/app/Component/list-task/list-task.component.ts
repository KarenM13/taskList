import { Component } from '@angular/core';
import {  Router } from '@angular/router';
import { IndexService } from '../../Services/index.service';
import { isEmpty } from 'rxjs';

@Component({
  selector: 'list-task',
  imports: [],
  templateUrl: './list-task.component.html',
  styleUrl: './list-task.component.css'
})
export class ListTaskComponent {
  complete = false;
  ver= false;
  completeTasks: number[] = [];
  tasks: any = [];
  editingIndex: number | null = null;

  ngOnInit() {
 const saved = localStorage.getItem('completeTasks');
  this.completeTasks = saved ? JSON.parse(saved) : [];
 
}


  constructor(private routes: Router, private indexService: IndexService){

  const storedTasks = localStorage.getItem("tasks");
  this.tasks = storedTasks ? JSON.parse(storedTasks) : [];
  localStorage.setItem("tasks", JSON.stringify(this.tasks));
  
  if (this.tasks.length === 0) {
    this.ver = false;
    } else {
      this.ver = true;
    }
  }


  goEdit(task: any, index:number){

      
    (document.getElementById("Tittle") as HTMLInputElement).value = task.titulo;
    (document.getElementById("dateT") as HTMLInputElement).value = task.fecha;
    (document.getElementById("Description") as HTMLInputElement).value = task.descripcion;

    const radios = document.querySelectorAll<HTMLInputElement>('input[name="gradeI"]');
    radios.forEach(r => r.checked = r.value === task.gradoImportancia);

    this.editingIndex = index;

    this.indexService.setSelectedIndex(this.editingIndex);

     this.routes.navigate(["/editT"]); 

  

  }
  
  delT(index: number){

  const stored = localStorage.getItem("tasks");
  if (!stored) return; 
  const tasks = JSON.parse(stored);

  tasks.splice(index, 1);

  confirm("¿Seguro que deseas eliminar la tarea?")

  localStorage.setItem("tasks", JSON.stringify(tasks));

  this.tasks = tasks; 
  
  const i = this.completeTasks.indexOf(index);
  if (i > -1) {
  this.completeTasks.splice(i, 1);
  localStorage.setItem('completeTasks', JSON.stringify(this.completeTasks));

  window.location.reload()
  }
}

  marComplete(index: number) {
   
  if (this.completeTasks.includes(index)) {
    this.completeTasks = this.completeTasks.filter(i => i !== index);

  } else {
    this.completeTasks.push(index);
  }

  localStorage.setItem('completeTasks', JSON.stringify(this.completeTasks));
  }

}