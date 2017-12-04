import { Component, OnInit, Input, OnChanges, SimpleChanges, SimpleChange } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { IProductTypes } from '@app/models/IProductTypes';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Component({
  selector: 'app-product-formats',
  templateUrl: './product-formats.component.html',
  styleUrls: ['./product-formats.component.scss']
})
export class ProductFormatsComponent implements OnChanges, OnInit {

  @Input('data') productFormats$: Observable<any>;
  @Input('filter') filters$: BehaviorSubject<any>;

  activeFilter: string;
  filteredProducts: BehaviorSubject<any> = new BehaviorSubject(null);

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {
    const name: SimpleChange = changes.filters$;
    if(name && !name.firstChange ) {
      this.activeFilter = name.currentValue === 'Multipage' ? 'multipage_brochure' : 'letter_fold' // mock filter
      this.filteredProducts.next(this.productFormats$.filter(item => item.folded === this.activeFilter));
    } else {
      this.filteredProducts.next(this.productFormats$)
    }
  }

}
