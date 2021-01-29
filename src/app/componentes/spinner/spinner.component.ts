import { Component, OnDestroy, OnInit } from '@angular/core';
import { StoreService } from 'src/app/servicios/store.service';
import { IncrementarAction, DecrementarAction } from '../../actions/app.actions';

@Component({
    selector: 'app-spinner',
    templateUrl: './spinner.component.html',
    styleUrls: ['./spinner.component.css']
})
export class SpinnerComponent implements OnInit, OnDestroy {
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

    incrementar(): void {
        this.redux.getStore().dispatch(IncrementarAction);
    }

    decrementar(): void {
        this.redux.getStore().dispatch(DecrementarAction);
    }

}
