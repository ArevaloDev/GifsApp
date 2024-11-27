import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environments';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private url:string = environment.url;
  private apiKey:string = environment.apiKey;

  private _tagHistory:string[] = [];

  get tagsHistory(){
    return [...this._tagHistory];
  }

  constructor(private http:HttpClient) { }


  organizatedTag = (tag:string) => {
      tag = tag.toLowerCase();
    if(this._tagHistory.includes(tag)){
      this._tagHistory = this._tagHistory.filter((oldTag:string) => oldTag !== tag);
    }
    this._tagHistory.unshift(tag);
    this._tagHistory = this._tagHistory.splice(0, 10);
  }

  searchGif = (tag:string) => {
     if(tag.length === 0) return;
     this.organizatedTag(tag)
     console.log(this._tagHistory);
    return  this.http.get(`${this.url}/gifs/search?api_key=${this.apiKey}&q=${tag}&limit=10`).subscribe(response => {
      console.log(response);
      
    })
     
  }
}
