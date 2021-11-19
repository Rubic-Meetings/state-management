import { Injectable } from '@angular/core';
import { Book } from 'src/app/models/Book';
import { BooksApiService } from 'src/app/services/books-api-service/books-api.service';
import { UserCollectionStore } from 'src/app/services/books-service/store/user-collection.store';
import { BooksListStore } from 'src/app/services/books-service/store/books-list.store';
import { guid, withTransaction } from '@datorama/akita';
import { UserCollectionQuery } from 'src/app/services/books-service/query/user-collection.query';

@Injectable({
  providedIn: 'root'
})
export class BooksService {
  constructor(
    private booksListStore: BooksListStore,
    private userCollectionStore: UserCollectionStore,
    private userCollectionQuery: UserCollectionQuery,
    private booksApiService: BooksApiService
  ) {
    this.setBooksList();
  }

  setBooksList(): void {
    this.booksListStore.setLoading(true);
    this.booksApiService.loadBooks().pipe(withTransaction(books => {
      this.booksListStore.set(books);
      this.booksListStore.setLoading(false);
    })).subscribe();
  }

  addBookToList(book: Book): void {
    this.booksListStore.add(book);
    console.log(this.booksListStore.getValue())
  }

  addBookToCollection(bookId: number): void {
    const collection = this.userCollectionQuery.getAll();
    if (!collection.find(collectionBook => collectionBook.bookId === bookId)) {
      this.userCollectionStore.add({ id: guid(), bookId });
    }
  }

  removeBookFromCollection(bookId: number): void {
    const collection = this.userCollectionQuery.getAll();
    const collectionBook = collection.find(collectionBook => collectionBook.bookId === bookId);
    if (collectionBook) {
      this.userCollectionStore.remove(collectionBook.id);
    }
  }
}
