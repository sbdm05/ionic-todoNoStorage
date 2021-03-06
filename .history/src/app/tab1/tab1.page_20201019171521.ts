import { Component } from '@angular/core';

// Déclarer une classe comme structure de base pour objet et objetDetail
class Todo{
  titre : string; 
  description? : string; 
}


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})

// Définir une classe Todo
// class Todo{
//   titre : string;
// }

export class Tab1Page {

  constructor() {}

  // DECLARATION D'UNE VARIABLE GLOBALE
  todo: Todo = new Todo(); 

  todoList : Todo[]

  //todoApp : Todo = new Todo(); 

  onAddingTodo(event): void{
    console.log(event)
    console.log(event.target.value);
    // Enregistrer event.target.value dans une variable
    //this.todo = event.target.value; 
    //console.log(this.todo, 'todo');
    // Affiche en tant réél
    this.todo = event.target.value; 
  }

  onSavingToDo(){
    console.log('add', this.todo); 
    let todoAdd = new Todo();
  }

  



}
