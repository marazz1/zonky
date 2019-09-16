import { Component, OnDestroy } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ZonkyService } from './services';
import { RatingType } from './models/types';

@Component({
  selector: 'zonky-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  average$: Observable<number> = of(null);

  constructor(private zonkyService: ZonkyService) {
  }

  calculateAverage(ratingType: RatingType) {
    this.average$ = this.zonkyService.getAverageAmount(ratingType);
  }
}
