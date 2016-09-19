import { Component, OnInit } from '@angular/core';
import { CHART_DIRECTIVES } from 'angular2-highcharts';


@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.css']
})
export class GraphComponent implements OnInit {
    options;
  constructor() {
    this.options = {
      title : {text: 'Simple Chart'},
      series: [{
        data: [29.9, 71.5, 106.4, 129.2]
      }]
    }
  }

  ngOnInit() {
  }

}
