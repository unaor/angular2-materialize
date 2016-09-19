import { Component, OnInit } from '@angular/core';
import { CHART_DIRECTIVES } from 'angular2-highcharts';

import { StationComplianceService } from '../station-compliance.service';

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.css']
})
export class GraphComponent implements OnInit {

  graphData;

  errorMessage: string;

  options;

  constructor(private stationService : StationComplianceService) {

  }

  ngOnInit() {
    this.getUpDownStations();

  }

  getUpDownStations(){
    this.stationService.getUpDownStations()
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
            title : {text: 'Up and Down devices'},
            series: [{
              data: this.graphData
            }]
          }
        },
        error => this.errorMessage = <any>error
      );
  }
}
