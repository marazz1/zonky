
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

export class RatingForm extends FormGroup {

    constructor(fb: FormBuilder) {
        const temp = fb.group({
            ratingType: fb.control('', [
                Validators.required
            ])
        });
        super(temp.controls, temp.validator, temp.asyncValidator);
    }
}