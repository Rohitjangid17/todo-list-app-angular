import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms"
@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss']
})
export class TodoFormComponent implements OnInit {
  todoForm: FormGroup;

  constructor(private _formBuilder: FormBuilder) {
    this.todoForm = this._formBuilder.group({
      name: ["", Validators.required],
      emailId: ["", Validators.required],
      phoneNumber: ["", Validators.required],
    })
  }

  ngOnInit(): void {
  }
}
