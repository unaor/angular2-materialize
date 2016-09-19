import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';


@Injectable()
export class StationComplianceService {

  private url = '../assets/data/data.json';

  constructor(private Http : http) {
    console.log('Started Station compliance service');
   }

   getStationCompliance() : {
     
   }

}
