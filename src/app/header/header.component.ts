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
    this.isActive = !this.isActive;
    console.log(this.isActive)
  }

  savelocalStorage(){
    localStorage.setItem("Words", `${this.apiSearch.SearchWordApi}`);
  }

  getSearch(Word){
     this.apiSearch.SearchWordApi = Word;
     console.log(this.apiSearch.SearchWordApi , 'Header')
  }

  ngOnInit(): void {

  }

}
