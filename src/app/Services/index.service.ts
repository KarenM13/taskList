import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IndexService {

   
  private selectedIndexSource = new BehaviorSubject<number | null>(null);
  selectedIndex$ = this.selectedIndexSource.asObservable(); 
  
  constructor() { }


  setSelectedIndex(index: number) {
    this.selectedIndexSource.next(index); 
  }

}
