import { Component } from '@angular/core';

import { StationComplianceService } from './station-compliance.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers : [StationComplianceService]
})
export class AppComponent {

}
