import { Component } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
@Component({
    selector: 'app-shop',
    templateUrl: './shop.component.html',
    styleUrls: ['./shop.component.css']
})
export class ShopComponent {
    ingredients: Ingredient[] = [new Ingredient('Apple', 10), new Ingredient('Banana', 10)];

    addNewProduct = (addProduct: Ingredient) => {
        this.ingredients.push(addProduct);
    };
}
