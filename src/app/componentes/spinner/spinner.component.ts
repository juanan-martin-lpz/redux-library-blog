import { Component, OnInit } from '@angular/core';
import { StoreService } from 'src/app/servicios/store.service';
import { IncrementarAction, DecrementarAction } from '../../actions/app.actions';

@Component({
    selector: 'app-spinner',
    templateUrl: './spinner.component.html',
    styleUrls: ['./spinner.component.css']
})
export class SpinnerComponent implements OnInit {
    public contador: number = 0;

    constructor(private redux: StoreService) {
        this.redux.getStore().subscribe( () => {
          this.contador = this.redux.getStore().getState().contador;
        });
    }

    ngOnInit(): void {
    }

    incrementar(): void {
      this.redux.getStore().dispatch(IncrementarAction);
    }

    decrementar(): void {
      this.redux.getStore().dispatch(DecrementarAction);
    }

  }
