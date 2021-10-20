import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';
import { JwtToken } from '../auth/models/jwt.model';
import { Login } from '../auth/models/login.model';
import { PublisherAuthService } from '../shared/publisher.auth.service';
import { PublisherService } from '../shared/publisher.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
 
})
export class LoginComponent implements OnInit, OnDestroy{

  username: string = "";
  password: string = "";
  warnNotAuthorized: Boolean = false;

  constructor( private publisherService: PublisherService,
               private publisherAuthService: PublisherAuthService,
               private router: Router, 
               private authService: AuthService){
  }

  ngOnInit(): void {
    this.publisherService.notifyHeader(true);
    this.publisherAuthService.eventEmitter.subscribe(
      data => {
        this.warnNotAuthorized = !data;}
    )
  }

  ngOnDestroy(): void {
    this.publisherService.notifyHeader(false);
    this.warnNotAuthorized= this.authService.isAuthenticated.value;
  }
  redirect(): void{
    this.router.navigate(['home'])
  }


  login():void{
      const credentials: Login = {
        username: this.username,
        password: this.password
      }
      this.authService.authorize(credentials).subscribe((data:JwtToken) => {
        localStorage.setItem('token', data.token);
        this.router.navigate(['home']);
      })
  }

}
