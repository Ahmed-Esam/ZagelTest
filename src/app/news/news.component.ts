import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { apiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-news',
  templateUrl:'./news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  articles: any;
  news: any;
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
      this.news = res
      console.log(this.news.Breif , "sss")
      // console.log(this.news)
    })
  }

  ngOnInit(): void {
    this.IntializeId()
    this.fetchApitest(this.paramId)
  }

}
