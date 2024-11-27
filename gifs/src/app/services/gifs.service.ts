import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private _tagHistory:string[] = [];

  get tagsHistory(){
    return [...this._tagHistory];
  }

  constructor() { }


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
     
  }
}
