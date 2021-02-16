import { Component, OnInit } from '@angular/core';
import { apiService } from 'src/app/services/api.service';
import { SwiperOptions } from 'swiper';
import * as moment from 'moment';
@Component({
  selector: 'app-news-card',
  templateUrl: './news-card.component.html',
  styleUrls: ['./news-card.component.css']
})
export class NewsCardComponent implements OnInit {
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
MemberID  : any = 3574;
Source: any = 0;
Section: any = 0;
TimeStamp: any = 0;
isActive= false;
isActiveNewscog= false;
  constructor(postsDetails: apiService) {
    postsDetails.getExplorernews(this.MemberID,this.Source,this.Section,this.TimeStamp).subscribe( res => {
      this.posts = res;
      console.log(this.posts);
    },err => {
      console.log(err);
    })
    }
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

    ClickMore(){
      this.isActive = !this.isActive;
      console.log(this.isActive)
    }


    toogleIcon(element){
      this.isActiveNewscog = !this.isActiveNewscog;
      // console.log(element,'element')
    }

    visibleIndex = -1;
      // showSubItem(ind) {
      //   if (this.visibleIndex === ind) {
      //     this.visibleIndex = -1;
      //     this.isActiveNewscog = false
      //     console.log(ind , 'ind')
      //   } else {
      //     this.visibleIndex = ind;
      //     this.isActiveNewscog = true
      //     console.log(ind , 'ind')
      //   }
      // }



    showDivTwo:boolean = true
    funTest(e){
      e++
      console.log(e)
      var tag = document.getElementById(e)
      tag.style.display = 'none'
      var ddd = `show-${e}`
      var div = document.getElementById(ddd)
        div.style.display = 'block'
      console.log(div,'divdivdivdiv ')
      console.log(e)
      console.log(e,'e',div,'div',tag,'aaaaa')
    }

    BackNews(e){
      e++
      var tag = document.getElementById(e)
      tag.style.display = 'block'
      var ddd = `show-${e}`
      var div = document.getElementById(ddd)
      div.style.display = 'none'
      console.log(e,tag,'sssss')
    }
  ngOnInit(): void {
  }

}
