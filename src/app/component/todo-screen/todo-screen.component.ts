import {  ChangeDetectorRef, Component, OnInit } from '@angular/core';
import {  TodoList } from 'src/app/shared/interface/common';
import { TodoService } from 'src/app/shared/service/todo.service';

@Component({
  selector: 'app-todo-screen',
  templateUrl: './todo-screen.component.html',
  styleUrls: ['./todo-screen.component.scss']
})
export class TodoScreenComponent implements OnInit {
  todoList: TodoList[] = [];

  constructor(
    private _todoService: TodoService,
    private _changeDetectorRef: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    this.onGetTodoList();
  }

  onGetTodoList() {
    this._todoService.getTodoList().subscribe((todoListResponse: Array<TodoList>) => {
      this.todoList = todoListResponse;
      this._changeDetectorRef.markForCheck();
    })
  }

  onDeleteTodo(todoId: string) {
    this._todoService.deleteTodo(todoId).subscribe((res: TodoList) => {
      this._changeDetectorRef.markForCheck();
    })
  }
}
