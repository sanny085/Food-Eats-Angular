import { Component } from '@angular/core';
import { Recipe } from './recipes.model';

@Component({
    selector: 'app-recipes',
    templateUrl: './recipes.component.html',
    styleUrls: ['./recipes.component.css']
})
export class RecipesComponent {
    selectedReceipe: Recipe;
    constructor() {
        this.selectedReceipe = new Recipe('', '', '');
        console.log('selectedReceipe - ', this.selectedReceipe);
    }

    displayRecipeDetails = (recipe: Recipe) => {
        console.log('recipe', recipe);
        const { name, description, imagePath } = recipe;
        this.selectedReceipe = new Recipe(name, description, imagePath);
    };
}
