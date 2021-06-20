import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SERVER_SIDE } from '@mintplayer/ng-server-side';
import { BaseUrlModule, BootFuncParams, BOOT_FUNC_PARAMS } from '@mintplayer/ng-base-url';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BaseUrlModule,
    AppRoutingModule
  ],
  providers: [{
    provide: BOOT_FUNC_PARAMS,
    useValue: <BootFuncParams>{
      origin: 'localhost:8000',
      baseUrl: 'http://localhost:8000/'
    }
  }, {
    provide: SERVER_SIDE,
    useValue: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
