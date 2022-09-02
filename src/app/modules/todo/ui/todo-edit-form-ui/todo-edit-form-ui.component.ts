import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Todo } from "../../models/todo";

@Component({
  selector: 'app-todo-edit-form-ui',
  templateUrl: './todo-edit-form-ui.component.html',
  styleUrls: [ './todo-edit-form-ui.component.scss' ]
})
export class TodoEditFormUiComponent implements OnInit {
  name = '';

  @Input()
    // @ts-ignore
  todo: Todo;

  @Output()
  edit = new EventEmitter<string>();

  @Output()
  cancel = new EventEmitter<number>();

  constructor() {
  }

  ngOnInit(): void {
    this.name = this.todo.name;
  }

  onEdit() {
    this.name && this.edit.emit(this.name);
  }

  onCancel() {
    this.name = this.todo.name;
    this.cancel.emit(this.todo.id);
  }
}
