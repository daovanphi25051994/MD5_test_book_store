import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, Subject} from 'rxjs';
import {IBook} from './ibook';

const API_URL = 'http://localhost:3000/books';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  shouldRefresh = new Subject<any>();

  constructor(private http: HttpClient) {
  }

  getBooks(): Observable<IBook[]> {
    return this.http.get<IBook[]>(API_URL);
  }
  getById(id: number): Observable<IBook> {
    return this.http.get<IBook>(`${API_URL}/${id}`);
  }
  createBook(book: Partial<IBook>): Observable<IBook> {
    return this.http.post<IBook>(API_URL, book);
  }
  deleteBook(id: number): Observable<any> {
    return this.http.delete(`${API_URL}/${id}`);
  }
  updateBook(book: IBook): Observable<IBook> {
    return this.http.patch<IBook>(`${API_URL}/${book.id}`, book);
  }
}
