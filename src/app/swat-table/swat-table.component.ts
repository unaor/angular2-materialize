import { Component, OnInit } from '@angular/core';
import { StationComplianceService } from '../station-compliance.service';

import { StationCompliance } from '../model/StationCompliance';

@Component({
  selector: 'app-swat-table',
  templateUrl: './swat-table.component.html',
  styleUrls: ['./swat-table.component.css', '../app.component.css']
})
export class SwatTableComponent implements OnInit {

  tableData : StationCompliance[];

  errorMessage: string;

  stationResults: Array<string> = new Array<string>();

  selectedResult;

  constructor(private stationService : StationComplianceService) { 
    this.stationResults.push('ALL');
  }

  ngOnInit() {
      this.getTableData();
      console.log(this.stationResults);
      
  }

  getTableData() {
    this.stationService.subscribeToComplianceService()
      .subscribe(
        tableData =>{
            this.tableData = tableData;
            this.tableData.map((stationCompliance) => {
              var date = new Date(1000 * (stationCompliance.date));
              stationCompliance.date = date.toLocaleString();
              //add the possible station results to the Array;
              if(!this.stationResults.includes(stationCompliance.result)){
                this.stationResults.push(stationCompliance.result);
              }
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

  filterBy(field, value){
    debugger;
    console.log(field, value);
  }

}
