import { Component } from '@angular/core';

import { StationComplianceService } from './station-compliance.service';
import { UserDetailsService } from './user-details.service';
import { SystemStatusService } from './system-status.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers : [StationComplianceService,
               UserDetailsService,
               SystemStatusService
              ]
})
export class AppComponent {

}
