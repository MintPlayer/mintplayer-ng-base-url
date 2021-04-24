import { Component, Inject } from '@angular/core';
import { BASE_URL } from '@mintplayer/ng-base-url';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(@Inject(BASE_URL) baseUrl: string) {
    this.baseUrl = baseUrl;
  }

  title = 'demo';
  baseUrl: string;
}
