import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TodoFormComponent } from './components/todo-form/todo-form.component';
import { TodoTableComponent } from './components/todo-table/todo-table.component';
import { AppHeaderComponent } from './components/app-header/app-header.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CrudServices } from 'src/service/crud-service/crud.service';
import { TodoEditComponentComponent } from './components/todo-edit-component/todo-edit-component.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoFormComponent,
    TodoTableComponent,
    AppHeaderComponent,
    TodoEditComponentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [CrudServices],
  bootstrap: [AppComponent]
})
export class AppModule { }
