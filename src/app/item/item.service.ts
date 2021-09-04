import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ItemService {
  constructor(private http: HttpClient) {}

  getItems() {
    return this.http.get("http://jsonplaceholder.typicode.com/todos"
    );
  }

};
