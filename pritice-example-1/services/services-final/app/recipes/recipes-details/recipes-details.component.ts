import { Component, OnInit ,Input,} from '@angular/core';
import { Recipe } from '../recipes-model';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipes-details.component.html',
  styleUrls: ['./recipes-details.component.css']
})
export class RecipesDetailsComponent implements OnInit {

  @Input() recipe: Recipe;
  constructor() { }


  ngOnInit() {
  }

}
