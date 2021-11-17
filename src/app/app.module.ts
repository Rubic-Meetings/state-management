import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { BooksListComponent } from "src/app/components/books-list/books-list.component";
import { UserCollectionComponent } from './components/user-collection/user-collection.component';
import { BookItemComponent } from "src/app/components/book-item/book-item.component";

@NgModule({
  declarations: [
    AppComponent,
    BooksListComponent,
    BookItemComponent,
    UserCollectionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
