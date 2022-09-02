import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Todo } from "../../models/todo";

@Component({
  selector: 'app-todo-list-ui',
  templateUrl: './todo-list-ui.component.html',
  styleUrls: [ './todo-list-ui.component.scss' ]
})
export class TodoListUiComponent implements OnInit {
  editIds: number[] = [];

  @Input()
  todoList: Todo[] = [];

  @Output()
  delete = new EventEmitter<number>();

  @Output()
  toggle = new EventEmitter<number>();

  @Output()
  edit = new EventEmitter<Omit<Todo, 'completed'>>();

  constructor() {
  }

  ngOnInit(): void {
  }

  onDelete(id: number) {
    this.delete.emit(id);
  }

  onToggle(id: number) {
    this.toggle.emit(id);
  }

  onEdit(id: number, name: string) {
    this.edit.emit({ id, name });
    this.editIds = this.editIds.filter((editId) => editId !== id);
  }

  onEditMode(id: number) {
    this.editIds.push(id);
  }

  onCancel(id: number) {
    this.editIds = this.editIds.filter((editId) => editId !== id);
  }
}

