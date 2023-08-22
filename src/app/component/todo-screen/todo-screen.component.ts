import { Component, OnInit } from '@angular/core';
import { TodoList } from 'src/app/shared/interface/common';
import { TodoService } from 'src/app/shared/service/todo.service';
import { pipe } from "rxjs";
import { map } from "rxjs/operators";

@Component({
  selector: 'app-todo-screen',
  templateUrl: './todo-screen.component.html',
  styleUrls: ['./todo-screen.component.scss']
})
export class TodoScreenComponent implements OnInit {
  todoList: TodoList[] = [];

  constructor(
    private _todoService: TodoService
  ) { }

  ngOnInit(): void {
    this.onGetTodoList();
  }


  onGetTodoList() {
    this._todoService.getTodoList().subscribe((todoListResponse) => {
      console.log(todoListResponse)
      this.todoList = todoListResponse;
    })
  }
}
