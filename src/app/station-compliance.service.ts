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

  private stationTypes = ['Computer', 'ManagedRouter', 'ManagedSwitch', 'MobileAndroid', 'Printer', 'Storage', 'Unknown', 'Windows_Computer'];

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

   getStationsType() :  Observable<StationCompliance []>{
     var result = {};
     return this.http.get(this.url)
        .map((res:Response) => res.json().map(
          (stationCompliance) => {
            var stationType  = this.stationTypes[this.stationTypes.indexOf(stationCompliance.stationType)];
            if(!result.stationType){
              result.push({result[stationType]: stationType, name: stationType, y: 1});
            } else {
              result.stationType.y++;
            }
          }
        ))
        .catch((error:any) => Observable.throw(error.json().error || 'Server Error'));
   }
}
