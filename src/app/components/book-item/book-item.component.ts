import { Component, Input } from '@angular/core';
import { Book } from "src/app/models/Book";

@Component({
  selector: 'app-book-item',
  templateUrl: './book-item.component.html'
})
export class BookItemComponent {
  @Input() book: Book;

  constructor() {}
}
