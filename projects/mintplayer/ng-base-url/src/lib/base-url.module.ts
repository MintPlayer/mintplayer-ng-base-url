import { CommonModule, DOCUMENT } from '@angular/common';
import { Inject, Injectable, NgModule, Optional } from '@angular/core';
import { SERVER_SIDE } from '@mintplayer/ng-server-side';
import { BootFuncParams } from './interfaces/boot-func-params';
import { BASE_URL, BOOT_FUNC_PARAMS, BROWSER_TEST_STRING, SERVER_TEST_STRING, TEST_STRING } from './providers';

export function getTestString(browserTestString: string, serverTestString: string, serverSide?: boolean) {
  if (serverSide === null) {
    return 'No test string';
  } else if (serverSide) {
    return serverTestString;
  } else {
    return browserTestString;
  }
}

export function getBrowserTestString() {
  return 'Browser Test String'
}

export function getServerTestString(bootFuncParams?: BootFuncParams) {
  return 'Server Test String';
}

// ALL PARAMETERS ARE BEING EVALUATED HERE RIGHTAWAY, NOT JUST AT THE TIME THEY'RE NEEDED
export function getBaseUrl(browserBaseUrlProvider: BrowserBaseUrlProvider, serverBaseUrlProvider: ServerBaseUrlProvider, serverSide?: boolean) {
  console.log('SERVER_SIDE value', serverSide);
  if (serverSide === null) {
    return browserBaseUrlProvider.getBaseUrl();
  } else if (serverSide) {
    return serverBaseUrlProvider.getBaseUrl();
  } else {
    return browserBaseUrlProvider.getBaseUrl();
  }
};

@Injectable({
  providedIn: 'root'
})
export class BrowserBaseUrlProvider {

  constructor(@Inject(DOCUMENT) document: any) {
    this.document = document;
  }

  private document: Document;

  public getBaseUrl() {
    let baseHref = this.document.getElementsByTagName('base')[0].href;
    if (baseHref.endsWith('/')) {
      return baseHref.slice(0, -1);
    } else {
      return baseHref;
    }
  }
}

@Injectable({
  providedIn: 'root'
})
export class ServerBaseUrlProvider {
  constructor(@Inject(BOOT_FUNC_PARAMS) private bootFuncParams: BootFuncParams) {
  }

  public getBaseUrl() {
    if (this.bootFuncParams === null) {
      return null;
    } else {
      return this.bootFuncParams.origin + this.bootFuncParams.baseUrl.slice(0, -1);
    }
  }
}

@NgModule({
  declarations: [],
  imports: [CommonModule],
  exports: [],
  providers: [
    { provide: BrowserBaseUrlProvider, useClass: BrowserBaseUrlProvider },
    { provide: ServerBaseUrlProvider, useClass: ServerBaseUrlProvider },
    { provide: BASE_URL, useFactory: getBaseUrl, deps: [BrowserBaseUrlProvider, ServerBaseUrlProvider, [new Optional(), SERVER_SIDE]] },

    { provide: TEST_STRING, useFactory: getTestString, deps: [BROWSER_TEST_STRING, SERVER_TEST_STRING, [new Optional(), SERVER_SIDE]] },
    { provide: BROWSER_TEST_STRING, useFactory: getBrowserTestString },
    { provide: SERVER_TEST_STRING, useFactory: getServerTestString, deps: [[new Optional(), BOOT_FUNC_PARAMS]] },
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