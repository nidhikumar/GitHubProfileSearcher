import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class YService {
  constructor(private http: HttpClient) { }
     
  getUsers(user :string ){
        
       return this.http.get("https://api.github.com/search/users?q="+ user);

  }
  getSortUser(user:string ){


   return this.http.get("https://api.github.com/search/users?q="+ user+'&sort=score&direction=asc');

  }
  getSortUser1(user:string ){


   return this.http.get("https://api.github.com/search/users?q="+ user+'&sort=score&direction=desc');

  }
 
   getUsername(username : string){
      
       return this.http.get("https://api.github.com/users/"+username);

   }
   getnextpage(user :string ,counter : any){
       
       return this.http.get("https://api.github.com/search/users?q="+ user+"&page=" +counter);

   }

}