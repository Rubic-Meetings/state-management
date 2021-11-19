import { EntityState, EntityStore, ID, StoreConfig } from '@datorama/akita';
import { Injectable } from '@angular/core';

export interface UserCollectionState extends EntityState<{ id: ID, bookId: number }> {}

@Injectable({
  providedIn: 'root'
})
@StoreConfig({
  name: 'userCollection'
})
export class UserCollectionStore extends EntityStore<UserCollectionState> {
  constructor() {
    super([]);
    // super({ booksIds: [] });
  }
}
