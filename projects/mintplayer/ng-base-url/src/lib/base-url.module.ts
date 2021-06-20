import { DOCUMENT } from '@angular/common';
import { NgModule, Optional } from '@angular/core';
import { SERVER_SIDE } from '@mintplayer/ng-server-side';
// import { SERVER_SIDE } from '@mintplayer/ng-server-side';
import { BootFuncParams } from './interfaces/boot-func-params';
import { BOOT_FUNC_PARAMS, BROWSER_BASE_URL, BROWSER_TEST_STRING, SERVER_BASE_URL, SERVER_TEST_STRING, TEST_STRING } from './providers';
import { BASE_URL } from './providers/base-url.provider';

export function getBaseUrl(browserBaseUrl: string, serverBaseUrl: string, serverSide?: boolean) {
  console.log('SERVER_SIDE value', serverSide);
  if (serverSide === null) {
    return browserBaseUrl;
  } else if (serverSide) {
    return serverBaseUrl;
  } else {
    return browserBaseUrl;
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

export function getTestString(browserTestString: string, serverTestString: string, serverSide?: boolean) {
  if (serverSide === null) {
    return 'No test string';
  } else if (serverSide) {
    return serverTestString;
  } else {
    return browserTestString;
  }
}

@NgModule({
  declarations: [],
  imports: [],
  exports: [],
  providers: [
    { provide: BASE_URL, useFactory: getBaseUrl, deps: [BROWSER_BASE_URL, SERVER_BASE_URL, [new Optional(), SERVER_SIDE]] },
    { provide: BROWSER_BASE_URL, useFactory: getBrowserBaseUrl, deps: [DOCUMENT] },
    { provide: SERVER_BASE_URL, useFactory: getServerBaseUrl, deps: [[new Optional(), BOOT_FUNC_PARAMS]] },
    { provide: SERVER_TEST_STRING, useValue: 'Server Test String' },
    { provide: BROWSER_TEST_STRING, useValue: 'Browser Test String' },
    { provide: TEST_STRING, useFactory: getTestString, deps: [BROWSER_TEST_STRING, SERVER_TEST_STRING, [new Optional(), SERVER_SIDE]] },
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
