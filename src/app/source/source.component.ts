import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { apiService } from 'src/app/services/api.service';
import { SwiperOptions } from 'swiper';

@Component({
  selector: 'app-source',
  templateUrl: './source.component.html',
  styleUrls: ['./source.component.css']
})
export class SourceComponent implements OnInit    {
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
  postID = {
    SourceID:'',
    ID:'',
    Img:'',
    SectionTitle:'',
    SourceTitle:'',
    Title:'',
  };
  constructor(private postsDetails: apiService,private route: ActivatedRoute , private router:Router) {
         // override the route reuse strategy
       this.router.routeReuseStrategy.shouldReuseRoute = () => { return false }

       this.router.events.subscribe((evt) => {
          if (evt instanceof NavigationEnd) {
             // trick the Router into believing it's last link wasn't previously loaded
             this.router.navigated = false;
             // if you need to scroll back to top, here is the right place
             window.scrollTo(0, 0);
          }
      });
  }

    paramId;
    IntializeId(){
      this.route.paramMap.subscribe(params => {
        this.paramId = params.get('Sourceid')
        console.log(this.paramId)
      });
    }
    fetchApitest(source){
      return this.articles = this.postsDetails.getSource(source).subscribe((res:any) =>{
        this.news = res;
        // this.postID = this.news
        // this.articles .unsubscribe()
        console.log(this.news, 'postID')
        // this.router.navigateByUrl(`/source/${source}`, { skipLocationChange: true })
      })
    }


  clickkMe(eID){
    console.log(eID)
  }

  ngOnInit(): void {
    this.IntializeId()
    this.fetchApitest(this.paramId)
    // this.getSources()
  }






}
