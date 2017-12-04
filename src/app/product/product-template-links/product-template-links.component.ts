import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { IProductTemplates } from '@app/models/IProductTemplates';

@Component({
  selector: 'app-product-template-links',
  templateUrl: './product-template-links.component.html',
  styleUrls: ['./product-template-links.component.scss']
})
export class ProductTemplateLinksComponent implements OnInit {
  @Input('data') productTemplateLinks$: Observable<Array<IProductTemplates>>;

  constructor() { }

  ngOnInit() {
  }

}
