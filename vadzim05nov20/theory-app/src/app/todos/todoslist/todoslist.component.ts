import { Component, OnInit } from '@angular/core';
import { TodosServiceService } from 'src/app/todos-service.service';
import Todo from '../models/todo';

@Component({
  selector: 'app-todoslist',
  templateUrl: './todoslist.component.html',
  styleUrls: ['./todoslist.component.css']
})
export class TodoslistComponent implements OnInit {

  etwas: string = 'something'
  todos: Array<Todo>

  constructor(
    private ts: TodosServiceService
  ) { }

  ngOnInit(): void {
    this.getTodos()
  }

  ngOnChanges(): void {
console.log('this.etwas :>> ', this.etwas);
  }

  getTodos(): void {
    this.ts.getTodos()
    .subscribe(todos => this.todos = todos)
  }

}
