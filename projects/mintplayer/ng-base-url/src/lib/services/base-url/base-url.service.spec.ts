import { TestBed } from '@angular/core/testing';
import { BASE_URL } from '../../providers/base-url.provider';
import { BaseUrlService } from './base-url.service';

describe('BaseUrlService', () => {
  let service: BaseUrlService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
      ],
      providers: [
        { provide: BASE_URL, useValue: 'http://example.test' },
        { provide: BaseUrlService, useClass: BaseUrlService },
      ]
    });
    service = TestBed.inject(BaseUrlService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return the correct base url', () => {
    let baseUrl = service.getBaseUrl();
    expect(baseUrl).toBe('http://example.test');
  });
});
