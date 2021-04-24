import { Inject, Injectable } from '@angular/core';
import { BaseUrlModule, BASE_URL } from './base-url.module';

@Injectable({
  providedIn: BaseUrlModule
})
export class BaseUrlService {

  constructor(@Inject(BASE_URL) private baseUrl: string) {
  }

  public getBaseUrl() {
    return this.baseUrl;
  }

}
