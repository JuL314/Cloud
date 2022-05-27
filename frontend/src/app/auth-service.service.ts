import { Injectable } from '@angular/core';
import { UrlTree } from '@angular/router';
import { Observable, tap } from 'rxjs';
import { MessageService, PhpData } from './message/message.service';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  static is_authenticated: boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree>;

  errorMessage="";

  constructor(private messageService:MessageService) { }

  sendAuthentication(name: any, psw: any) : Observable<any>{
    let resul:any;
    return this.messageService.sendMessage("checkLogin",{login:name,password:psw}).pipe(tap(resultat=>
    { }));
  }

  finalizeAuthentication(message: PhpData){
    if(message.data.reason) AuthServiceService.is_authenticated = false;
    else AuthServiceService.is_authenticated = true;
  }
}
