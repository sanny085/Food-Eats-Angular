import { Component, Input } from '@angular/core';
import { Recipe } from '../recipes.model';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css'],
})
export class RecipeDetailComponent {
  @Input() recipeDetails: Recipe;
  constructor() {
    this.recipeDetails = new Recipe('', '', '');
  }
}
