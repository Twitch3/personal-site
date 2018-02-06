import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class ApiService {

  constructor(private http: Http) { }

  /**
   * Wrapper for Angular Http service.
   * @param  {string} url
   * @returns Promise
   */
  getData(url: string): Promise<any> {
    return Promise.resolve();
  }

}
