import { Component, OnInit } from '@angular/core';
import { apiService } from 'src/app/services/api.service';
import { SwiperOptions } from 'swiper';
import * as moment from 'moment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent  implements OnInit   {


constructor(private postsDetails: apiService) {

  }

  ngOnInit (){
  }

 }
