import {
    Component,
    ElementRef,
    Input,
    OnChanges,
    SimpleChanges,
    ViewChild,
    OnInit,
    AfterViewInit
} from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';
@Component({
    selector: 'app-shopping-list',
    templateUrl: './shopping-list.component.html',
    styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnChanges, OnInit, AfterViewInit {
    @Input('tim') public ingredient: Ingredient;
    @Input() key: number;
    @ViewChild('header') heading: ElementRef;
    constructor() {
        this.ingredient = new Ingredient('', 0, '');
    }
    ngOnChanges(changes: SimpleChanges) {
        console.log('ngOnChanges changes - ShoppingListComponent');
        console.log('ngOnChanges changes - ShoppingListComponent', changes);
    }
    ngOnInit() {
        console.log('ngOnInt changes - ShoppingListComponent', this.heading.nativeElement);
    }
    ngAfterViewInit() {
        console.log('ngAfterViewInit changes - ShoppingListComponent', this.heading.nativeElement.textContent);
    }
}
