import { Component, OnInit } from '@angular/core';
import { CHART_DIRECTIVES } from 'angular2-highcharts';

import { StationComplianceService } from '../station-compliance.service';


@Component({
  selector: 'app-up-down-graph',
  templateUrl: './up-down-graph.component.html',
  styleUrls: ['./up-down-graph.component.css']
})
export class UpDownGraphComponent implements OnInit {

  graphData;

  errorMessage: string;

  options;

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
            chart: {
                plotBackgroundColor: null,
                plotBorderWidth: null,
                plotShadow: false,
                type: 'pie',
                width: 250,
                height: 250,
                marginTop: 0,
                marginLeft: 0,
                marginRight: 0,
                marginBottom:50
            },
            tooltip: {
                pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
            },
            legend: {
              width: 230,
              align: 'center',
              float: true,
              x: 0,
              y: 10
            },
            plotOptions: {
                pie: {
                    allowPointSelect: true,
                    cursor: 'pointer',
                    dataLabels: {
                        enabled: false
                    },
                    showInLegend: true
                }
            },
            title : {text: null},
            series: [{
              data: this.processStationType(this.graphData)
            }]
          }
        },
        error => this.errorMessage = <any>error
      );
  }

  private processStationType(rawData){
    var result = [{name: 'Up Devices', y: 0}, {name: 'Down Devices', y: 0}];
    rawData.forEach(x =>{
       if(x.status == 'up'){
         result[0].y++;
       }
       else {
         result[1].y++;
       }
    })
    return result;
  }

}
