import { Component } from '@angular/core';
import { ListTaskComponent } from "../list-task/list-task.component";

@Component({
  selector: 'app-search-by-title',
  imports: [],
  templateUrl: './search-by-title.component.html',
  styleUrl: './search-by-title.component.css'
})
export class SearchByTitleComponent {
completeTasks: number[] = [];
tasks: any = [];

ngOnInit() {
 const saved = localStorage.getItem('completeTasks');
  this.completeTasks = saved ? JSON.parse(saved) : [];
}


  constructor(){

  const storedTasks = localStorage.getItem("tasks");
  this.tasks = storedTasks ? JSON.parse(storedTasks) : [];
  localStorage.setItem("tasks", JSON.stringify(this.tasks));
  
  }  

  findTasks: any[] = [];

  searchT(query: string) {
  const stored = localStorage.getItem("tasks");
  const tasks = stored ? JSON.parse(stored) : [];
  const search = query.trim().toLowerCase(); 

  this.findTasks = tasks.filter((task: { titulo: string; }) => 
    task.titulo.toLowerCase().includes(search));
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
