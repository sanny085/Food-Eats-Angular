import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../../recipes.model';
@Component({
    selector: 'app-recipe-item',
    templateUrl: './recipe-item.component.html',
    styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent {
    @Input() recipe: Recipe;
    @Input() key: number;
    @Output() displayCurrentRecipe: EventEmitter<Recipe> = new EventEmitter();

    currentRecipeDetails = (currentRecipe: Recipe) => {
        console.log(currentRecipe);
        this.displayCurrentRecipe.emit(currentRecipe);
    };
}
