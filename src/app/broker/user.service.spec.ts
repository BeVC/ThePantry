import { TestBed, inject } from '@angular/core/testing';
import { UserBroker } from './user.service';

describe('UserBroker', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserBroker]
    });
  });

  it('should ...', inject([UserBroker], (service: UserBroker) => {
    expect(service).toBeTruthy();
  }));
});
