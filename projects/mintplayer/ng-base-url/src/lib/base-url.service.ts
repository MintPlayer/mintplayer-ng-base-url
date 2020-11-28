import { Inject, Injectable } from '@angular/core';
import { BASE_URL } from './base-url.module';

@Injectable({
  providedIn: 'root'
})
export class BaseUrlService {

  constructor(@Inject(BASE_URL) private baseUrl: string) {
  }

  public getBaseUrl() {
    return this.baseUrl;
  }

}
