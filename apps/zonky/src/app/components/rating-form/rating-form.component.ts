import { Component, OnInit, ChangeDetectionStrategy, Output, EventEmitter, Input } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { RatingForm } from '../../forms';
import { RatingFormModel } from '../../models/common';
import { RatingType } from '../../models/types';

@Component({
  selector: 'zonky-rating-form',
  templateUrl: './rating-form.component.html',
  styleUrls: ['./rating-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RatingFormComponent implements OnInit {


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
    this.formGroup = new RatingForm(fb);
  }

  ngOnInit() {
  }

  submit() {
    if (this.formGroup.valid) {
      this.loading = true;
      this.submitted.emit(this.formGroup.value.ratingType);
    } else {
      this.formGroup.markAllAsTouched();
    }
  }

}
