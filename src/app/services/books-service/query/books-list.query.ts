import { QueryEntity } from '@datorama/akita';
import { BooksListState, BooksListStore } from 'src/app/services/books-service/store/books-list.store';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BooksListQuery extends QueryEntity<BooksListState> {
  constructor(private booksListStore: BooksListStore) {
    super(booksListStore);
  }
}

// export class BooksListQuery extends Query<{ books: [] }}> {
//   public selectBook$ = this.select().pipe(map(state => state.books));
//
//   constructor(private booksListStore: BooksListStore) {
//     super(booksListStore);
//   }
// }
