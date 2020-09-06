import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  readonly url: string ='http://'+ window.location.hostname +':3000/api/internal/profile';


  constructor(private http: HttpClient) { 

  }


  public getUsersSelected(){
    return this.http.get(this.url + '/getUsersSelected');
  }
 

  public postUserSelected(userSelected){
      return this.http.post(this.url + '/postUserSelected' , userSelected);
    }


  public putUserSelected(array, id){
      return this.http.put(this.url + '/putUserSelected/' + id, array);
    }

    public deleteUserSelected(id){
      return this.http.delete(this.url + '/deleteUserSelected/' + id);
    }
    
}
