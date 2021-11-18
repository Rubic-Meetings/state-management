import { Component } from '@angular/core';
import { Book } from "src/app/models/Book";
import { select, Store } from "@ngrx/store";
import { userBooksCollectionSelector } from "src/app/state/books.selectors";
import { Observable } from "rxjs";
import { removeBookFromCollection } from "src/app/state/books.actions";
import { filter } from "rxjs/operators";

@Component({
  selector: 'app-user-collection',
  templateUrl: './user-collection.component.html'
})
export class UserCollectionComponent {
  public userBooksCollection$: Observable<Book[]>;

  constructor(private store: Store) {
    this.userBooksCollection$ = this.store.pipe(
      select(userBooksCollectionSelector),
      filter(value => value !== undefined)
    );
  }

  public removeBook(book: Book): void {
    this.store.dispatch(removeBookFromCollection({ id: book.id }));
  }
}
