import { Component, ViewChild, SimpleChanges, OnChanges, AfterViewInit } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnChanges, AfterViewInit {
    title: string = 'Food-Eats';
    itemName: string = 'Recipe';
    @ViewChild('featureName') currentNabTab: any = '';
    constructor() {
        console.log('App currentNabTab - ', this.currentNabTab.selectedProduct);
    }
    ngOnChanges(changes: SimpleChanges) {
        console.log('OnChanges', changes);
        console.log('currentNabTab - ', this.currentNabTab.selectedProduct);
    }

    ngAfterViewInit() {
        console.log('ngAfterViewInit currentNabTab - ', this.currentNabTab.selectedProduct);
    }
}
