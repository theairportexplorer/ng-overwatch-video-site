import { TestBed } from '@angular/core/testing';

import { VideoService } from './video.service';

describe('VideoSearchService', () => {
  let service: VideoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VideoService);
  });

  xit('should be created', () => {
    expect(service).toBeTruthy();
  });
});
