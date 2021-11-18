import { createAction, props } from "@ngrx/store";
import { Book } from "src/app/models/Book";

export const setBooksList = createAction(
  '[Books List] Set Books List',
  props<{ books: Book[] }>()
)

export const addBookToList = createAction(
  '[Books List] Add Book To List',
  props<{ book: Book }>()
)

export const addBookToCollection = createAction(
  '[User Collection] Add Book To Collection',
  props<{ id: number }>()
)

export const removeBookFromCollection = createAction(
  '[User Collection] Remove Book From Collection',
  props<{ id: number }>()
)
