import { QueryEntity } from '@datorama/akita';
import { Book } from 'src/app/models/Book';
import { Observable } from 'rxjs';
import { BooksListQuery } from 'src/app/services/books-service/query/books-list.query';
import { map } from 'rxjs/operators';
import { UserCollectionState, UserCollectionStore } from 'src/app/services/books-service/store/user-collection.store';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserCollectionQuery extends QueryEntity<UserCollectionState> {
  constructor(private userCollectionStore: UserCollectionStore, private booksListQuery: BooksListQuery) {
    super(userCollectionStore);
  }

  public selectBooks(): Observable<Book[]> {
    return this.selectAll().pipe(map(booksIds => {
      const books = this.booksListQuery.getAll();
      return booksIds.map(collectionBook => books.find(book => book.id === collectionBook.bookId));
    }))
  }
}
