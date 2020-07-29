import { TestBed } from '@angular/core/testing';

import { CcDropdownService } from './cc-dropdown.service';

describe('CcDropdownService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CcDropdownService = TestBed.get(CcDropdownService);
    expect(service).toBeTruthy();
  });
});
