import { Component } from '@angular/core';
import { Book } from 'src/app/models/Book';

@Component({
  selector: 'app-user-collection',
  templateUrl: './user-collection.component.html'
})
export class UserCollectionComponent {
  public booksCollection: Book[];

  constructor() { }

  public removeBook(book: Book): void {
    this.booksCollection = this.booksCollection.filter(collectionBook => collectionBook.id !== book.id);
  }
}
