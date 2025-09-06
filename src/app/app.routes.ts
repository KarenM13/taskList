import { Routes } from '@angular/router';

export const routes: Routes = [

    {

        path: 'home', loadComponent: ()=> import('./Component/home/home.component').then(h => h.HomeComponent)

    }, 

    {
        path: 'listT', loadComponent: () => import('./Component/list-task/list-task.component').then(l => l.ListTaskComponent)

    },

    {

        path: 'addT', loadComponent: () => import('./Component/add-task/add-task.component').then(a => a.AddTaskComponent)
    }, 

    {
        path: 'editT', loadComponent: () => import('./Component/edit-task/edit-task.component').then(e => e.EditTaskComponent)
    },
    { 
        path: 'searchBT', loadComponent: () => import('./Component/search-by-title/search-by-title.component').then(s => s.SearchByTitleComponent)
    },
    {
        path: '**',
        redirectTo: 'addT'
    }
];
