import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {MathResult} from '../models/math-result';

@Injectable()
export class MathService {
    constructor(private http: Http) {

    }

    sum(a: string, b: string): Promise<MathResult> {
        return this.http.get('/sum?a=' + a.trim() + '&b=' + b.trim())
            .toPromise()
            .then(response => {
                return response.json() as MathResult;
            })
            .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }
}
