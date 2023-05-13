import {
    Component,
    Input,
    Output,
    EventEmitter,
    ViewEncapsulation,
    SimpleChanges,
    OnChanges,
    OnInit
} from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';

@Component({
    selector: 'app-shopping-form',
    templateUrl: './shopping-form.component.html',
    styleUrls: ['./shopping-form.component.css'],
    encapsulation: ViewEncapsulation.Emulated // Emulated, ShadowDom, None
})
export class ShoppingFormComponent implements OnChanges, OnInit {
    productName: string = '';
    productQuantity: number = 0;
    @Input() ingredients: Ingredient[] = [];
    @Output() addProduct: EventEmitter<Ingredient> = new EventEmitter();
    constructor() {
        console.log('constructing is calling');
    }

    ngOnChanges(changes: SimpleChanges) {
        console.log('ngOnChanges changes');
        console.log('ngOnChanges changes', changes);
    }
    ngOnInit() {
        console.log('ngOnInit - ', this.productName);
    }
    onAddProduct = (productType: HTMLElement) => {
        console.log(productType);
        const newProduct = {
            productName: this.productName,
            productQuantity: this.productQuantity
        };
        this.addProduct.emit(newProduct);
    };
    onDeleteProduct = () => {};

    onClearProduct = () => {};
}
