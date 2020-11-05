import { apiService } from 'src/app/services/api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  constructor(private apiSearch:apiService) { }

  isActive = false;
  MenuActive = false;
  posts:any;
  AllSection:any;
  AllSource:any;

  OpenSearch(){
    this.isActive = !this.isActive;
    console.log(this.isActive)
  }

  savelocalStorage(){
    localStorage.setItem("Words", `${this.apiSearch.SearchWordApi}`);
  }

  getSearch(Word){
     this.apiSearch.SearchWordApi = Word;
    //  console.log(this.apiSearch.SearchWordApi , 'Header')
  }

  getAllSection(){
     this.apiSearch.getAllSection().subscribe((res)=> {
      this.AllSection = res.slice(0,9)
      // console.log(this.AllSection)
    })
  }

  getAllSource(){
    this.apiSearch.getAllSource().subscribe( res => {
      this.AllSource = res.slice(0,9)
      // console.log(this.AllSection)
    })
  }

  OpenMenu(){
    this.MenuActive = !this.MenuActive;
    // console.log(this.MenuActive)
  }


  ngOnInit(): void {
    this.getAllSection()
    this.getAllSource()

  }

}
