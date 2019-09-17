import { async, TestBed } from '@angular/core/testing';
import { ZonkyUiModule } from './zonky-ui.module';

describe('ZonkyUiModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ZonkyUiModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(ZonkyUiModule).toBeDefined();
  });
});
