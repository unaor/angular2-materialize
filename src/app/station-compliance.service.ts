import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import {Observable} from 'rxjs/Rx';

// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { StationCompliance } from './model/StationCompliance';


@Injectable()
export class StationComplianceService {

  private url = '../assets/data/data.json';
  //private url = '/api/read/stationCompliance';

  constructor(private http : Http) {
    console.log('Started Station compliance service');
   }

   getStationCompliance() : Observable<StationCompliance []> {
     return this.http.get(this.url)
      .map((res:Response) => res.json())
      .catch((error:any) => Observable.throw(error.json().error || 'Server Error'));
   }

   getUpDownStations() :  Observable<StationCompliance []>{
     var downCounter = 0;
     var upCounter = 0;
     return this.http.get(this.url)
        .map((res:Response) => res.json().map(
          (stationCompliance) => {
            if(stationCompliance.status == 'down'){
              downCounter++;
            } else {
              upCounter++;
            }
          }
        ).reduce(
          ()=> {
            return [{name: 'Up Devices', y: upCounter}, {name: 'Down Devices', y: downCounter}];
          }
        ))
        .catch((error:any) => Observable.throw(error.json().error || 'Server Error'));
   }
}
