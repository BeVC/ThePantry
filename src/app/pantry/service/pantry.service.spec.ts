import { TestBed, inject } from '@angular/core/testing';

import { PantryService } from './pantry.service';

describe('PantryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PantryService]
    });
  });

  it('should ...', inject([PantryService], (service: PantryService) => {
    expect(service).toBeTruthy();
  }));
});
