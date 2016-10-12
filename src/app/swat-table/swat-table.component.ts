import { Component, OnInit } from '@angular/core';
import { StationComplianceService } from '../station-compliance.service';

import { StationCompliance } from '../model/StationCompliance';

@Component({
  selector: 'app-swat-table',
  templateUrl: './swat-table.component.html',
  styleUrls: ['./swat-table.component.css']
})
export class SwatTableComponent implements OnInit {

  tableData : StationCompliance[];

  errorMessage: string;

  constructor(private stationService : StationComplianceService) { }

  ngOnInit() {
      this.getTableData();
  }

  getTableData() {
    this.stationService.subscribeToComplianceService()
      .subscribe(
        tableData =>{
            this.tableData = tableData;
            this.tableData.map((stationCompliance) => {
              var date = new Date(1000 * (stationCompliance.date));
              stationCompliance.date = date.toLocaleString();
            })
        } ,
        error => this.errorMessage = <any>error
      );
  }

  sortBy(field){
    this.tableData.sort((n1, n2) =>
    {
      if(n1[field] > n2[field]) {
        return 1;
      }
      if(n1[field] < n2[field]) {
        return -1;
      }
      else {
        return 0;
      }
    });
  }

  getUpDownDevices() {
    var downStations = this.tableData.map(stationCompliance => {
      console.log(stationCompliance);
      return stationCompliance;
    });
  }

}
