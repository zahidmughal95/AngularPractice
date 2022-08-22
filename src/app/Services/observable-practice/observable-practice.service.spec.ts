import { ObservablePracticeService } from './observable-practice.service';
import { TestBed } from '@angular/core/testing';

describe('ObservablePracticeService', () => {
  let service: ObservablePracticeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ObservablePracticeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
