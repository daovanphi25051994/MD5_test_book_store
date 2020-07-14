import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {BookService} from '../book.service';
import {IBook} from '../ibook';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  bookId: number;
  book: IBook;

  constructor( private bookService: BookService , private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe( params => {
      this.bookId = params.id;
      this.bookService.getById(this.bookId).subscribe( result => {
        this.book = result;
      });
    });
  }

}
