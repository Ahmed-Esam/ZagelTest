import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { apiService } from 'src/app/services/api.service';
import { SocialAuthService } from "angularx-social-login";
import { FacebookLoginProvider, GoogleLoginProvider } from "angularx-social-login";
import { SocialUser } from "angularx-social-login";
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: SocialUser;
  loggedIn: boolean;
  Details:any;
  RegestertionNew:any
  returnUrl: string;
  emailRegtest:any;
  IdRegtest:any;
  cookieValue:any;
  constructor(private authService: SocialAuthService,
    private accountDetails: apiService,
    private router: Router,
    private cookieService: CookieService) {}

  ngOnInit() {
    this.authService.authState.subscribe((user) => {
      this.user = user;
      this.loggedIn = (user != null);
    });
    //this.requestPost();
  }
  Regestertion(emailRegtest,Google, IdRegtest): void{
    this.accountDetails.getRegestertion(emailRegtest,'Google',IdRegtest).subscribe( res => {
      this.RegestertionNew = res;

      console.log(this.Details.AuthToken , 'AuthToken');
      console.log(this.Details.MemberID , 'Regestertion');

    },error => {
      console.log(error.Message,'Regestertion');
    })
  }

  requestPost(Loginemail,email,Google, user_id): void{
    this.accountDetails.getgoogleAccount(Loginemail).subscribe( res => {
      this.Details = res;
      console.log(this.Details.AuthToken , 'AuthToken');
      console.log(this.Details.MemberID , 'login');
    },err => {
      this.Regestertion(this.emailRegtest,"Google", this.IdRegtest)
    })
  }

  signInWithGoogle(): void {

    //let self = this;
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID).then(
      // function(x){
      //   console.log(x)
      //   self.requestPost()
      // }

      (x) => {
        this.emailRegtest = x.email;
        this.IdRegtest = x.id;
        this.requestPost(x.email,x.email,"Google", x.id)
        //this.router.navigateByUrl('/');
        // console.log(x)
      })

  }

  signInWithFB(): void {
    this.authService.signIn(FacebookLoginProvider.PROVIDER_ID).then(x => console.log(x));;
  }

  signOut(): void {
    this.authService.signOut();
  }
}
