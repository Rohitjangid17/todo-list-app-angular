import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TodoDetails, TodoList } from '../interface/common';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private _httpClient: HttpClient) { }

  todoAdd(TodoData: TodoDetails): Observable<TodoDetails> {
    return this._httpClient.post<TodoDetails>('https://todo-list-app-angular-458ff-default-rtdb.firebaseio.com/todoList.json', TodoData)
  }

  getTodoList(): Observable<Array<TodoList>> {
    return this._httpClient.get<{ [key: string]: TodoDetails }>('https://todo-list-app-angular-458ff-default-rtdb.firebaseio.com/todoList.json').pipe(map(responseData => {
      let postsArray: TodoList[] = [];
      for (const key in responseData) {
        if (responseData.hasOwnProperty(key)) {
          postsArray.push({ ...responseData[key], id: key });
        }
      }
      return postsArray;
    }))
  }

  deleteTodo(id: string): Observable<TodoList> {
    return this._httpClient.delete<TodoList>('https://todo-list-app-angular-458ff-default-rtdb.firebaseio.com/todoList/' + id + '.json');
  }
}
