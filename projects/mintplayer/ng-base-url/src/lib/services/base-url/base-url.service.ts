import { Inject, Injectable } from '@angular/core';
import { BaseUrlModule } from '../../base-url.module';
import { BASE_URL } from '../../providers/base-url.provider';

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
