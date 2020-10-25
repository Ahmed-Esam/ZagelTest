import { Component, OnInit } from '@angular/core';
import { apiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-matches-widjet',
  templateUrl: './matches-widjet.component.html',
  styleUrls: ['./matches-widjet.component.css']
})
export class MatchesWidjetComponent implements OnInit {

  posts: any[];

  MemberID  : any = 0;
  Source: any = 0;
  Section: any = 0;
  TimeStamp: any = 0;

  constructor(postsDetails: apiService) {
    postsDetails.getExplorernews(this.MemberID,this.Source,this.Section,this.TimeStamp).subscribe( res => {
      // console.log(res);
        this.posts = res;
    },err => {
      console.log(err);
    })

    }

  ngOnInit(): void {
  }

}
