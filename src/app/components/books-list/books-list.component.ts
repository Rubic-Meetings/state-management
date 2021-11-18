import { Component } from '@angular/core';
import { Book } from "src/app/models/Book";
import { select, Store } from "@ngrx/store";
import { addBook, addBookToCollection } from "src/app/state/books.actions";
import { Observable } from "rxjs";
import { booksSelector } from "src/app/state/books.selectors";
import { filter, tap } from "rxjs/operators";

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html'
})
export class BooksListComponent {
  public booksList$: Observable<Book[]>;

  private booksLength: number;

  public newBookTitle: string;

  constructor(private store: Store) {
    this.booksList$ = this.store.pipe(
      select(booksListSelector),
      filter(value => value !== undefined),
      tap(books => this.booksLength = books.length)
    );
  }

  public addBook(): void {
    this.store.dispatch(addBookToList({
      book: {
        id: this.booksLength,
        title: this.newBookTitle
      }
    }));

    this.newBookTitle = '';
  }

  public addToCollection(book: Book): void {
    this.store.dispatch(addBookToCollection({ id: book.id }));
  }
}
