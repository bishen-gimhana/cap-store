import { Injectable } from '@angular/core';
import { of, Subject } from 'rxjs';
import {User}from './user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
 private user$ = new Subject<User>();
 constructor(){}
 
  
  login(email: string, password: string) {
    const loginCredentials ={email,password};
    console.log('login creadentials',
    loginCredentials);
    return of (loginCredentials);
  } 
logout(){
// remove user from subject
this.setUser(null);
console.log('user did logout successfull');
}


  get user() {
   return this.user$.asObservable();
  }
  register(user:any){
   //make a api call to save user in db
   //update the user subject
   this.setUser(user);
    console.log('registerd user successfully',user);
    return of(user);
  }
  setUser(user: any) {
    throw new Error('Method not implemented.');
  }
 private server(user){ 
  this.user$.next(user);}
  
 
  
  
 
}
 