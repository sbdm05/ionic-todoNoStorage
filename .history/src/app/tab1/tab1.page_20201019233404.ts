import { Component } from '@angular/core';

// Déclarer une classe comme structure de base
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
    console.log(event.target.value);
    // Enregistrer event.target.value dans une variable
    // this.todo = event.target.value; 
    // console.log(this.todo, 'todo');
    this.todo.titre = event.target.value; 
    console.log(this.todo.titre, 'this.todo.titre')
  }

  onSavingToDo(){
    // Nouvelle objet vide avec la classe Todo
    let todoAdd = new Todo();
    // Vérification du contenu
    console.log(todoAdd, "todo add")
    // Affectation de la valeur dans le nouvel objet
    todoAdd.titre = this.todo.titre;
    // Enregistrement de l'objet dans le tableau
    this.todoList.push(todoAdd);
    // Vérification
    console.log(this.todoList);
  }

  onDeleteItem(item){
    console.log(item, 'from ondelteitem')
    // Remove item from todoList;
    // Retrouver l'index de l'élément
    const index = this.todoList.indexOf(item);
    console.log(index, "index"); 

    //Vérifier si index est supérieur à -1
    if (index > -1) {
      // Retirer index[] de todoList, 1 élément
      this.todoList.splice(index, 1);
    }

  }
  



}
