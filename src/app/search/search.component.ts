import { apiService } from 'src/app/services/api.service';
import { Component, OnInit } from '@angular/core';
import { SwiperOptions } from 'swiper';
import * as moment from 'moment';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})

export class SearchComponent implements OnInit  {
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

  posts:any;
  WordSearch:any;
  getValWord:any;
  saveWords:any;
  constructor(private apiSearch:apiService,private route: ActivatedRoute , private router:Router) {
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

    this.saveWords = localStorage.getItem("Words")
    // console.log(this.apiSearch.SearchWordApi, 'localStorage constructor')

    if(this.saveWords) {
      this.apiSearch.SearchWordApi = this.saveWords;

    }else {
      // this.apiSearch.SearchWordApi = 'لا يوجد بيانات'
    }

   }




  getSearch(){
    return this.apiSearch.getSearch().subscribe(res => {
      this.posts = res
      this.apiSearch.SearchWordApi = this.saveWords;

      // this.WordSearch = this.apiSearch.SearchWordApi;
      // this.apiSearch.SearchWordApi = this.saveWords;
      // console.log(this.saveWords, 'يوجد')


      if(this.apiSearch.SearchWordApi) {
        this.WordSearch = this.apiSearch.SearchWordApi;
        // this.apiSearch.SearchWordApi = this.saveWords;
        // console.log(this.saveWords, 'يوجد')
        // console.log(this.saveWords, 'Search Component')

      }

    },err => {
      this.WordSearch = 'لا يوجد بيانات';
    })
    // console.log('getSearch aaaaaaaaaaaaaaaaaa')
  }


  ngOnInit(): void {
    this.getSearch()

  }



}
