import { Component } from '@angular/core';
import { ListTaskComponent } from '../list-task/list-task.component';

@Component({
  selector: 'add-task',
  imports: [ListTaskComponent],
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.css'
})
export class AddTaskComponent {

tasks: any = [];

constructor(){

  const storedTasks = localStorage.getItem("tasks");
  this.tasks = storedTasks ? JSON.parse(storedTasks) : [];
  localStorage.setItem("tasks", JSON.stringify(this.tasks));

  }

whenClicked(){

this.tasksAdd();
console.log(this.tasks);

}

tasksAdd(){

let titleValue = (document.getElementById("Tittle") as HTMLInputElement).value.trim();

if (!titleValue) {
  alert("Para guardar la tarea debes añadir el título");
} else {
  const dateValue = (document.getElementById("dateT") as HTMLInputElement).value;
  const descriptionValue = (document.getElementById("Description") as HTMLInputElement).value;

  const selectedRadio = document.querySelector<HTMLInputElement>('input[name="gradeI"]:checked');
  const gradeValue = selectedRadio ? selectedRadio.value : null;

  const taskAdd = {
    titulo: titleValue,
    fecha: dateValue,
    gradoImportancia: gradeValue,
    descripcion: descriptionValue
  };

  this.tasks.push(taskAdd);

  localStorage.setItem("tasks", JSON.stringify(this.tasks));

  window.location.reload();
  }

  
  
}

}
