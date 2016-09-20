import { Component, OnInit } from '@angular/core';

import { CHART_DIRECTIVES } from 'angular2-highcharts';

import { StationComplianceService } from '../station-compliance.service';

@Component({
  selector: 'app-station-type-graph',
  templateUrl: './station-type-graph.component.html',
  styleUrls: ['./station-type-graph.component.css']
})
export class StationTypeGraphComponent implements OnInit {

  graphData;

  errorMessage: string;

  options;

  private stationTypes = ['Computer', 'ManagedRouter', 'ManagedSwitch', 'MobileAndroid', 'Printer', 'Storage', 'Unknown', 'Windows_Computer'];

  constructor(private stationService : StationComplianceService) { }

  ngOnInit() {
    this.getStationTypes();
  }

  getStationTypes(){
    this.stationService.getStationCompliance()
      .subscribe(
        graphData => {
          this.graphData = graphData;
          this.options = {
            chart : {type: 'pie',
                    plotShadow: true
            },
            plotOptions : {
              showInLegend: true
            },
            title : {text: 'Station Types'},
            series: [{
              data: this.processStationType(this.graphData)
            }]
          }
        },
        error => this.errorMessage = <any>error
      );
  }

  private processStationType(rawData){
    var result = [];
    rawData.forEach(x =>{
      var index = result.findIndex(y => y.name == x.stationType);
       if(index == -1){
         result.push({name: x.stationType, y: 1});
       }
       else {
         result[index].y++;
       }
    })

    return result;
  }

}
