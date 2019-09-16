import { Injectable, HttpService } from '@nestjs/common';
import { map } from 'rxjs/operators';
import { environment } from '../environments/environment';

@Injectable()
export class AppService {

  constructor(private http: HttpService) { }

  getAverageAmount(ratingType: string) {
    const url = environment.apiUrl + 'loans/marketplace?rating__eq=' + ratingType;
    return this.http.get(url).pipe(
      map(x => x.data)
    );
  }
}
