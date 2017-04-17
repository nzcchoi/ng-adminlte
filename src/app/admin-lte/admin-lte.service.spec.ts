import { TestBed, inject } from '@angular/core/testing';

import { AdminLteService } from './admin-lte.service';

describe('AdminLteService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AdminLteService]
    });
  });

  it('should ...', inject([AdminLteService], (service: AdminLteService) => {
    expect(service).toBeTruthy();
  }));
});
