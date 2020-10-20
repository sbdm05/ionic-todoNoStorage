import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})



export class Tab1Page {

  constructor() {}

  

  //todoApp : Todo = new Todo(); 

  onAddingProduct(event){
    console.log(event)
    console.log(event.target.value);
    // Affiche en tant réél
    //this.objetDetail.nom = event.target.value;
  }

  onSavingToDo(){
    
  }



}
