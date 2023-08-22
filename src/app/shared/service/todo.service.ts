import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Todo, TodoList } from '../interface/common';
import { map } from 'rxjs/operators';
import { pipe } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private _httpClient: HttpClient) { }

  todoAdd(TodoData: Todo): Observable<TodoList> {
    return this._httpClient.post<TodoList>('https://todo-list-app-angular-458ff-default-rtdb.firebaseio.com/todoList.json', TodoData)
  }

  getTodoList(): Observable<Array<TodoList>> {
    return this._httpClient.get<{ [key: string]: TodoList }>('https://todo-list-app-angular-458ff-default-rtdb.firebaseio.com/todoList.json').pipe(map(responseData => {
      let postsArray:TodoList[] = [];
      for (const key in responseData) {
        if (responseData.hasOwnProperty(key)) {
          postsArray.push({ ...responseData[key] });
          console.log(postsArray)
        }
      }
      return postsArray;
    }))
  }
}
