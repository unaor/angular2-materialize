import { Injectable } from '@angular/core';

import { Http, Response } from '@angular/http';

import {Observable} from 'rxjs/Rx';

// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { StationStatus } from './model/StationStatus';

@Injectable()
export class StationStatusService {

  private url = '/api/read/stationEnabledServices';
  //private url = '../assets/data/data.json';

  constructor(private http : Http) {
    console.log('Started StationStatus service');
  }

     getStationStatus() : Observable<StationStatus> {
     return this.http.get(this.url)
      .map((res:Response) => res.json())
      .catch((error:any) => Observable.throw(error.json().error || 'Server Error'));
   }

}
