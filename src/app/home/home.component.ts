import { Component, OnInit } from '@angular/core';
import { apiService } from 'src/app/services/api.service';
import { SwiperOptions } from 'swiper';
import * as moment from 'moment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent  implements OnInit  {
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
x : string;
EndMatch : string;
StartMatch  : string;
EndMatchTest : boolean;
StartMatchTest  : boolean;
i : 0;
// iterator2:any;
ahmed = [];
arrTime :[];
test:any;
UserID:Number = 3574
Source:Number = 0;
Section:Number = 0

constructor(postsDetails: apiService) {
  postsDetails.getHomenews().subscribe( res => {
    //console.log(res);
      this.posts = res;
      this.MatchDate = res[1].MatchToDay;
      console.log('object :>> ', this.posts,this.Source);
      // console.log(this.MatchDate ,'ahmed');

    },err => {
      console.log(err);
    })
  }

  // "MMMM Do YYYY, h:mm:ss a"
  // 2020-09-20T12:15:26

  test2(e){

    let now = moment().format('YYYY-MM-DDTHH:mm:ss');

    if(moment(now).isAfter( `${e}`)){
      // console.log(e, 'End ')
      return "انتهت"

    }else  {
      // console.log(e, 'start')
      return "لم تبدا بعد"

    }
  }

  // clickme(e){
  //   this.SourceID = e;
  //   console.log(this.SourceID)
  // }
  ngOnInit (){
    // this.test2(e)
  }




 }
