import { TestBed } from '@angular/core/testing';

import { ApiInterceptors } from './api.interceptor';

describe('DashboardInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      ApiInterceptors
      ]
  }));

  it('should be created', () => {
    const interceptor: ApiInterceptors = TestBed.inject(ApiInterceptors);
    expect(interceptor).toBeTruthy();
  });
});
