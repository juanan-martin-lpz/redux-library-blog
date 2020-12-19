import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SpinnerComponent } from './componentes/spinner/spinner.component';
import { StorevalueComponent } from './componentes/storevalue/storevalue.component';

@NgModule({
    declarations: [
        AppComponent,
        SpinnerComponent,
        StorevalueComponent
    ],
    imports: [
        BrowserModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
