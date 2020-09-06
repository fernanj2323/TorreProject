import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class TorreApiService {

// ':3000/api/health';
  readonly url: string ='http://'+ window.location.hostname +':3000/api/external/torreApi';

 
  // - GET https://torre.bio/api/bios/$username 
  // https://torre.bio/api/bios/$fernanj2323


  // GET https://torre.co/api/opportunities/$id 
  // - (gets job information of $id)

  // POST https://search.torre.co/opportunities/_search/?[offset=$offset&size=$size&aggregate=$aggregate] 
  // - https://search.torre.co/people/_search/?[offset=$offset&size=$size&aggregate=$aggregate] 

  // - (search for jobs and people in general, you can see how it's being used here: https://torre.co/search).

   constructor(private http: HttpClient) { 
 
    }
 
 
   public getBioByUserName(username){
     return this.http.get(this.url + '/bios/' + username);
   }
 
   public getTestByDate(array){
 
   
     return this.http.post(this.url + '/getTestByDate', array);
   }
}
