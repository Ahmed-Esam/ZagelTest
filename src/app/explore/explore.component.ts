import { Component, OnInit } from '@angular/core';
import { apiService } from 'src/app/services/api.service';
import { SwiperOptions } from 'swiper';

@Component({
  selector: 'app-explore',
  templateUrl: './explore.component.html',
  styleUrls: ['./explore.component.css']
})
export class ExploreComponent implements OnInit {
  config2: SwiperOptions = {
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


  posts: any[];
  today: number = Date.now();


  constructor(postsDetails: apiService) {
    postsDetails.getExplorernews().subscribe( res => {
      // console.log(res);
        this.posts = res;
    },err => {
      console.log(err);
    })

    }

  ngOnInit(): void {
  }

}
