import { Component } from '@angular/core';
import { Book } from "src/app/models/Book";

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html'
})
export class BooksListComponent {
  public booksList: Book[];

  public newBookTitle: string;

  constructor() {
    this.booksList = [];
  }

  public addBook(): void {
    this.booksList.push({
      id: this.booksList.length,
      title: this.newBookTitle
    });
    this.newBookTitle = '';
  }

  public addToCollection(): void {
  }
}
