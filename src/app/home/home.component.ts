import { Component, OnInit } from '@angular/core';
import { apiService } from 'src/app/services/api.service';
import { SwiperOptions } from 'swiper';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  config2: SwiperOptions = {
    direction: 'horizontal',
    slidesPerView: 2,
    slideToClickedSlide: true,
    mousewheel: true,
    watchSlidesProgress: false,
    keyboard: true,
    centeredSlides: false,
    loop: true,
    roundLengths: true,
    slidesOffsetBefore: 0,
    slidesOffsetAfter: 0,
    spaceBetween: 10,
    // observer:'true',
autoplay: {
delay: 6000,
disableOnInteraction: true
},
breakpoints: {
1024: {
slidesPerView: 2
},
900: {
slidesPerView: 8
},
700: {
slidesPerView: 6
},
600: {
slidesPerView: 5
}
},

};

  posts: any[];
  today: number = Date.now();


  constructor(postsDetails: apiService) {
    postsDetails.getHomenews().subscribe( res => {
      console.log(res);
        this.posts = res;
    },err => {
      console.log(err);
    })

    }

  ngOnInit(): void {
  }

}
