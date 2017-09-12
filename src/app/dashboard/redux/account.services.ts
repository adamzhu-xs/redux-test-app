import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';

const URL = 'http://localhost:3000/api/accounts';

@Injectable()
export class AccountAPIService {
    constructor(private http: Http) { }

    getAll = (): Observable<any[]> => {
        return this.http.get(URL)
            .map(resp => resp.json());
    }

}
