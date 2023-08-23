import { ChangeDetectorRef, Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TodoList } from 'src/app/shared/interface/common';
import { TodoService } from 'src/app/shared/service/todo.service';

@Component({
  selector: 'app-todo-screen',
  templateUrl: './todo-screen.component.html',
  styleUrls: ['./todo-screen.component.scss']
})
export class TodoScreenComponent implements OnInit {
  @Input() todoForm: any;
  todoList: TodoList[] = [];
  @Output() editMode = new EventEmitter<boolean>(false);
  @Output() currentId = new EventEmitter<string>();

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

  onUpdateTodo(todoId: string) {
    let currentTodo = this.todoList.find((todo) => {
      return todo.id === todoId;
    });
    
    this.todoForm.setValue({
      name: currentTodo?.name,
      emailId: currentTodo?.emailId,
      phoneNumber: currentTodo?.phoneNumber
    });
    
    this.editMode.emit(true);
    this.currentId.emit(todoId)
  }
}
