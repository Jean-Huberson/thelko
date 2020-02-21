import { TestBed } from '@angular/core/testing';

import { AuthGuarService } from './auth-guar.service';

describe('AuthGuarService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AuthGuarService = TestBed.get(AuthGuarService);
    expect(service).toBeTruthy();
  });
});
