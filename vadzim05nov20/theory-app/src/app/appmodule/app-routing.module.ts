import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from '../labs/about/about.component';
import { ImpressumComponent } from '../labs/impressum/impressum.component';
import { LabsrootComponent } from '../labs/labsroot/labsroot.component';
import { AddComponent } from '../todos/add/add.component';
import { EditComponent } from '../todos/edit/edit.component';
import { TodosrootComponent } from '../todos/todosroot/todosroot.component';

const routes: Routes = [
  {
    path: 'todos', component: TodosrootComponent,
    children: [
      { path: 'edit', component: EditComponent },
      { path: 'add', component: AddComponent }
    ]
  },
  {
    path: 'labs', component: LabsrootComponent,
    children: [
      { path: 'about', component: AboutComponent },
      { path: 'impressum', component: ImpressumComponent }
    ]
  },
  { path: '**', redirectTo: '/' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
