import { TestBed } from '@angular/core/testing';

import { UserDiscoveryService } from './user-discovery.service';

describe('UserDiscoveryService', () => {
  let service: UserDiscoveryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserDiscoveryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
