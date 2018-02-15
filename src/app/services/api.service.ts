import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Injectable()
export class ApiService {

  constructor(private http: Http) { }

  /**
   * Wrapper for Angular Http service.
   * @param  {string} url
   * @returns Promise
   */
  getData(url: string): Promise<any> {
    return this.http.get(url).map(res => {
      return res.ok ? res.json() : res;
    }).toPromise();
  }

}
