import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms"
import { Todo, TodoList } from 'src/app/shared/interface/common';
import { TodoService } from 'src/app/shared/service/todo.service';
@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss']
})
export class TodoFormComponent implements OnInit {
  todoForm: FormGroup;
  todoId: number = 1;

  constructor(
    private _formBuilder: FormBuilder,
    private _todoService: TodoService
  ) {
    this.todoForm = this._formBuilder.group({
      name: ["", Validators.required],
      emailId: ["", Validators.required],
      phoneNumber: ["", Validators.required],
    })
  }

  ngOnInit(): void {
  }

  onTodoSubmit() {
    let todoListData: TodoList = {
      name: this.todoForm.get('name')?.value,
      emailId: this.todoForm.get('emailId')?.value,
      phoneNumber: this.todoForm.get('phoneNumber')?.value
    }

    this._todoService.todoAdd(todoListData).subscribe((todoResponse: TodoList) => {
      console.log(todoResponse);
    })
  }
}
