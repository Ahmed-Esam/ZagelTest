import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { apiService } from 'src/app/services/api.service';
import { SwiperOptions } from 'swiper';

@Component({
  selector: 'app-story',
  templateUrl:'./story.component.html',
  styleUrls: ['./story.component.css']
})
export class StoryComponent implements OnInit   {
  config1: SwiperOptions = {
            direction: 'horizontal',
            slidesPerView: 17,
            // slideToClickedSlide: true,
            mousewheel: true,
            watchSlidesProgress: false,
            keyboard: true,
            centeredSlides: false,
            loop: false,
            roundLengths: false,
            // slidesOffsetBefore: 0,
            // slidesOffsetAfter: 0,
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


  stories:any;
  getApiStory:any;

  constructor(private postsDetails: apiService,private route: ActivatedRoute , private router:Router) {}

  getStory(){
    return this.getApiStory =  this.postsDetails.getStories().subscribe( res => {
        this.stories = res;
        // console.log('stories :>> ', this.stories);
    })
  }


  ClickMe(eID){
    // console.log(this.router.navigate([`/source/`], { relativeTo: this.route }))
    this.router.navigateByUrl(`/source/${eID}`, { skipLocationChange: true }).then((res) => {
      this.router.navigate([`/source/${eID}`]);
  });

    // this.router.navigate(['../list'], { relativeTo: this.route });
  }

  ngOnInit(){
    this.getStory()

  }



}
