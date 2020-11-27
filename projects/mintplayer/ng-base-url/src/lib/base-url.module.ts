import { NgModule } from '@angular/core';

@NgModule({
  declarations: [],
  imports: [],
  providers: [
    { provide: 'BASE_URL', useFactory: () => document.getElementsByTagName('base')[0].href.slice(0, -1) }
  ],
  exports: []
})
export class BaseUrlModule { }
