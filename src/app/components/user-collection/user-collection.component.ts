import { Component } from '@angular/core';
import { Book } from 'src/app/models/Book';
import { Observable } from 'rxjs';
import { Select, Store } from '@ngxs/store';
import { UserCollectionState } from 'src/app/state/books.state';
import { RemoveBookFromCollection } from 'src/app/state/books.actions';

@Component({
  selector: 'app-user-collection',
  templateUrl: './user-collection.component.html'
})
export class UserCollectionComponent {
  @Select(UserCollectionState) public userBooksCollection$: Observable<Book[]>;

  constructor(private store: Store) {}

  public removeBook(book: Book): void {
    this.store.dispatch(new RemoveBookFromCollection(book));
  }
}
