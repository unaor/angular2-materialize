import { Injectable } from '@angular/core';

import { Http, Response } from '@angular/http';

import {Observable} from 'rxjs/Rx';

// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class UserDetailsService {

  private url = '/api/read/userDetails';

  constructor(private http : Http) {
    console.log('Started UserDetails service');
   }

   getUserDetails() : Observable<String> {
     return this.http.get(this.url)
      .map((res:Response) => res.text())
      .catch((error:any) => Observable.throw(error.json().error || 'Server Error'));
   }

}
