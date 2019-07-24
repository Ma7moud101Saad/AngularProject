import { Injectable } from '@angular/core';
import { User } from './user';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  formData:User;
  readonly routeUrl= "http://localhost:51823/api";
  constructor(private _http: HttpClient) { }

//--------------------Register----------------------------------------------------
  postUser(formData: User)
  {
    return this._http.post(this.routeUrl + '/Register', formData);
  }
  //------------------------------Authentication login----------------------------
  userAuthentication(Name,Password)
  {
      var data="Username="+Name+"&Password="+Password+"&grant_type=password";
      var reqHeader = new HttpHeaders({'Content-Type':'application/x-www-form-urlencoded'});
      return this._http.post('http://localhost:51823/token',data,{headers:reqHeader});
  }
  //-------------------------Get User claims--------------------------------------
  getUserClaims()
  {
      return this._http.get('http://localhost:51823/api/GetUserClaims',
      {headers:new HttpHeaders({'Authorization':'bearer '+localStorage.getItem('userToken')})});
  }
  //------------------------------------------------------------------------------
}
