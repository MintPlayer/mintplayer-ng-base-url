import { DOCUMENT } from "@angular/common";
import { Inject, Injectable } from "@angular/core";

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