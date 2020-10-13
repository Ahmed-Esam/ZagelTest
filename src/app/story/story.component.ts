
import { Component, OnInit } from '@angular/core';
import { apiService } from 'src/app/services/api.service';
import { SwiperOptions } from 'swiper';

@Component({
  selector: 'app-story',
  templateUrl:'./story.component.html',
  styleUrls: ['./story.component.css']
})
export class StoryComponent implements OnInit {
  config1: SwiperOptions = {
            direction: 'horizontal',
            slidesPerView: 1,
            slideToClickedSlide: true,
            mousewheel: true,
            watchSlidesProgress: false,
            keyboard: true,
            centeredSlides: false,
            loop: false,
            roundLengths: true,
            slidesOffsetBefore: 0,
            slidesOffsetAfter: 0,
            spaceBetween: 5,
            observer:true,
    autoplay: {
      delay: 6000,
      disableOnInteraction: true
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      1024: {
        slidesPerView: 17
      },
      900: {
        slidesPerView: 8
      },
      700: {
        slidesPerView: 6
      },
      600: {
        slidesPerView: 5
      },
      400: {
        slidesPerView: 5
      }
    },
  };

  stories: any[];
  constructor(postsDetails: apiService) {
    postsDetails.getStories().subscribe( res => {
      // console.log(res);
        this.stories = res;
        // console.log('object :>> ', this.stories);
    },err => {
      console.log(err);
    })

    }

  ngOnInit(): void {

  }

}
