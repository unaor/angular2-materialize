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

  constructor(private stationService : StationComplianceService) { }

  ngOnInit() {
    this.getStationTypes();
  }

  getStationTypes(){
    this.stationService.getStationsType()
      .subscribe(
        graphData => {
          this.graphData = graphData;
          console.log(this.graphData);
          this.options = {
            chart : {type: 'pie',
                    plotShadow: true
            },
            plotOptions : {
              showInLegend: true
            },
            title : {text: 'Station Types'},
            series: [{
              data: this.graphData
            }]
          }
        },
        error => this.errorMessage = <any>error
      );
  }

}
