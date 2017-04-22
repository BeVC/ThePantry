//#region Import
// ANGULAR
import { Injectable } from '@angular/core';
import { Headers, Http, Response } from "@angular/http";

// RXJS
import { Observable } from "rxjs/Observable";

// MODELS
import { Apiresponse } from "../../models/apiresponse";
//#endregion

@Injectable()
export class ApiService {

  /*private _headers: Headers = new Headers({
    "Content-Type" :"application/json",
    //"Authorization": "Bearer 123"
  })*/
  private _apiUrl: string = "http://localhost:4800/api";

  constructor(
    private http: Http
  ) { }

  //#region Public Methods
  normalisePath(path, params): string {
    let normalizedPath: string = path;

    for (let key in params) {
      let value = params[key];

      normalizedPath = normalizedPath.replace(":" + key, value);
    }

    return normalizedPath;
  }
  //#endregion

  //#region Private Methods
  private buildHeader(): Headers {
    let headers = new Headers();
    //let token = ///

    headers.append("Content-Type", "application/json");
    //headers.append("Authorization", "Bearer " + ///)

    return headers;
  }

  private mapToApiResponse<T>(response: Response): Apiresponse<T> {
    let retour = new Apiresponse<T>();

    retour.ok = response.ok;
    retour.status = response.status;
    retour.statusText = response.statusText;


    retour.data = JSON.parse(response["_body"]);

    return retour;
  }
  //#endregion

  // GET
  public getAsync<T>(path: string): Observable<Apiresponse<T>> {
    return this.http.get(this._apiUrl + "/" + path, { headers: this.buildHeader() })
      .map((response: Response) => {
        return this.mapToApiResponse(response);
      })
      .do(data => console.log("server data:", data))
      .catch((response: Response) => {
        return Observable.of(this.mapToApiResponse(response));
      }) as Observable<Apiresponse<T>>;

  }

  // POST
  public postAsync<T>(path: string, body: any): Observable<Apiresponse<T>> {
    return this.http.put(this._apiUrl + "/" + path, body, { headers: this.buildHeader() })
      .map((response: Response) => {
        return this.mapToApiResponse(response);
      })
      .do(data => console.log("server data:", data))
      .catch((response: Response) => {
        return Observable.of(this.mapToApiResponse(response));
      }) as Observable<Apiresponse<T>>;
  }
  // PUT
  public putAsync<T>(path: string, body: any): Observable<Apiresponse<T>> {
    return this.http.put(this._apiUrl + "/" + path, body, { headers: this.buildHeader() })
      .map((response: Response) => {
        return this.mapToApiResponse(response);
      })
      .do(data => console.log("server data:", data))
      .catch((response: Response) => {
        return Observable.of(this.mapToApiResponse(response));
      }) as Observable<Apiresponse<T>>;
  }
  // PATCH

  // DELETE
  public deleteAsync<T>(path: string): Observable<Apiresponse<T>> {
    return this.http.get(this._apiUrl + "/" + path, { headers: this.buildHeader() })
      .map((response: Response) => {
        return this.mapToApiResponse(response);
      })
      .do(data => console.log("server data:", data))
      .catch((response: Response) => {
        return Observable.of(this.mapToApiResponse(response));
      }) as Observable<Apiresponse<T>>;

  }
}
