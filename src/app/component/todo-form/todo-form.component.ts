import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms"
import { TodoDetails } from 'src/app/shared/interface/common';
import { TodoService } from 'src/app/shared/service/todo.service';
@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss']
})
export class TodoFormComponent implements OnInit {
  todoForm: FormGroup;
  mode: boolean = false;
  currentId: string = "";

  constructor(
    private _formBuilder: FormBuilder,
    private _todoService: TodoService,
    private _changeDetectorRef: ChangeDetectorRef
  ) {
    this.todoForm = this._formBuilder.group({
      name: ["", Validators.required],
      emailId: ["", Validators.required],
      phoneNumber: ["", Validators.required],
    })
  }

  ngOnInit(): void {
  }

  onTodoAdd() {
    let todoListData: TodoDetails = {
      name: this.todoForm.get('name')?.value,
      emailId: this.todoForm.get('emailId')?.value,
      phoneNumber: this.todoForm.get('phoneNumber')?.value
    }
    if (!this.mode) {
      console.log("crete case")

      this._todoService.todoAdd(todoListData).subscribe((todoResponse: TodoDetails) => {
        this._changeDetectorRef.markForCheck();
      })
    } else {
      this._todoService.updateTodo(this.currentId, todoListData).subscribe((res) => {
        this._changeDetectorRef.markForCheck();
      })
    }
  }

  onEditMode(event: boolean) {
    this.mode = event
  }

  selectedId(event: string) {
    this.currentId = event;
  }
}
