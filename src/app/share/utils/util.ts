import { environment } from 'src/environments/environment';

export class Util {

    public setSecureStorage( sKey: string, oValue: any ){

        oValue = this.stringjson(oValue);

        window.localStorage.setItem(sKey, oValue);

    }

    public getSecureStorage( sKey: string ): any {

        let data = window.localStorage.getItem(sKey);

        data = this.parsejson(data);

        return data;

	}
	public removeSecureStorage(sKey: string) {

		window.localStorage.removeItem(sKey);
	}

    private stringjson(vValue:any) {

        let value =  vValue!=undefined && vValue!=null ? JSON.stringify(vValue) : "";
        return value;

    }

    private parsejson (vValue:any) {

        let retValue;

        if ( vValue != undefined && vValue.slice(0, 1) != "0" && vValue != "" ) {
            retValue = JSON.parse(vValue);
        }else{
            retValue = vValue;
        }

        return retValue;
    }
}
