import { Book } from 'src/app/models/Book';
import { Action, NgxsOnInit, State, StateContext } from '@ngxs/store';
import { Injectable } from '@angular/core';
import { BooksService } from 'src/app/services/books.service';
import { tap } from 'rxjs/operators';
import { AddBookToCollection, AddBookToList, RemoveBookFromCollection, SetBooksList } from 'src/app/state/books.actions';

@State<Book[]>({
  name: 'booksList',
  defaults: []
})
@Injectable()
export class BooksListState implements NgxsOnInit {
  constructor(private bookService: BooksService) {}

  ngxsOnInit({ dispatch }: StateContext<Book[]>) {
    dispatch(SetBooksList);
  }

  @Action(SetBooksList)
  setBooksList({ setState }: StateContext<Book[]>) {
    return this.bookService.loadBooks().pipe(tap(books => {
      setState(books);
    }));
  }

  @Action(AddBookToList)
  addBookToList({ getState, setState }: StateContext<Book[]>, { book }: AddBookToList) {
    setState(getState().concat(book));
  }
}

@State<Book[]>({
  name: 'userCollection',
  defaults: []
})
@Injectable()
export class UserCollectionState {
  constructor() {}

  @Action(AddBookToCollection)
  addBookToCollection({ getState, setState }: StateContext<Book[]>, { book }: AddBookToCollection) {
    const state = getState();
    if (state.find(collectionBook => collectionBook.id === book.id)) {
      return;
    }
    return setState(state.concat(book));
  }

  @Action(RemoveBookFromCollection)
  removeBookFromCollection({ getState, setState }: StateContext<Book[]>, { book }: RemoveBookFromCollection) {
    const state = getState();
    return setState(state.filter(collectionBook => collectionBook.id !== book.id));
  }
}
