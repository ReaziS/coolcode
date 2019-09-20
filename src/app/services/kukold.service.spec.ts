import { TestBed } from '@angular/core/testing';

import { KukoldService } from './kukold.service';

describe('KukoldService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: KukoldService = TestBed.get(KukoldService);
    expect(service).toBeTruthy();
  });
});
