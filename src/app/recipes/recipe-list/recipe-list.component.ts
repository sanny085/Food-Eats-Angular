import { Component, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipes.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent {
  @Output() showRecipeDetails: EventEmitter<Recipe> = new EventEmitter();

  recipes: Recipe[] = [
    new Recipe(
      'Healthy Food',
      'Quick and healthy recipes | BBC Good Food',
      'https://images.immediate.co.uk/production/volatile/sites/30/2013/05/Chicken-leek-and-broccoli-rice-stir-fry-ffe0df6.jpg?quality=90&resize=556,505'
    ),
    new Recipe(
      'Indian Food',
      'Quick and healthy recipes | BBC Good Food',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYpJ2a_7lxN6nY5fjfnD33Pt0OQRhHrEgszQ&usqp=CAU'
    ),
  ];

  currentRecipeDetails = (recipe: Recipe) => {
    console.log('Recipe - ', recipe);
    this.showRecipeDetails.emit(recipe);
  };
}
