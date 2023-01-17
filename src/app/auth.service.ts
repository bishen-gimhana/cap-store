import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of, Subject, throwError } from 'rxjs';
import {switchMap , catchError } from 'rxjs/operators';
import {User}from './user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
 private user$ = new Subject<User>();
 private apiUrl ='/api/auth/';
 constructor(private httpCilent: HttpClient){}
 
  
  login(email: string, password: string) {
    const loginCredentials = {email,  password};
    console.log('login credentials',
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
  return this.httpCilent.post<User>(`${this.apiUrl}register`,user).pipe
  (
     switchMap(savedUser=>{
     this.setUser(savedUser);
     console.log( `user registered successfully`,savedUser);
     return of(savedUser);

     }),
     catchError (e=> {
      console.log(`server error occured`,e);
      return throwError(`Registration failed please contact to admin`);
     }) 
  );
    }

 private setUser(user){ 
  this.user$.next(user);

}
}