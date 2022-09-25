import { TestBed } from '@angular/core/testing';

import { CredManagerService } from './cred-manager.service';

describe('CredManagerService', () => {
  let service: CredManagerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CredManagerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
