/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { StationStatusService } from './system-status.service';

describe('Service: StationStatus', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StationStatusService]
    });
  });

  it('should ...', inject([StationStatusService], (service: StationStatusService) => {
    expect(service).toBeTruthy();
  }));
});
