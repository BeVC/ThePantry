//#region import
// ANGULAR
import { Injectable } from '@angular/core';
import { Headers, Http, Response } from "@angular/http";

// RXJS
import { Subject } from "rxjs/Subject";
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';
import "rxjs/Rx";

// MODELS
import { Apiresponse } from "../../models/apiresponse"
//#endregion

@Injectable()
export class PantryService {

  private pantryItemsUrl = "app/pantryItems";

  constructor(
    private http: Http
  ) { }

  getPantryItemsAsync(pantryId: string): Observable<Apiresponse<any[]>> {
    return this.http.get(this.pantryItemsUrl)
      .map(response => {
        return this.mapToApiResponse(response);
      })
      .do(response => {
        response;
      })
      .catch(this.handleError)
  }

  private extractData(res: Response) {
    let body = res.json();
    return body.data || {};
  }

  private handleError(error: Response | any) {
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || "";
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ""} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }

  private mapToApiResponse<T>(response: Response): Apiresponse<T> {
    let retour = new Apiresponse<T>();

    retour.ok = response.ok;
    retour.status = response.status;
    retour.statusText = response.statusText;
    retour.data = response["_body"].data;

    return retour;
  }

}
