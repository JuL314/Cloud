import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

export interface PhpData{
  status : string;
  data : any;
};

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor(private http : HttpClient) { }

  
  //Php
  sendMessage(url : string, data : any) : Observable<PhpData> {
    let form = new FormData();
    for(const property in data){
      form.append(property,data[property])
    }
 
    return this.http.post<PhpData>(
      environment.urlSite+ url+ '.php', form, {withCredentials:true}
    );

  }

  sendMessageBackendUser(url : string, data : any) : Observable<PhpData> {
    let form = new FormData();
    for(const property in data){
      form.append(property,data[property])
    }
  
    return this.http.post<PhpData>(
      environment.urlSiteTopic+ url+ '.php', form, {withCredentials:true}
    );
  }

  // Node
  /*sendMessage(url : string, data : any) : Observable<any> {

    return this.http.post<any>(
      environment.urlSite+ url, data, {withCredentials:true}
    );
  }*/

}
