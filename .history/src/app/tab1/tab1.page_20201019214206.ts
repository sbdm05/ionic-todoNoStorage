import { Component } from '@angular/core';

// Déclarer une classe comme structure de base pour objet et objetDetail
class Todo{
  titre : string;
  description? : string
}


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})


export class Tab1Page {

  constructor() {}

  // DECLARATION D'UNE VARIABLE GLOBALE
  todo: Todo = new Todo(); 

  // DECLARATION DU TABLEAU DANS LEQUEL
  // LES TODOS SERONT RANGES
  todoList : Todo[] =[];


  onAddingTodo(event): void{
    console.log(event)
    console.log(event.target.value);
    // Enregistrer event.target.value dans une variable
    //this.todo = event.target.value; 
    //console.log(this.todo, 'todo');
    // Affiche en tant réél
    this.todo.titre = event.target.value; 
    console.log(this.todo.titre, 'this.todo.titre')
  }

  onSavingToDo(){
    //console.log('add', this.todo.titre); 
    // Nouvelle variable avec la classe Todo
    let todoAdd = new Todo();
    //console.log(todoAdd, "todo add")
    todoAdd.titre = this.todo.titre;
    this.todoList.push(todoAdd);
    console.log(this.todoList);
  }

  onDeleteItem(item){
    console.log(item, 'from ondelteitem')
    // Remove item from todoList;
    
  }
  



}
