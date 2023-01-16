import { Component, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from './auth.service';
import { User } from './user';

@Component({
  selector: 'pm-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnDestroy {
 user:User;
 userSubsciption:Subscription;
 
 constructor(private authService:AuthService,
  private router: Router){
    this.userSubsciption=
    this.authService.user.subscribe(user=>(this.user=user));
  }
  
  logout(){
 this.authService.logout();
 this.router.navigate(['/']);
}
ngOnDestroy(): void { 
  if(this.userSubsciption)
 this.userSubsciption.unsubscribe();
}
}