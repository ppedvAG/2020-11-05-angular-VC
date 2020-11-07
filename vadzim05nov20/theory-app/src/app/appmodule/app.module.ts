import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InitialComponent } from './initial/initial.component';
import { LabsModule } from '../labs/labs.module';
import { TodosModule } from '../todos/todos.module';
import { TodosServiceService } from '../todos-service.service';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ImpressumComponent } from '../labs/impressum/impressum.component';
import {MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
// import * as Mat from '@angular/material/'

@NgModule({
  declarations: [
    AppComponent,
    InitialComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LabsModule,
    TodosModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    FormsModule
  ],
  exports: [
    MatButtonModule,
    FormsModule
  ],
  providers: [
    TodosServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
