import { TestBed, inject } from '@angular/core/testing';

import { ApiService } from './api.service';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';

describe('ApiService', () => {
  const mockHTTP: any = {
    get: () => { return Observable.from([{ ok: true, json: () => true }]); }
  }
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ApiService,
        { provide: Http, useValue: mockHTTP }
      ]
    });
  });

  it('should be created', inject([ApiService], (service: ApiService) => {
    expect(service).toBeTruthy();
  }));
});
