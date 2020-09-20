import { Component, OnInit } from '@angular/core';
import { apiService } from 'src/app/services/api.service';
import { SwiperOptions } from 'swiper';
import * as moment from 'moment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
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
MatchDate: any;
dateeeee: any;
today: number = Date.now();
x : any;
i : 0;
iterator2:any;
constructor(postsDetails: apiService) {
  postsDetails.getHomenews().subscribe( res => {
    //console.log(res);
      this.posts = res;
      this.MatchDate = res[1].MatchToDay;

      // for (let iterator of this.MatchDate) {
      //   this.dateeeee = iterator.MatchDate
      //   //console.log(this.dateeeee, 'in loop');
      // }
    },err => {
      console.log(err);
    })
  }
  // "MMMM Do YYYY, h:mm:ss a"

  ngDoCheck (): void {
    let now = moment().format('YYYY-MM-DDTHH:mm:ss');
    //console.log(now, 'string');
    //console.log(this.dateeeee, 'date')

    for (let iterator2 of this.MatchDate) {
      //console.log(iterator2)
      //console.log(iterator2.MatchDate)
      if(moment(now).isAfter(iterator2)){
        //console.log(iterator2.MatchDate, 'date')
        this.x = "انتهت"
      }else {
        //console.log('false')
        //console.log(this.dateeeee, 'date')
        this.x = "لم تبدا بعد"
      }
    }
  }

}
