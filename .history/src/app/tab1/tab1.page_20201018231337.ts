import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})

// Déclaration de la classe toDo
class Todo{
  titre : string;
  contenu? : string; 
  status?: string
}


export class Tab1Page {

  constructor() {}

  

  todoApp : Todo = new Todo(); 

  onAddingProduct(event){
    console.log(event)
  }

}
