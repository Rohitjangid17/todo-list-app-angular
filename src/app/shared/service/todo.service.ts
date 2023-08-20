import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Todo } from '../interface/common';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private _httpClient: HttpClient) { }


  todoAdd(TodoData: Todo): Observable<Todo> {
    return this._httpClient.post<Todo>('https://todo-list-app-angular-458ff-default-rtdb.firebaseio.com/todoList.json', TodoData)
  }
}
