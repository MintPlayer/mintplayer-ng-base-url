import { NgModule, InjectionToken, ModuleWithProviders } from '@angular/core';

export const BASE_URL = new InjectionToken<string>('BaseUrl');

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
