import { Component, OnInit, ChangeDetectionStrategy, Output, EventEmitter, Input } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { BaseComponent } from '@zonky/zonky-ui';
import { RatingForm } from '../../forms';
import { RatingType } from '../../models/types';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'zonky-rating-form',
  templateUrl: './rating-form.component.html',
  styleUrls: ['./rating-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RatingFormComponent extends BaseComponent implements OnInit {

  options = ['A', 'AA', 'AAA', 'AAAA', 'AAAAA', 'AE', 'AAE'];
  formGroup: RatingForm;
  loading = false;
  private _data: number;
  @Input() set data(data: number) {
    this._data = data;
    if (data != null) {
      this.loading = false;
    }
  }
  get data(): number {
    return this._data = this._data;
  }
  @Output() submitted: EventEmitter<RatingType> = new EventEmitter();

  constructor(fb: FormBuilder) {
    super();
    this.formGroup = new RatingForm(fb);
  }

  ngOnInit() {
    this.formGroup.get('ratingType')
      .valueChanges
      .pipe(takeUntil(this.baseSubject))
      .subscribe(x => this.submit(x));
  }

  submit(value: RatingType) {
    this.loading = true;
    this.submitted.emit(value);
  }

}
