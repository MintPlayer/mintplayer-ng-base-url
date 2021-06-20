import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
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
      origin: 'localhost:4200',
      baseUrl: 'http://localhost:4200/'
    }
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
