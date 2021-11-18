import { Book } from 'src/app/models/Book';

export class SetBooksList {
  public static readonly type = '[Book List] Set Books List';

  constructor() {}
}

export class AddBookToList {
  public static readonly type = '[Book List] Add Book To List';

  constructor(public book: Book) {}
}

export class AddBookToCollection {
  public static readonly type = '[Collection List] Add Book To Collection';

  constructor(public book: Book) {}
}

export class RemoveBookFromCollection {
  public static readonly type = '[Collection List] Remove Book From Collection';

  constructor(public book: Book) {}
}
