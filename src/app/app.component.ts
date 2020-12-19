import { Component } from '@angular/core';

import { AppState } from './state/app.state';
import { StoreService } from './servicios/store.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'redux-library-blog';

    initialState: AppState = {
        contador: 0
    };

    constructor(private redux: StoreService) {
        this.redux.createStore(this.initialState);

        console.log(this.redux);
    }

}
