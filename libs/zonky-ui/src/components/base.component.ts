import { OnDestroy } from '@angular/core';
import { Subject, Observable } from 'rxjs';

export class BaseComponent implements OnDestroy {

    private subject: Subject<void> = new Subject();
    protected get baseSubject(): Observable<any> {
        return this.subject.asObservable();
    }

    ngOnDestroy() {
        this.subject.next();
        this.subject.complete();
    }

}
