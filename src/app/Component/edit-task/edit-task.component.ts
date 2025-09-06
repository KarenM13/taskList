import { Component } from '@angular/core';
import { IndexService } from '../../Services/index.service';
import { Subscription } from 'rxjs';
import { ListTaskComponent } from '../list-task/list-task.component';

@Component({
  selector: 'app-edit-task',
  imports: [ListTaskComponent],
  templateUrl: './edit-task.component.html',
  styleUrl: './edit-task.component.css'
})
export class EditTaskComponent {

tasks: any = [];
editingIndex: number | null = null;
private indexSubscription: Subscription | undefined;


constructor(private indexServices: IndexService){

const storedTasks = localStorage.getItem("tasks");
this.tasks = storedTasks ? JSON.parse(storedTasks) : [];
localStorage.setItem("tasks", JSON.stringify(this.tasks));
  alert("Haz clic en el lapicito nueva vez para editar la tarea que desees");
      
}

ngOnInit(){

  this.indexSubscription = this.indexServices.selectedIndex$.subscribe(index => {
      this.editingIndex = index;
      
    });


}

 goEdit(task: any, index:number){

    (document.getElementById("Tittle") as HTMLInputElement).value = task.titulo;
    (document.getElementById("dateT") as HTMLInputElement).value = task.fecha;
    (document.getElementById("Description") as HTMLInputElement).value = task.descripcion;


    const radios = document.querySelectorAll<HTMLInputElement>('input[name="gradeI"]');
    radios.forEach(r => r.checked = r.value === task.gradoImportancia);

    this.editingIndex = index;

    this.indexServices.setSelectedIndex(this.editingIndex);
    

  }

 goUpdate(){

  if (this.editingIndex !== null) {

    const newTitle = (document.getElementById("Tittle") as HTMLInputElement).value;
    const newDate = (document.getElementById("dateT") as HTMLInputElement).value;
    const newImportance = (document.querySelector<HTMLInputElement>('input[name="gradeI"]:checked')?.value || null);
    const newDescription = (document.getElementById("Description") as HTMLInputElement).value;

   
      this.tasks[this.editingIndex] = {
        descripcion: newDescription,
        titulo: newTitle,
        fecha: newDate,
        gradoImportancia: newImportance,
        
      };

      localStorage.setItem("tasks", JSON.stringify(this.tasks));

    
      this.editingIndex = null; 

      } 

      else {
        console.warn("No hay tarea seleccionada para actualizar.");
      }
    
      window.location.reload();
      

  }

}
