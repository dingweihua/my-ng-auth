import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthService {
  constructor(private http: HttpClient) {}

  private loginUrl: string = 'hy_login';

  login(username: string, password: string) {
    return this.http.post<any>(this.loginUrl, { username: username, password: password})
      .map(user => {
        console.log(typeof user);
        return user;
      });
  }

}
