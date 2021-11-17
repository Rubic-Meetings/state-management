import { Component } from '@angular/core';
import { Book } from "src/app/models/Book";
import { select, Store } from "@ngrx/store";
import { booksCollectionSelector } from "src/app/state/books.selectors";
import { Observable } from "rxjs";
import { removeBookFromCollection } from "src/app/state/books.actions";
import { filter } from "rxjs/operators";

@Component({
  selector: 'app-user-collection',
  templateUrl: './user-collection.component.html'
})
export class UserCollectionComponent {
  public booksCollection$: Observable<Book[]>;

  constructor(private store: Store) {
    this.booksCollection$ = this.store.pipe(
      select(booksCollectionSelector),
      filter(value => value !== undefined)
    );
  }

  public removeBook(book: Book): void {
    this.store.dispatch(removeBookFromCollection({ id: book.id }));
  }
}
