import { TestBed, inject } from '@angular/core/testing';

import { RecipeDataService } from './recipe-data.service';
import { ApiService } from '../../../services/api.service';

describe('RecipeDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        RecipeDataService, 
        { provide: ApiService, useValue: { getData: () => Promise.resolve() } }
      ]
    });
  });

  it('should be created', inject([RecipeDataService], (service: RecipeDataService) => {
    expect(service).toBeTruthy();
  }));
});
