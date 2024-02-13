import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Todo } from 'src/app/Modules/Form-Module/form.module';

@Injectable({
    providedIn: 'root'
})
export class CrudServices {
    serviceUrl:string = "http://localhost:3000/todos";

    constructor(private http: HttpClient) { }

    getTodos(): Observable<Todo[]> {
        return this.http.get<Todo[]>(this.serviceUrl)
    }

    getTodoById(id: number): Observable<Todo> {
        return this.http.get<Todo>(`${this.serviceUrl}/${id}`)
    }

    createTodo(todo: Todo): Observable<Todo> {
        return this.http.post<Todo>(this.serviceUrl, todo)
    }

    updateTodo(todo: Todo): Observable<Todo> {
        return this.http.put<Todo>(`${this.serviceUrl}/${todo.id}`, todo)
    }

    deleteTodo(id: any): Observable<void> {
        return this.http.delete<void>(`${this.serviceUrl}/${id}`);
    }
}