import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import {Observable} from 'rxjs/Rx';

// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { StationCompliance } from './model/StationCompliance';


@Injectable()
export class StationComplianceService {

  private url = '../assets/data/compliance.json';
  //private url = '/api/read/stationCompliance';

  allData: StationCompliance[] = new Array<StationCompliance>();
  allData$: BehaviorSubject<StationCompliance[]>;

  constructor(private http : Http) {
    this.initializeStationComplianceService();
    console.log('Started Station compliance service');
   }

   initializeStationComplianceService() {
        if (!this.allData$) {
          this.allData$ = <BehaviorSubject<StationCompliance[]>> new BehaviorSubject(new Array<StationCompliance>());

          this.http.get(this.url)
            .map((res:Response) => res.json())
            .catch((error:any) => Observable.throw(error.json().error || 'Server Error'))
            .subscribe(
              allData => {
                this.allData = allData;
                this.allData$.next(allData);
              },
              error => console.log("Error subscribing to StationComplianceService: " + error)
            );
        }
      }

    subscribeToComplianceService(): Observable<StationCompliance[]> {
      return this.allData$.asObservable();
    }
}
