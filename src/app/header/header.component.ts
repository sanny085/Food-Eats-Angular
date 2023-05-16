import { Component } from '@angular/core';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent {
    selectedProduct: string = 'Shopping';
    constructor() {}
    onSelectProduct(value: string, event: any) {
        console.log('Value: ' + value);
        console.log('selectedProduct', event);
        this.selectedProduct = value;
    }
}
