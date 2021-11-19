import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { setBooksList } from 'src/app/state/books.actions';
import { Actions, createEffect, ofType, ROOT_EFFECTS_INIT } from '@ngrx/effects';
import { map, mergeMap } from 'rxjs/operators';

@Injectable()
export class BooksApiService {
  constructor(private actions$: Actions) {}

  private loadBooks$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ROOT_EFFECTS_INIT),
      mergeMap(() => {
        // API call
        return of([
          { id: Math.random(), title: 'First book' },
          { id: Math.random(), title: 'Second Book' }
        ]).pipe(map(books => {
          return setBooksList({ books });
        }));
      })
    )
  );
}
