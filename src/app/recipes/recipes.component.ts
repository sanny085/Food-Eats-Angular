import { Component } from '@angular/core';
import { Recipe } from './recipes.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
})
export class RecipesComponent {
  recipeDetails: Recipe;
  constructor() {
    this.recipeDetails = new Recipe('', '', '');
  }

  displayRecipeDetails = (recipe: Recipe) => {
    console.log('recipe', recipe);
    const { name, description, imagePath } = recipe;
    this.recipeDetails = new Recipe(name, description, imagePath);
  };
}
