import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gif, SearchResponse } from '../interfaces/gifs.interfaces';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  public GifList: Gif[] = [];
  private _tagsHistory: string[] = [];
  private apiKey: string = "7id8KLHbWW7XY2q35aenLdixMY4HmnIN";
  private searchURL: string = `https://api.giphy.com/v1/gifs/search`;

  constructor(private http: HttpClient) {
    this.loadLocalStorage();
    console.log("gif service")
  }

  get tagsHistory(): string[] {
    return [... this._tagsHistory];
  }

  private organizeHistory(tag: string) {
    tag = tag.toLowerCase();

    if (this._tagsHistory.includes(tag)) {
      this._tagsHistory = this._tagsHistory.filter(oldTag => oldTag != tag)
    }

    this._tagsHistory.unshift(tag);

    this._tagsHistory = this._tagsHistory.splice(0, 10);

    this.saveLocalStorage();
  }
  private saveLocalStorage() {
    localStorage.setItem('history', JSON.stringify(this._tagsHistory));

  }
  private loadLocalStorage() {
    if (!localStorage.getItem('history')) return;

    const stringHistory = localStorage.getItem('history');

    this._tagsHistory = JSON.parse(stringHistory!);

    this.searchTag(this._tagsHistory[0]);

  }
  getUrl(tag: string, limit: number): string {
    return `this.searchURL&q=${tag}&limit=${limit}`;
  }


  searchTag(tag: string): void {
    if (tag == '') {
    }

    if (this._tagsHistory.length == 10) {
      return;
    }

    const params = new HttpParams()
      .set("api_key", this.apiKey)
      .set("q", tag)
      .set("limit", 10);

    this.organizeHistory(tag);
    this.http
      .get<SearchResponse>(`${this.searchURL}`, { params })
      .subscribe(resp => {
        this.GifList = resp.data;
      });

  }


}
