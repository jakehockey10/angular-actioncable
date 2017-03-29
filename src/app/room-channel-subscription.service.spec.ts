import { TestBed, inject } from '@angular/core/testing';

import { RoomChannelSubscriptionService } from './room-channel-subscription.service';

describe('RoomChannelSubscriptionService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RoomChannelSubscriptionService]
    });
  });

  it('should ...', inject([RoomChannelSubscriptionService], (service: RoomChannelSubscriptionService) => {
    expect(service).toBeTruthy();
  }));
});
