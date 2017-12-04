import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Response } from '@angular/http';
import { environment } from "../../environments/environment";
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';

export const HTTP_HEADER = {headers: new HttpHeaders({'Content-Type': 'application/json'})};

@Injectable()
export class HttpService {

  baseUrl: string = environment.baseApi || '/api';

  constructor(baseUrl: string) {
    this.baseUrl += baseUrl;
  }

  public handleError(error: Response) {
    return Observable.throw(error)
  }

}
