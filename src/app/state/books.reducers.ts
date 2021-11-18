import { createReducer, on } from '@ngrx/store';
import { addBookToList, addBookToCollection, removeBookFromCollection, setBooksList } from 'src/app/state/books.actions';
import { Book } from 'src/app/models/Book';

const booksListInitialState: Book[] = undefined;

export const booksListReducer = createReducer(
  booksListInitialState,
  on(setBooksList, (state, { books }) => books),
  on(addBookToList, (state, { book }) => {
    return state.concat(book);
  })
);

const userCollectionInitialState: number[] = [];

export const userCollectionReducer = createReducer(
  userCollectionInitialState,
  on(addBookToCollection, (state, { id: bookId }) => {
    if (state.includes(bookId)) {
      return state;
    }
    return state.concat(bookId);
  }),
  on(removeBookFromCollection, (state, { id: bookId }) => {
    return state.filter(collectionBookId => collectionBookId !== bookId);
  }),
);
