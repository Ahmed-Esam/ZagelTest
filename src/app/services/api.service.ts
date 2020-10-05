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

    getArticle(id) :Observable<any>{
      const headers = { 'Content-type':'application/json', 'DeviceToken':'62447fb2f241da48', 'AuthToken':'AKQi8yzdDa' }
      return this.http.get(`http://apiversion10.thezagelapp.com/api/News/Details/6225/${id}`, { headers });
    }

    getExplorernews() :Observable<any>{
       return this.http.get('http://apiversion10.thezagelapp.com/api/News/GetNewsHome/6225/0/0/20/0');
    }

    getPostQuare() {
      return this.http.get('http://api.postquare.com/rec-api/getrecs.json?pubid=191402&webid=195147&wid=125552&url=http://www.thezagelapp.com/')
    }

    getJubna() {
      return this.http.get('https://jubna.com/en/api/trends/9888?api_key=b092f2e7-963cbc6c-34da8e7c-2a6dcc38&widget_id=20007')
    }




}
