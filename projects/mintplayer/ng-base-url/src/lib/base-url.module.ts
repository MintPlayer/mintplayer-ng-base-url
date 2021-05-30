import { NgModule } from '@angular/core';
import { BASE_URL } from './providers/base-url.provider';

export function getBaseUrl() {
  let baseHref = document.getElementsByTagName('base')[0].href;
  if (baseHref.endsWith('/')) {
    return baseHref.slice(0, -1);
  } else {
    return baseHref;
  }
};

@NgModule({
  declarations: [],
  imports: [],
  exports: [],
  providers: [
    { provide: BASE_URL, useFactory: getBaseUrl }
  ]
})
export class BaseUrlModule {
  // static forRoot() : ModuleWithProviders<BaseUrlModule> {
  //   return {
  //     ngModule: BaseUrlModule,
  //     providers: [
  //       { provide: BASE_URL, useFactory: getBaseUrl }
  //     ]
  //   }
  // }
}
