import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
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
    private _todoService: TodoService,
    private _changeDetectorRef: ChangeDetectorRef
  ) { }

  public async ngOnInit(): Promise<void> {
    this.onGetTodoList();
  }


  onGetTodoList() {
    this._todoService.getTodoList().subscribe((todoListResponse) => {
      this.todoList = todoListResponse;
      this._changeDetectorRef.markForCheck();
    })
  }
}
