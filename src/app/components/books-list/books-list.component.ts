import { Component } from '@angular/core';
import { Book } from 'src/app/models/Book';
import { Observable } from 'rxjs';
import { filter, tap } from 'rxjs/operators';
import { Store } from '@ngxs/store';
import { BooksListState } from 'src/app/state/books.state';
import { AddBookToCollection, AddBookToList } from 'src/app/state/books.actions';

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html'
})
export class BooksListComponent {
  public booksList$: Observable<Book[]>;

  private booksLength: number;

  public newBookTitle: string;

  constructor(private store: Store) {
    this.booksList$ = this.store.select(BooksListState).pipe(
      filter(value => value?.length > 0),
      tap(books => this.booksLength = books.length)
    );
  }

  public addBook(): void {
    this.store.dispatch(
      new AddBookToList({
        id: Math.random(),
        title: this.newBookTitle
      })
    ).subscribe(() => {
      this.newBookTitle = '';
    });
  }

  public addToCollection(book: Book): void {
    this.store.dispatch(new AddBookToCollection(book));
  }
}
