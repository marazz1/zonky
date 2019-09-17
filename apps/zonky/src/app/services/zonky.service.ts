import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpService } from '@zonky/zonky-http';
import { RatingType } from '../models/types';
import { environment } from '../../environments/environment';
import { LoanHttpModel } from '../models/http';

@Injectable()
export class ZonkyService {

    constructor(private http: HttpService) { }

    getAverageAmount(ratingType: RatingType): Observable<number> {
        const url = environment.apiUrl + 'loans/' + ratingType;
        return this.http.get<LoanHttpModel[], number>(url, data => {
            const amounts = data.map(loan => loan.amount);
            const average = (arr: number[]) => arr.reduce((a, b) => a + b, 0) / arr.length;
            return amounts.length > 0 ? average(amounts) : null;
        });
    }
}