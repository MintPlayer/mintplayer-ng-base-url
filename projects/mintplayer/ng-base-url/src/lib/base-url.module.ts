import { NgModule } from '@angular/core';

export function getBaseUrl() {
  return document.getElementsByTagName('base')[0].href.slice(0, -1);
};

@NgModule({
  declarations: [],
  imports: [],
  providers: [
    { provide: 'BASE_URL', useFactory: getBaseUrl }
  ],
  exports: []
})
export class BaseUrlModule { }
