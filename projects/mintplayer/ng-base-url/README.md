# @mintplayer/ng-base-url

This package contains a provider to find the base-url of the angular application.

## Installation

    npm install --save @mintplayer/ng-base-url

## Usage

1) Import the BaseUrlModule into your specific application module.
2) Inject the `BASE_URL` provider anywhere you want retrieve the base url

    export class AppComponent {
        constructor(@Inject('BASE_URL') private baseUrl: string) {
        }
    }
