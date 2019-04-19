/**
 * Created by jayhamilton on 2/7/17.
 */
import {Injectable} from '@angular/core';

import {Observable} from 'rxjs';
import {EndPoint} from './endpoint.model';
import {HttpClient} from '@angular/common/http';


@Injectable()
export class EndPointService {


    constructor(private _http: HttpClient) {
    }

    getEndPoints() {
        if (localStorage.getItem('endpoint') == null) {

             // assets/api/chart-mock-bar-model.json
             
            return new Observable(observer => {
                const base = {endPoint: []};
                localStorage.setItem('endpoint', JSON.stringify(base));
                observer.next(base);
                return () => {
                };
            });
        } else {

            return new Observable(observer => {
                const data = JSON.parse(localStorage.getItem('endpoint'));
                observer.next(data);
                return () => {
                };
            });

        }
    }

    saveEndPoint(endpoint: any) {

        return new Observable(observer => {

            localStorage.setItem('endpoint', JSON.stringify(endpoint));
            observer.next({});
            return () => {
            };

        });

    }
}
