import { Component, OnInit } from '@angular/core';

import { SystemStatusService } from '../system-status.service';

import { SystemStatus } from '../model/SystemStatus';

@Component({
  selector: 'app-system-status',
  templateUrl: './system-status.component.html',
  styleUrls: ['./system-status.component.css']
})
export class SystemStatusComponent implements OnInit {


  errorMessage: string;

  complianceClass;

  sysLogClass;

  trapClass;

  switchClass;

  routerClass;



  constructor(private statusService : SystemStatusService) { }

  ngOnInit() {
    this.getStatusData();
  }

  getStatusData() {
    this.statusService.getSystemStatus()
      .subscribe(  
          stationStatus =>
              this.renderButtons(stationStatus),
              error => this.errorMessage = <any>error
      );
  }

  renderButtons(stationStatus : SystemStatus){
    if(stationStatus.enableCompliance){
        if(stationStatus.isComplianceWorking){
          this.complianceClass = 'green';
        } else {
          this.complianceClass = 'red';
        }
    } else {
      this.complianceClass = 'grey';
    }

    if(stationStatus.enableSystemLog){
        if(stationStatus.isSysLogWorking){
          this.sysLogClass = 'green';
        } else {
          this.sysLogClass = 'red';
        }
    } else {
      this.sysLogClass = 'grey';
    }

    if(stationStatus.enableTrap){
        if(stationStatus.isTrapWorking){
          this.trapClass = 'green';
        } else {
          this.trapClass = 'red';
        }
    } else {
      this.trapClass = 'grey';
    }

    if(stationStatus.enableDiscovery){
        if(stationStatus.isSwitchWorking){
          this.switchClass = 'green';
        } else {
          this.switchClass = 'red';
        }
        if(stationStatus.isRouterWorking){
          this.routerClass = 'green';
        } else {
          this.routerClass = 'red';
        }
    } else {
      this.switchClass = 'grey';
      this.routerClass = 'grey';
    }

  }

}
