import { Component, OnInit } from '@angular/core';
import { apiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-explore',
  templateUrl: './explore.component.html',
  styleUrls: ['./explore.component.css']
})
export class ExploreComponent implements OnInit {

  posts: any[];
  today: number = Date.now();


  constructor(postsDetails: apiService) {
    postsDetails.getExplorernews().subscribe( res => {
      // console.log(res);
        this.posts = res;
    },err => {
      console.log(err);
    })

    }

  ngOnInit(): void {
  }

}
