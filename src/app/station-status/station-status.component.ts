import { Component, OnInit } from '@angular/core';

import { StationStatusService } from '../station-status.service';

import { StationStatus } from '../model/StationStatus';

@Component({
  selector: 'app-station-status',
  templateUrl: './station-status.component.html',
  styleUrls: ['./station-status.component.css']
})
export class StationStatusComponent implements OnInit {


  errorMessage: string;

  complianceButton;

  sysLogButton;

  trapButton;

  switchButton;

  routerButton;

  constructor(private statusService : StationStatusService) { }

  ngOnInit() {
    this.getStatusData();
  }

  getStatusData() {
    this.statusService.getStationStatus()
      .subscribe(  
          stationStatus =>
              this.renderButtons(stationStatus),
              error => this.errorMessage = <any>error
      );
  }

  renderButtons(stationStatus : StationStatus){
    if(stationStatus.enableCompliance){
        if(stationStatus.isComplianceWorking){
          this.complianceButton = '<a class="waves-effect waves-light btn green"><i class="material-icons left">visibility</i>Compliance</a>';
        } else {
          this.complianceButton = '<a class="waves-effect waves-light btn red"><i class="material-icons left">visibility</i>Compliance</a>';
        }
    } else {
      this.complianceButton = '<a class="waves-effect waves-light btn grey"><i class="material-icons left">visibility</i>Compliance</a>';
    }

    if(stationStatus.enableSystemLog){
        if(stationStatus.isSysLogWorking){
          this.sysLogButton = '<a class="waves-effect waves-light btn green"><i class="material-icons left">library_books</i>System Logs</a>';
        } else {
          this.sysLogButton = '<a class="waves-effect waves-light btn red"><i class="material-icons left">library_books</i>System Logs</a>';
        }
    } else {
      this.sysLogButton = '<a class="waves-effect waves-light btn grey"><i class="material-icons left">library_books</i>System Logs</a>';
    }

    if(stationStatus.enableTrap){
        if(stationStatus.isTrapWorking){
          this.trapButton = '<a class="waves-effect waves-light btn green"><i class="material-icons left">snooze</i>Trap</a>';
        } else {
          this.trapButton = '<a class="waves-effect waves-light btn red"><i class="material-icons left">snooze</i>Trap</a>';
        }
    } else {
      this.trapButton = '<a class="waves-effect waves-light btn grey"><i class="material-icons left">snooze</i>Trap</a>';
    }

    if(stationStatus.enableDiscovery){
        if(stationStatus.isSwitchWorking){
          this.switchButton = '<a class="waves-effect waves-light btn green"><i class="material-icons left">dns</i>Switch Discovery</a>';
        } else {
          this.switchButton = '<a class="waves-effect waves-light btn red"><i class="material-icons left">dns</i>Switch Discovery</a>';
        }
        if(stationStatus.isRouterWorking){
          this.routerButton = '<a class="waves-effect waves-light btn green"><i class="material-icons left">http</i>Router Discovery</a>';
        } else {
          this.routerButton = '<a class="waves-effect waves-light btn red"><i class="material-icons left">http</i>Router Discovery</a>';
        }
    } else {
      this.switchButton = '<a class="waves-effect waves-light btn grey"><i class="material-icons left">dns</i>Switch Discovery</a>';
      this.routerButton = '<a class="waves-effect waves-light btn grey"><i class="material-icons left">http</i>Router Discovery</a>';
    }

  }

}
