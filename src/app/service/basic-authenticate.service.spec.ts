import { TestBed } from '@angular/core/testing';

import { BasicAuthenticateService } from './basic-authenticate.service';

describe('BasicAuthenticateService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BasicAuthenticateService = TestBed.get(BasicAuthenticateService);
    expect(service).toBeTruthy();
  });
});
