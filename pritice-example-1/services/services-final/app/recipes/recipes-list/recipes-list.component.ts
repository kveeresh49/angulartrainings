import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { Recipe } from '../recipes-model';


@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})


export class RecipesListComponent implements OnInit {

  public myToggle:boolean = false;
  @Output() recipeWasSelected = new EventEmitter<Recipe>()
  recipes:Recipe[] = [

    new Recipe('Test recipe','test dec','https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg'),
    new Recipe('Test recipe2','test dec','https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg'),
    new Recipe('Test recipe3','test dec','https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg')

  ];
  constructor() {

   }

  ngOnInit() {
  }


  Toggle() {
  this.myToggle  = !this.myToggle;
  }

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
   }

}
