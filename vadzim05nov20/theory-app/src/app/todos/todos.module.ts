import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodosrootComponent } from './todosroot/todosroot.component';
import { TodoComponent } from './todo/todo.component';
import { TodoslistComponent } from './todoslist/todoslist.component';
import { EditComponent } from './edit/edit.component';
import { AddComponent } from './add/add.component';
import { AppRoutingModule } from '../appmodule/app-routing.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    TodosrootComponent,
    TodoComponent,
    TodoslistComponent,
    EditComponent,
    AddComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    FormsModule
  ],
  exports: [
    TodosrootComponent
  ]
})
export class TodosModule { }
