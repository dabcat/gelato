import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { IProductTypes } from '@app/models/IProductTypes';

@Component({
  selector: 'app-product-types',
  templateUrl: './product-types.component.html',
  styleUrls: ['./product-types.component.scss']
})
export class ProductTypesComponent implements OnInit {
  @Input('data') productTypes$: Observable<Array<IProductTypes>>;
  @Output('selected') selected$: EventEmitter<number> = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  onSelect(event) {
    this.selected$.emit(event);
  }

}
