import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-product-formats',
  templateUrl: './product-formats.component.html',
  styleUrls: ['./product-formats.component.scss']
})
export class ProductFormatsComponent implements OnInit {

  @Input('data') productFormats$: Observable<any>;

  constructor() { }

  ngOnInit() {
  }

}
