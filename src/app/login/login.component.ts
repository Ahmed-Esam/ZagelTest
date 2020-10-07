import { Component, OnInit } from '@angular/core';
import { apiService } from 'src/app/services/api.service';
import { SocialAuthService } from "angularx-social-login";
import { FacebookLoginProvider, GoogleLoginProvider } from "angularx-social-login";
import { SocialUser } from "angularx-social-login";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: SocialUser;
  loggedIn: boolean;
  Details:any;
  constructor(private authService: SocialAuthService, private accountDetails: apiService) {

   }

  ngOnInit() {
    this.authService.authState.subscribe((user) => {
      this.user = user;
      this.loggedIn = (user != null);
    });
    //this.requestPost();
  }
  requestPost(): void{
    this.accountDetails.getgoogleAccount().subscribe( res => {
      this.Details = res;
      console.log('x');
    },err => {
      console.log(err);
    })
  }
  signInWithGoogle(): void {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID).then(
      () => {
        x => console.log(x)
        this.requestPost();
      })
  }

  signInWithFB(): void {
    this.authService.signIn(FacebookLoginProvider.PROVIDER_ID).then(x => console.log(x));;
  }

  signOut(): void {
    this.authService.signOut();
  }
}
