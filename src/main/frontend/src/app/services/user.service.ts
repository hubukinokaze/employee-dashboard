import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders } from "@angular/common/http";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import * as _ from 'lodash';

@Injectable()
export class UserService {
  private userUrl: string;

  public constructor(private http: HttpClient){
    this.userUrl = `${window.location.origin}${window.location.pathname}api/user`;
  }

  public login(username: string, password: string) {
    // update url
    let loginUrl = `${this.userUrl}/login`;

    // create headers
    let headers = new HttpHeaders({'Content-Type': 'application/json'});

    // create body
    let body = {
      username: username,
      password: password
    }

    // make api get call
    return this.http.post(loginUrl, body, {headers: headers})
      .map(res => {
        return _.values(res);
      });
  }

  public createUser(user) {
    // create headers
    let headers = new HttpHeaders({'Content-Type': 'application/json'});

    // make api get call
    return this.http.post(this.userUrl, user, {headers: headers})
      .map(res => {
        return _.values(res);
      });
  }

  public getUser(id) {
    // update url
    let getUserIdUrl = `${this.userUrl}/${id}`;

    // create headers
    let headers = new HttpHeaders({'Content-Type': 'application/json'});

    // make api get call
    return this.http.get(getUserIdUrl, {headers: headers})
      .map(res => {
        return _.values(res);
      });
  }

  public getUsers() {
    // update url
    let getUserUrl = `${this.userUrl}s`;

    // create headers
    let headers = new HttpHeaders({'Content-Type': 'application/json'});

    // make api get call
    return this.http.get(getUserUrl, {headers: headers})
      .map(res => {
        return _.values(res);
      });
  }

  public setUser(id, body) {
    // update url
    let setUserIdUrl = `${this.userUrl}/${id}`;

    // create headers
    let headers = new HttpHeaders({'Content-Type': 'application/json'});

    // make api get call
    return this.http.put(setUserIdUrl, body,{headers: headers})
      .map(res => {
        return _.values(res);
      });
  }

  public deleteUser(id) {
    // update url
    let deleteUserUrl = `${this.userUrl}/${id}`;

    // create headers
    let headers = new HttpHeaders({'Content-Type': 'application/json'});

    // make api get call
    return this.http.delete(deleteUserUrl, {headers: headers})
      .map(res => {
        return _.values(res);
      });
  }

}
