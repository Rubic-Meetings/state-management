import { createFeatureSelector, createSelector } from "@ngrx/store";
import { Book } from "src/app/models/Book";

export const booksListSelector = createFeatureSelector<Book[]>('booksList');

const userCollectionSelector = createFeatureSelector<number[]>('userCollection');

export const userBooksCollectionSelector = createSelector(
  booksListSelector,
  userCollectionSelector,
  (books, collection) => {
    return collection?.map(collectionBookId => books.find(book => book.id === collectionBookId));
  }
)
