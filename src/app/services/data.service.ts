import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiService } from '@app/services/api.service';
import { Observable } from 'rxjs/Observable';
import { IProductTemplates } from '@app/models/IProductTemplates';
import { IProductTypes } from '@app/models/IProductTypes';

@Injectable()
export class DataService {

  productTemplateLinks$: Observable<Array<IProductTemplates>> = Observable.of([
    {
      link: '#',
      content: 'Adobe InDesign templates'
    },
    {
      link: '#',
      content: 'Adobe preflight profiles'
    },
    {
      link: '#',
      content: 'File specifications'
    }
  ])

  productTypes$: Observable<Array<IProductTypes>> = Observable.of([
    {
      id: 1,
      content: 'Folded'
    },
    {
      id: 2,
      content: 'Multipage'
    }
  ])

  constructor(private api: ApiService) { }

  getFormats(): Observable<any> {
    return this.api.apiGetFormats();
  }

}
