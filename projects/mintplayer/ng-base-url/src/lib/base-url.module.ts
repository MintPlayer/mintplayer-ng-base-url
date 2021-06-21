import { CommonModule } from '@angular/common';
import { NgModule, Optional } from '@angular/core';
import { SERVER_SIDE } from '@mintplayer/ng-server-side';
import { BASE_URL } from './providers';
import { BrowserBaseUrlProvider } from './providers/browser-base-url.provider';
import { ServerBaseUrlProvider } from './providers/server-base-url.provider';

// ALL PARAMETERS ARE BEING EVALUATED HERE RIGHTAWAY, NOT JUST AT THE TIME THEY'RE NEEDED
export function getBaseUrl(browserBaseUrlProvider: BrowserBaseUrlProvider, serverBaseUrlProvider: ServerBaseUrlProvider, serverSide?: boolean) {
  if (serverSide === null) {
    return browserBaseUrlProvider.getBaseUrl();
  } else if (serverSide) {
    return serverBaseUrlProvider.getBaseUrl();
  } else {
    return browserBaseUrlProvider.getBaseUrl();
  }
};

@NgModule({
  declarations: [],
  imports: [CommonModule],
  exports: [],
  providers: [
    { provide: BASE_URL, useFactory: getBaseUrl, deps: [BrowserBaseUrlProvider, ServerBaseUrlProvider, [new Optional(), SERVER_SIDE]] },
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