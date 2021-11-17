import { createReducer, on } from "@ngrx/store";
import { addBook, addBookToCollection, removeBookFromCollection, setBooksList } from "src/app/state/books.actions";
import { Book } from "src/app/models/Book";

const booksInitialState: Book[] = undefined;

export const booksReducer = createReducer(
  booksInitialState,
  on(setBooksList, (state, { books }) => books),
  on(addBook, (state, book) => {
    return state.concat(book)
  })
)

const collectionInitialState: number[] = [];

export const collectionReducer = createReducer(
  collectionInitialState,
  on(addBookToCollection, (state, book) => {
    if (state.includes(book.id)) {
      return state;
    }
    return state.concat(book.id)
  }),
  on(removeBookFromCollection, (state, book) => {
    return state.filter(collectionBookId => collectionBookId !== book.id);
  }),
)
