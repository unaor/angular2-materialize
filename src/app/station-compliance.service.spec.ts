/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { StationComplianceService } from './station-compliance.service';

describe('Service: StationCompliance', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StationComplianceService]
    });
  });

  it('should ...', inject([StationComplianceService], (service: StationComplianceService) => {
    expect(service).toBeTruthy();
  }));
});
