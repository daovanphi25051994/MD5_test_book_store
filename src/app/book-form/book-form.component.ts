import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {BookService} from '../book.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.css']
})
export class BookFormComponent implements OnInit {
  bookId: number;
  isShowSuccess = false;
  message: string;

  bookForm: FormGroup = new FormGroup({
    id: new FormControl(''),
    title: new FormControl(''),
    author: new FormControl(''),
    description: new FormControl(''),
  });

  constructor(private bookService: BookService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    if (this.bookId) {
      this.bookService.updateBook(this.bookForm.value).subscribe( result => {
        this.isShowSuccess = true;
        this.message = 'Đã cập nhật thông tin sách!';
      });
    } else {
      this.bookService.createBook(this.bookForm.value).subscribe( result => {
        this.isShowSuccess = true;
        this.message = 'Đã thêm sách mới!';
        this.bookService.shouldRefresh.next('');
      });
    }

  }
}
