import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';
import { Book } from 'src/app/models/Book';
import { Injectable } from '@angular/core';

export interface BooksListState extends EntityState<Book> {}

@Injectable({
  providedIn: 'root'
})
@StoreConfig({
  name: 'booksList'
})
export class BooksListStore extends EntityStore<BooksListState> {
  constructor() {
    super([]);
  }
}

// export class BooksListStore extends Store<{ books: Book[] }> {
//   constructor() {
//     super({ books: [] });
//   }
// }
