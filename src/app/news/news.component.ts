import { Component, OnInit } from '@angular/core';
import { apiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  article: [];
  // today: number = Date.now();


  constructor(postsDetails: apiService) {
    postsDetails.getArticle().subscribe( res => {
      console.log(res);
        this.article = res;
    },err => {
      console.log(err);
    })

    }

  ngOnInit(): void {
  }

}
