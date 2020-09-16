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


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    StoryComponent,
    FooterComponent,
    ExploreComponent,
    NewsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    MatTabsModule,
    BrowserAnimationsModule,
    SwiperModule
  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
