import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { apiService } from 'src/app/services/api.service';
import { SwiperOptions } from 'swiper';


@Component({
  selector: 'app-news',
  templateUrl:'./news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
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
slidesPerView: 3
},
900: {
slidesPerView: 2
},
700: {
slidesPerView: 1
},
600: {
slidesPerView: 1
}
},

};
config3: SwiperOptions = {
  direction: 'horizontal',
  slidesPerView: 3,
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
slidesPerView: 3
},
900: {
slidesPerView: 2
},
700: {
slidesPerView: 1
},
600: {
slidesPerView: 1
}
},

};

  articles: any;
  news: any;
  Details:any;
  DetailsElement:any;
  ZagelGeneral:any;
  PostQuareAds:any;
  getPostQuare:any;
  // today: number = Date.now();


  constructor(private postsDetails: apiService,private route: ActivatedRoute) {
    // postsDetails.getArticle().subscribe( res => {
    //   console.log(res);
    //     this.articles = res;
    // },err => {
    //   console.log(err);
    // })

    }

  paramId;
  IntializeId(){
    this.route.paramMap.subscribe(params => {
      this.paramId = params.get('id')
      console.log(this.paramId)
    });
  }
  fetchApitest(id){
    return this.articles = this.postsDetails.getArticle(id).subscribe((res:any) =>{
      this.news = res;
      this.Details = this.news.Details;
      this.ZagelGeneral = this.news.ZagelGeneral
      // console.log(this.Details)
      // console.log(this.ZagelGeneral , "sss")

    })
  }


  PostQuare(){
    return this.getPostQuare =  this.postsDetails.getPostQuare().subscribe(res => {
      this.PostQuareAds = res
      console.log(this.PostQuareAds , 'ssss')
    })
  }

  ngOnInit(): void {
    this.IntializeId()
    this.fetchApitest(this.paramId)
    this.PostQuare()
  }

}
