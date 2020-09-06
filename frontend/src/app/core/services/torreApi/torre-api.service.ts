import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class TorreApiService {


  readonly url: string ='http://'+ window.location.hostname +':3000/api/external/torreApi';

 
  // - GET https://torre.bio/api/bios/$username 
  // https://torre.bio/api/bios/$fernanj2323



 

  // - (search for jobs and people in general, you can see how it's being used here: https://torre.co/search).

   constructor(private http: HttpClient) { 
 
    }
 
 
   public getBioByUserName(username){
     return this.http.get(this.url + '/bios/' + username);
   }
 
   public getPeopleByName(name){
    const array = ({
      name: name
    })
     return this.http.post(this.url + '/getPeopleByName' , array );
   }
}
