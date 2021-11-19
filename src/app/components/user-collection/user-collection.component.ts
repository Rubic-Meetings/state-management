import { Component } from '@angular/core';
import { Book } from 'src/app/models/Book';
import { Observable } from 'rxjs';
import { BooksService } from 'src/app/services/books-service/books.service';
import { UserCollectionQuery } from 'src/app/services/books-service/query/user-collection.query';

@Component({
  selector: 'app-user-collection',
  templateUrl: './user-collection.component.html'
})
export class UserCollectionComponent {
  public userBooksCollection$: Observable<Book[]>;

  constructor(private booksService: BooksService, private userCollectionQuery: UserCollectionQuery) {
    this.userBooksCollection$ = this.userCollectionQuery.selectBooks();
  }

  public removeBook(book: Book): void {
    this.booksService.removeBookFromCollection(book.id);
  }
}
