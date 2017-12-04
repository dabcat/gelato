import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { DataService } from '@app/services/data.service';
import { Observable } from 'rxjs/Observable';
import { IFormats } from '@app/models/IFormats';
import { IProductTemplates } from '@app/models/IProductTemplates';
import { IProductTypes } from '@app/models/IProductTypes';

import 'rxjs/add/observable/of';
// import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Component({
  selector: 'app-brochures',
  templateUrl: './brochures.component.html',
  styleUrls: ['./brochures.component.scss']
})
export class BrochuresComponent implements OnInit {

  formats$: Observable<IFormats>;
  filters$: BehaviorSubject<any> = new BehaviorSubject(null);
  productTemplateLinks$: Observable<Array<IProductTemplates>>;
  productTypes$: Observable<Array<IProductTypes>>;

  constructor(private title: Title, private data: DataService) {
    this.title.setTitle('Gelato Brochures, booklets, and magazines')
    this.productTemplateLinks$ = this.data.productTemplateLinks$;
    this.productTypes$ = this.data.productTypes$;
  }

  ngOnInit() {
    this.formats$ = this.data.getFormats();
  }

  onSelect(event: IProductTypes) {
    this.filters$.next(event.content);
  }
}
