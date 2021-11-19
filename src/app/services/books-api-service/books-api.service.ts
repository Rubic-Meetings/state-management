import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Book } from 'src/app/models/Book';

@Injectable({
  providedIn: 'root'
})
export class BooksApiService {
  constructor() {}

  public loadBooks(): Observable<Book[]> {
    // API call
    return of([
      { id: Math.random(), title: 'First book' },
      { id: Math.random(), title: 'Second Book' }
    ]);
  }
}
