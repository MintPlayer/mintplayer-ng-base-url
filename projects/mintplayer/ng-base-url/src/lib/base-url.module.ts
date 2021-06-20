import { DOCUMENT, isPlatformBrowser, isPlatformServer } from '@angular/common';
import { NgModule, Optional, PLATFORM_ID } from '@angular/core';
import { BootFuncParams } from './interfaces/boot-func-params';
import { BOOT_FUNC_PARAMS, BROWSER_BASE_URL, SERVER_BASE_URL } from './providers';
import { BASE_URL } from './providers/base-url.provider';

export function getBaseUrl(platformId: object, browserBaseUrl: string, serverBaseUrl: string) {
  if (isPlatformServer(platformId)) {
    return serverBaseUrl;
  } else if (isPlatformBrowser(platformId)) {
    return browserBaseUrl;
  } else {
    return null;
  }
};

export function getBrowserBaseUrl(doc: Document) {
  let baseHref = doc.getElementsByTagName('base')[0].href;
  if (baseHref.endsWith('/')) {
    return baseHref.slice(0, -1);
  } else {
    return baseHref;
  }
}

export function getServerBaseUrl(bootFuncParams: BootFuncParams) {
  if (bootFuncParams === null) {
    return null;
  } else {
    return bootFuncParams.origin + bootFuncParams.baseUrl.slice(0, -1);
  }
}

@NgModule({
  declarations: [],
  imports: [],
  exports: [],
  providers: [
    { provide: BASE_URL, useFactory: getBaseUrl, deps: [PLATFORM_ID, BROWSER_BASE_URL, SERVER_BASE_URL] },
    { provide: BROWSER_BASE_URL, useFactory: getBrowserBaseUrl, deps: [DOCUMENT] },
    { provide: SERVER_BASE_URL, useFactory: getServerBaseUrl, deps: [[new Optional(), BOOT_FUNC_PARAMS]] },
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
