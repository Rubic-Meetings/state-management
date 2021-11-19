import { Component } from '@angular/core';
import { Book } from 'src/app/models/Book';
import { Observable } from 'rxjs';
import { filter, tap } from 'rxjs/operators';
import { BooksService } from 'src/app/services/books-service/books.service';
import { BooksListQuery } from 'src/app/services/books-service/query/books-list.query';

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html'
})
export class BooksListComponent {
  public booksList$: Observable<Book[]>;

  private booksLength: number;

  public newBookTitle: string;

  constructor(private booksListService: BooksService, private booksListQuery: BooksListQuery) {
    this.booksList$ = this.booksListQuery.selectAll().pipe(
      filter(value => value?.length > 0),
      tap(books => this.booksLength = books.length)
    );
  }

  public addBook(): void {
    this.booksListService.addBookToList(
      {
        id: Math.random(),
        title: this.newBookTitle
      }
    );

    this.newBookTitle = '';
  }

  public addToCollection(book: Book): void {
    this.booksListService.addBookToCollection(book.id);
  }
}
