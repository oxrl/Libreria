import { TestBed, inject } from '@angular/core/testing';

import { ApiLibroService } from './api-libro.service';

describe('ApiLibroService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ApiLibroService]
    });
  });

  it('should be created', inject([ApiLibroService], (service: ApiLibroService) => {
    expect(service).toBeTruthy();
  }));
});
