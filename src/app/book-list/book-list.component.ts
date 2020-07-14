import { Component, OnInit } from '@angular/core';
import {BookService} from '../book.service';
import {IBook} from '../ibook';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  books: IBook[];
  constructor(private bookService: BookService) { }

  quantity: number;

  ngOnInit(): void {
    this.bookService.getBooks().subscribe(next => {
      this.books = next;
      this.quantity = this.books.length;
    }, error => {
      console.log(error);
    }, () => {
      console.log('complete');
    });
    this.bookService.shouldRefresh.subscribe(result => {
      this.bookService.getBooks().subscribe(results => {
        this.books = results;
        this.quantity = this.books.length;
      }, error => {
        this.books = [];
      });
    });
  }

  deleteBook(id: number) {
    if (confirm("Bạn có muốn xóa không ?")){
      this.bookService.deleteBook(id).subscribe( () => {
        this.bookService.shouldRefresh.next();
      });
    }
  }
}
