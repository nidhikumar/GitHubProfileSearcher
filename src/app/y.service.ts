// import { Injectable } from '@angular/core';
// import {HttpClient} from '@angular/common/http'
// @Injectable({
//   providedIn: 'root'
// })
// export class YService {
//   private _url:string="https://api.github.com/search/users?q=";
//   constructor(private http:HttpClient) { }
//   searchUser1(value:string){
//     return this.http.get(this._url+value);
//   }
// }



import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class YService {
  public val="";
  private _url:string="https://api.github.com/search/users?q=";
  constructor(private http:HttpClient) { }
  searchUser1(value:string){
    this.val=value;
    return this.http.get(this._url+value);
  }
  hightolow()
  {
    return this.http.get(this._url+this.val+'&sort=score&direction=desc');
  }
  lowtohigh()
  {
    return this.http.get(this._url+this.val+'&sort=score&direction=asc');

  }
}