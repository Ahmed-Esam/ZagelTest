import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import {MatTabsModule} from '@angular/material/tabs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { StoryComponent } from './story/story.component';
import { SwiperModule } from 'ngx-swiper-wrapper';
import { FooterComponent } from './footer/footer.component';
import { ExploreComponent } from './explore/explore.component';
import { NewsComponent } from './news/news.component';
import { LoginComponent } from './login/login.component';

import { SocialLoginModule, SocialAuthServiceConfig } from 'angularx-social-login';
import { GoogleLoginProvider, FacebookLoginProvider} from 'angularx-social-login';
import { CookieService } from 'ngx-cookie-service';
import { SourceComponent } from './source/source.component';
import { SectionComponent } from './section/section.component';
import { NewsCardComponent } from './sheard/news-card/news-card.component';
import { MatchesWidjetComponent } from './sheard/matches-widjet/matches-widjet.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    StoryComponent,
    FooterComponent,
    ExploreComponent,
    NewsComponent,
    LoginComponent,
    SourceComponent,
    SectionComponent,
    NewsCardComponent,
    MatchesWidjetComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    MatTabsModule,
    BrowserAnimationsModule,
    SwiperModule,
    SocialLoginModule
  ],
  providers: [
    CookieService ,
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(
              '1054070388057-f84dsteh0p8tmk2r1roro5lvmmt8e9bc.apps.googleusercontent.com'
            ),
          },
          {
            id: FacebookLoginProvider.PROVIDER_ID,
            provider: new FacebookLoginProvider('196361861052335'),
          }
        ],
      } as SocialAuthServiceConfig,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import {MatTabsModule} from '@angular/material/tabs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { StoryComponent } from './story/story.component';
import { SwiperModule } from 'ngx-swiper-wrapper';
import { FooterComponent } from './footer/footer.component';
import { ExploreComponent } from './explore/explore.component';
import { NewsComponent } from './news/news.component';
import { LoginComponent } from './login/login.component';

import { SocialLoginModule, SocialAuthServiceConfig } from 'angularx-social-login';
import { GoogleLoginProvider, FacebookLoginProvider} from 'angularx-social-login';
import { CookieService } from 'ngx-cookie-service';
import { SourceComponent } from './source/source.component';
import { SectionComponent } from './section/section.component';
import { SearchComponent } from './search/search.component';
import { FormSearchComponent } from './search/form-search/form-search.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    StoryComponent,
    FooterComponent,
    ExploreComponent,
    NewsComponent,
    LoginComponent,
    SourceComponent,
    SectionComponent,
    SearchComponent,
    FormSearchComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    MatTabsModule,
    BrowserAnimationsModule,
    SwiperModule,
    SocialLoginModule
  ],
  providers: [
    CookieService ,
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(
              '1054070388057-f84dsteh0p8tmk2r1roro5lvmmt8e9bc.apps.googleusercontent.com'
            ),
          },
          {
            id: FacebookLoginProvider.PROVIDER_ID,
            provider: new FacebookLoginProvider('196361861052335'),
          }
        ],
      } as SocialAuthServiceConfig,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
