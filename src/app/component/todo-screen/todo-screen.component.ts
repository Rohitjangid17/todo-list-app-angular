import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { TodoList, TodoListId } from 'src/app/shared/interface/common';
import { TodoService } from 'src/app/shared/service/todo.service';
import { pipe } from "rxjs";
import { map } from "rxjs/operators";

@Component({
  selector: 'app-todo-screen',
  templateUrl: './todo-screen.component.html',
  styleUrls: ['./todo-screen.component.scss']
})
export class TodoScreenComponent implements OnInit {
  todoList: TodoListId[] = [];

  constructor(
    private _todoService: TodoService,
    private _changeDetectorRef: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    this.onGetTodoList();
  }


  onGetTodoList() {
    this._todoService.getTodoList().subscribe((todoListResponse: Array<TodoListId>) => {
      console.log(todoListResponse)
      this.todoList = todoListResponse;
      this._changeDetectorRef.markForCheck();
    })
  }

  onDeleteTodo(todoId: string) {
    this._todoService.deleteTodo(todoId).subscribe((res: TodoListId) => {
      this._changeDetectorRef.markForCheck();
    })
  }
}
