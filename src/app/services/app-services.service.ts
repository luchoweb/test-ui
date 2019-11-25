import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AppServices {
  constructor(private http: HttpClient) { }

  private dataUrl = 'assets/data.json';

  getJSON() {
    return this.http.get(this.dataUrl);
  }
}
