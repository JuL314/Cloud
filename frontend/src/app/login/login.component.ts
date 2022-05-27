import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from '../message/message.service';
import { AuthServiceService } from '../auth-service.service';
import { TestBed } from '@angular/core/testing';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  name = "";
  psw = "";
  errorMessage="";

  constructor(private service:AuthServiceService,
     private router:Router) {  }

  ngOnInit(): void {
  }

  affiche(){
    if(this.name=="" || this.psw==""){
      this.errorMessage= "Veuillez remplir les champs ci-dessus";
    }
    this.service.sendAuthentication(this.name,this.psw).subscribe(
      resultat =>{
        if(resultat.data.reason){
          this.errorMessage=resultat.data.reason;
        }
        else this.router.navigateByUrl('/cours');
        this.service.finalizeAuthentication(resultat);
      }
    );
  }
}
