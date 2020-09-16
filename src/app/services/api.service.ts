import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class apiService {

  constructor(private http: HttpClient) { }

    getStories () :Observable<any>{
      const headers = { 'Content-type':'application/json', 'DeviceToken':'62447fb2f241da48', 'AuthToken':'AKQi8yzdDa' }
      return this.http.get('http://apiversion10.thezagelapp.com/api/news/GetAllSource/6225/0', { headers });
    }

    getHomenews() :Observable<any>{
      const headers = { 'Content-type':'application/json', 'DeviceToken':'62447fb2f241da48', 'AuthToken':'AKQi8yzdDa' }
      return this.http.get('http://apiversion10.thezagelapp.com/api/News/GetNewsHomebyuser/6225/0/0/20/0', { headers });
    }

    getArticle() :Observable<any>{
      const headers = { 'Content-type':'application/json', 'DeviceToken':'62447fb2f241da48', 'AuthToken':'AKQi8yzdDa' }
      return this.http.get('http://apiversion10.thezagelapp.com/api/News/Details/6225/7749426', { headers });
    }

    getExplorernews() :Observable<any>{
       return this.http.get('http://apiversion10.thezagelapp.com/api/News/GetNewsHome/6225/0/0/20/0');
    }


}
