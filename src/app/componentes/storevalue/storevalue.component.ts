import { Component, OnDestroy, OnInit } from '@angular/core';
import { StoreService } from '../../servicios/store.service';

@Component({
    selector: 'app-storevalue',
    templateUrl: './storevalue.component.html',
    styleUrls: ['./storevalue.component.css']
})
export class StorevalueComponent implements OnInit, OnDestroy {

    public contador: number = 0;

    private unsubscribe: any;

    constructor(private redux: StoreService) {

    }

    ngOnInit(): void {
        this.unsubscribe = this.redux.getStore().subscribe(() => {
            this.contador = this.redux.getStore().getState().contador;
        });
    }

    ngOnDestroy(): void {
        this.unsubscribe();
    }

}
