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
