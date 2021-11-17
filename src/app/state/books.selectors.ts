import { createFeatureSelector, createSelector } from "@ngrx/store";
import { Book } from "src/app/models/Book";

export const booksSelector = createFeatureSelector<Book[]>('books');

const collectionSelector = createFeatureSelector<number[]>('collection');

export const booksCollectionSelector = createSelector(
  booksSelector,
  collectionSelector,
  (books, collection) => {
    return collection?.map(collectionBookId => books.find(book => book.id === collectionBookId));
  }
)
