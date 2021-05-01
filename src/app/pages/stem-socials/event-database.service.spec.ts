import { TestBed } from '@angular/core/testing';

import { EventDatabaseService } from './event-database.service';

describe('EventDatabaseService', () => {
  let service: EventDatabaseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EventDatabaseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
