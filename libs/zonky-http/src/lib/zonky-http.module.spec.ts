import { async, TestBed } from '@angular/core/testing';
import { ZonkyHttpModule } from './zonky-http.module';

describe('ZonkyHttpModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ZonkyHttpModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(ZonkyHttpModule).toBeDefined();
  });
});
