import { Component, OnInit } from '@angular/core';
import { StoreService } from '../../servicios/store.service';

@Component({
  selector: 'app-storevalue',
  templateUrl: './storevalue.component.html',
  styleUrls: ['./storevalue.component.css']
})
export class StorevalueComponent implements OnInit {

  public contador: number = 0;
  constructor(private redux: StoreService) {

    this.redux.getStore().subscribe( () => {
      this.contador = this.redux.getStore().getState().contador;
    });

   }

  ngOnInit(): void {
  }

}
