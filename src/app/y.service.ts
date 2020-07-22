import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class YService {
public val="";
  constructor(public http:HttpClient) { }
getData(users:String)
{
 

  return this.http.get("https://api.github.com/search/users?q="+users);
}
 hightolow(){
  return this.http.get("https://api.github.com/search/users?q="+this.val+'&sort=score&direction=desc');

}
lowtohigh(){
  return this.http.get("https://api.github.com/search/users?q="+this.val+'&sort=score&direction=asc');

}
getSecondApi(user : String)
{
  return this.http.get("https://api.github.com/users/"+user);
}

}
