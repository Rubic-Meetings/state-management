import { createAction, props } from "@ngrx/store";
import { Book } from "src/app/models/Book";

export const setBooksList = createAction(
  '[Book List] Set Books List',
  props<{ books: Book[] }>()
)

export const addBook = createAction(
  '[Book List] Add Book',
  props<Book>()
)

export const addBookToCollection = createAction(
  '[Collection List] Add Book',
  props<{ id: number }>()
)

export const removeBookFromCollection = createAction(
  '[Collection List] Remove Book',
  props<{ id: number }>()
)
