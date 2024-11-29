import { TestBed } from '@angular/core/testing';

import { NgxThymeUiService } from './ngx-thyme-ui.service';

describe('NgxThymeUiService', () => {
  let service: NgxThymeUiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxThymeUiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
