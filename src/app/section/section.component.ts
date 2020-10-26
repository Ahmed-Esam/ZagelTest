import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { apiService } from 'src/app/services/api.service';
import { SwiperOptions } from 'swiper';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.css']
})
export class SectionComponent implements OnInit {

  config2: SwiperOptions = {
    direction: 'horizontal',
    slidesPerView: 3,
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
slidesPerView: 3
},
900: {
slidesPerView: 3
},
700: {
slidesPerView: 4
},
600: {
slidesPerView: 1
},
400: {
slidesPerView: 1
}
},
};


  posts: any[];
  today: number = Date.now();
  // UserID:Number = 3574;
  // Source:Number = 0;
  // Section:Number = 0;

  articles: any;
  news: any;
  Details:any;
  ZagelGeneral:any;

  // MemberID  : any = 0;
  // TimeStamp: any = 0;
  // Source: any = 0;
  // Section: any = 0;

  constructor(private postsDetails: apiService,private route: ActivatedRoute , private router:Router) { }

    paramId;
    paramSID;
    IntializeId(){
      this.route.paramMap.subscribe(params => {
        this.paramId = params.get('Sourceid')
        this.paramSID = params.get('sectionid')
        console.log(this.route)
      });
    }
    fetchApitest(source,section){
      return this.articles = this.postsDetails.getSection(source,section).subscribe((res:any) =>{
        this.news = res;
        console.log(this.news)
      })
    }

  ngOnInit(): void {
    this.IntializeId()
    this.fetchApitest(this.paramId,this.paramSID)
    // this.getSources()
  }

}
