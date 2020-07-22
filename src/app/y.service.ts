import { Injectable } from '@angular/core';
import {HttpClient,HttpParams} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class YService {
  private _url:string="https://api.github.com/search/users?q=";
  constructor(private http:HttpClient) { }
  searchUser1(value:string){
    return this.http.get(this._url+value);
  }

  highToLow(user:string)
  {
    let params = new HttpParams();
    params = params.append('sort', 'id');
    params = params.append('order', 'desc');
    return this.http.get("https://api.github.com/search/users?q="+user,{params: params});
  }
  userDetail(username:string)
  {
     return this.http.get("https://api.github.com/users/"+username);
  }
  getnextpage(user:string,count:any)
  {
    return this.http.get(this._url+user+"&page="+count);
  }
}