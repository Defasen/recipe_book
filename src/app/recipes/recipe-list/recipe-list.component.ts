import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'Just a test', 
      'https://live.staticflickr.com/4168/34641495421_038cd633ec_b.jpg'),

    new Recipe('A Test by Laura', 'Just a Laura test',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRVCjFJAXYIL7b0YslFA5ALoHUfhG3ZVtKJ1A&usqp=CAU')
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
