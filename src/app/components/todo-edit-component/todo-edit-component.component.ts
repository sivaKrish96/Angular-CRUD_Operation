import { Component, Input, OnInit } from '@angular/core';
import { CrudServices } from 'src/service/crud-service/crud.service';

@Component({
  selector: 'app-todo-edit-component',
  templateUrl: './todo-edit-component.component.html',
  styleUrls: ['./todo-edit-component.component.css']
})
export class TodoEditComponentComponent implements OnInit {
  constructor(private crudOperation: CrudServices) { }

  @Input() editEnabled!: boolean;
  @Input() editEnableFunc!: () => void;
  updateValue: string = "";

  ngOnInit(): void {
    console.log(this.editEnabled)
  }
}
