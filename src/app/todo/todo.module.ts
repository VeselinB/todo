import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoComponent } from './todo/todo.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { Route, RouterModule } from '@angular/router';
import { MaterialModule } from '../material/material.module';
import { CourseDialogComponent } from './course-dialog/course-dialog.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

//import { CourseDialogComponentComponent } from './course-dialog-component/course-dialog-component.component';

const routes: Route[] = [
  { path: '', component: TodoListComponent },

];

@NgModule({
  declarations: [TodoComponent, TodoListComponent, CourseDialogComponent],
  imports: [
    ReactiveFormsModule,
    FormsModule,
    MaterialModule,
    CommonModule,
    RouterModule.forChild(routes),
  ],

  entryComponents: [CourseDialogComponent]
})
export class TodoModule { }
