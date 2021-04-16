import { TestBed } from '@angular/core/testing';

import { FileGuardService } from './file-guard.service';

describe('PermissionGuardService', () => {
  let service: FileGuardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FileGuardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
