import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DetailComponent} from './detail/detail.component';
import {BookFormComponent} from './book-form/book-form.component';
import {BookListComponent} from './book-list/book-list.component';


const routes: Routes = [
  {
    path: '',
    component: BookListComponent
  },
  {
    path: 'book/:id/detail',
    component: DetailComponent
  },
  {
    path: 'book/:id/edit',
    component: BookFormComponent
  },
  {
    path: 'book/create',
    component: BookFormComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
