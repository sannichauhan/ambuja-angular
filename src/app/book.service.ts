import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  apiUrl = "/api/books";
  constructor() { 
    
  }
}
