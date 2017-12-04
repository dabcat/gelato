import { Injectable } from '@angular/core';
import { HttpService, HTTP_HEADER } from '@app/services/http.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/share';
import 'rxjs/add/operator/catch';
import { Subject } from 'rxjs/Rx';

import { IFormats } from '@app/models/IFormats';

@Injectable()
export class ApiService extends HttpService {

  constructor(private http: HttpClient) {
    super('')
  }

  apiGetFormats(): Observable<any> {
    return this.http.get(this.baseUrl + 'assets/formats.json', HTTP_HEADER)
      .map((response: IFormats) => response ? response : [])
      .catch(error => this.handleError(error))
      .share()
  }

}
