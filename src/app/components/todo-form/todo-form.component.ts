import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/Modules/Form-Module/form.module';
import { CrudServices } from 'src/service/crud-service/crud.service';
import { v4 as uuid } from 'uuid';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})

export class TodoFormComponent implements OnInit {

  //  Initializing local variable for two way binding
  todos: Todo[] = [];
  todoById!: Todo;
  newTodoTitle: string = "";

  constructor(private todoServices: CrudServices) { }

  ngOnInit(): void {
    this.loadTodos();
  }

  // Get All Todo's
  loadTodos() {
    this.todoServices.getTodos().subscribe((res) => {
      this.todos = res
    })
  }

  // Add Todo Calling
  addTodo() {
    const newTodo: Todo = {
      id: uuid(),
      title: this.newTodoTitle,
      completed: false
    }

    console.log("Add Todo Called")

    this.todoServices.createTodo(newTodo).subscribe((res) => {
      this.loadTodos()
    })

    this.loadTodos()
  }

  // Update Todo Calling
  updateTodo(todo: Todo) {
    this.todoServices.updateTodo(todo).subscribe((res) => {
      const index = this.todos.findIndex(t => t.id === res.id);

      if (index !== -1) {
        this.todos[index] = res
      }
    })
  }

  // // Delete Todo Calling
  // onDelete(id: any) {
  //   this.todoServices.deleteTodo(id).subscribe(() => {
  //     this.todos = this.todos.filter(todo => todo.id !== id)
  //   }, (err) => {
  //     console.log("Error Happened",err)
  //   })
  // }

  // Get Todo By Id
  getTodoById(id: number) {
    this.todoServices.getTodoById(id).subscribe(res => {
      this.todoById = res
    })
  }
}
