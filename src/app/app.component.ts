import { Component } from '@angular/core';

import { StationComplianceService } from './station-compliance.service';
import { UserDetailsService } from './user-details.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers : [StationComplianceService,
               UserDetailsService
              ]
})
export class AppComponent {

}
