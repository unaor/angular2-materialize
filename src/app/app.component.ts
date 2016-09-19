import { Component } from '@angular/core';
import { MenuComponent } from './menu/menu.component';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { GraphComponent } from './graph/graph.component';

import { StationComplianceService } from './station-compliance.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers : [StationComplianceService]
})
export class AppComponent {

}
