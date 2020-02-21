import { TestBed } from '@angular/core/testing';

import { ActiviteServicesService } from './activite-services.service';

describe('ActiviteServicesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ActiviteServicesService = TestBed.get(ActiviteServicesService);
    expect(service).toBeTruthy();
  });
});
