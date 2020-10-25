import { apiService } from 'src/app/services/api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  constructor(private apiSearch:apiService) { }

  isActive = false
  posts:any;

  OpenSearch(){
    // if(!this.isActive){
    //   this.isActive = true
    // }else {
    //   this.isActive = false
    // }
    this.isActive = !this.isActive;
    console.log(this.isActive)
  }

  savelocalStorage(){
    localStorage.setItem("Words", `${this.apiSearch.SearchWordApi}`);
  }

  getSearch(Word){
     this.apiSearch.SearchWordApi = Word;
     console.log(this.apiSearch.SearchWordApi , 'Header')
    // return this.apiSearch.getSearch().subscribe(res => {
    //   this.posts = res;

    //   console.log(this.posts,'header')
    //   console.log(Word)
    // })


  }

  ngOnInit(): void {

  }

}
