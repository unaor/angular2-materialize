import { Component, OnInit } from '@angular/core';
import { StationComplianceService } from '../station-compliance.service';

@Component({
  selector: 'app-swat-table',
  templateUrl: './swat-table.component.html',
  styleUrls: ['./swat-table.component.css']
})
export class SwatTableComponent implements OnInit {

  constructor(private stationService : StationComplianceService) { }

  ngOnInit() {
  }

}
