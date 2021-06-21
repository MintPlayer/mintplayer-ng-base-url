import { Inject, Injectable } from "@angular/core";
import { BootFuncParams } from "dist/mintplayer/ng-base-url/public-api";
import { BOOT_FUNC_PARAMS } from "./boot-func-params.provider";

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