import {
    Component,
    Input,
    Output,
    EventEmitter,
    ViewEncapsulation,
    SimpleChanges,
    OnChanges,
    OnInit,
    ViewChild,
    ElementRef
} from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';

@Component({
    selector: 'app-shopping-form',
    templateUrl: './shopping-form.component.html',
    styleUrls: ['./shopping-form.component.css'],
    encapsulation: ViewEncapsulation.Emulated // Emulated, ShadowDom, None
})
export class ShoppingFormComponent implements OnChanges, OnInit {
    // productName: string = '';
    // productQuantity: number = 0;
    @ViewChild('productName') productNameRef: ElementRef;
    @ViewChild('productQuantity') productQuantityRef: ElementRef;
    @ViewChild('productType') productTypeRef: ElementRef;

    @Input() ingredients: Ingredient[] = [];
    @Output() addProduct: EventEmitter<Ingredient> = new EventEmitter();
    constructor() {
        console.log('constructing is calling');
    }

    ngOnChanges(changes: SimpleChanges) {
        console.log('ngOnChanges changes');
        console.log('ngOnChanges changes', changes);
    }
    ngOnInit() {}
    onAddProduct = () => {
        console.log('Event - ', this.productTypeRef.nativeElement.value);
        const productName = this.productNameRef.nativeElement.value;
        const productQuantity = this.productQuantityRef.nativeElement.value;
        const productType = this.productTypeRef.nativeElement.value;

        console.log('productName, productQuantity', productName, productQuantity);
        const newProduct: Ingredient = {
            productName,
            productQuantity,
            productType
        };
        this.addProduct.emit(newProduct);
    };
    onDeleteProduct = () => {};

    onClearProduct = () => {};
}
