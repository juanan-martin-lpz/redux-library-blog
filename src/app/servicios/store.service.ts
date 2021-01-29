import { Injectable } from '@angular/core';

import { AppState } from '../state/app.state';
import { createStore, Store } from 'redux';
import { reducer } from '../reducers/app.reducer';

@Injectable({
    providedIn: 'root'
})
export class StoreService {

    private store: any;

    constructor() { }

    createStore(initialState: AppState) {
        this.store = createStore(reducer, initialState);

    }

    getStore(): Store {
        return this.store;
    }

}
