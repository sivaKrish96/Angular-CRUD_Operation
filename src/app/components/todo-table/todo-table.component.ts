import { Component, Input, OnInit } from '@angular/core';
import { Todo } from 'src/app/Modules/Form-Module/form.module';
import { CrudServices } from 'src/service/crud-service/crud.service';

@Component({
  selector: 'app-todo-table',
  templateUrl: './todo-table.component.html',
  styleUrls: ['./todo-table.component.css']
})
export class TodoTableComponent implements OnInit {
  @Input('todos') todos: Todo[] = [];
  todolist: Todo[] = [];
  editEnabled!: boolean;
  editTodo!: Todo;
  updateValue: string = ""

  constructor(private crudService: CrudServices) { }

  ngOnInit(): void {
    this.anyChanges()
  }

  anyChanges() {
    this.crudService.getTodos().subscribe((res) => {
      this.todos = res
    })
  }

  onDelete(id: any) {
    this.crudService.deleteTodo(id).subscribe(() => {
      this.anyChanges()
    })
  }

  onEditTodo(todo: Todo) {
    this.editEnabled = true;
    if (todo) {
      this.editTodo = todo
    }

    console.log(this.editTodo)
  }

  onToggle() {
    this.editEnabled = false;
  }

  onUpdate() {
    const editedTodo: Todo = {
      ...this.editTodo,
      title: this.updateValue
    }
    this.crudService.updateTodo(editedTodo).subscribe((res) => {
      this.anyChanges()
    })
  }
}
