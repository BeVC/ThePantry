// ANGULAR
import { Injectable } from '@angular/core';
import { Headers, Http, Response } from "@angular/http";

// RXJS
import { Subject } from "rxjs/Subject";
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';
import "rxjs/Rx";

// SERVICE
import { ApiService } from "../../shared/service/api.service"

// MODELS
import { User } from '../../models/user';
import { Apiresponse } from "../../models/apiresponse"

@Injectable()
export class LoginService {

  //private usersUrl = "app/users";
  private usersUrl = "http://localhost:4800/api/users";
  constructor(
    private http: Http,
    private api: ApiService
  ) { }

  getUsers(): Observable<Apiresponse<User[]>> {
    /*return this.http.get(this.usersUrl)
      .map(this.extractData)
      .catch(this.handleError);*/
    let path = "users";
    return this.api.getAsync<User[]>(path);

  }

  getUser(email: string, password: string): Observable<Apiresponse<User>> {
    //let url = `${this.usersUrl}?email=${email}&password=${password}`
    /*let url = this.usersUrl + "/" + email + "/" + password;
    return this.http.get(url)
      .map((response) => {
        return this.mapToApiResponse(response);
      })
      .do(response => {
        response;
      })
      .catch(this.handleError)*/

    let path = "users/" + email + "/" + password;
    return this.api.getAsync<User>(path);
  }

  /*getUsers(): Promise<User[]> {
    return this.http.get(this.usersUrl)
      .toPromise()
      .then(response => response.json().data as User[])
      .catch(this.handleError);
  }*/

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


    retour.data = JSON.parse(response["_body"]);

    return retour;
  }
}
