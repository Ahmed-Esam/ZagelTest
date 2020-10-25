import { Component, Input, OnInit } from '@angular/core';
import { apiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-form-search',
  templateUrl: './form-search.component.html',
  styleUrls: ['./form-search.component.css']
})
export class FormSearchComponent implements OnInit {

  @Input() Words
  posts:any;
  constructor(private apiSearch:apiService) {}

  savelocalStorage(){
    localStorage.setItem("Words", `${this.apiSearch.SearchWordApi}`);
    // console.log(localStorage.getItem("Words"),'get')
  }

  getSearch(Word){
     this.apiSearch.SearchWordApi = Word;
     console.log(this.Words , 'formcomp')


  }




  ngOnInit(): void {
    // this.gettest()
  }

}
