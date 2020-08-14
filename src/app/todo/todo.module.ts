import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoComponent } from './todo/todo.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { Route, RouterModule } from '@angular/router';
import { MaterialModule } from '../material/material.module';
import { CourseDialogComponent } from './course-dialog/course-dialog.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { todoReducer } from './todo.reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'src/environments/environment.prod';

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
    StoreModule.forRoot({ todo: todoReducer }),
    StoreDevtoolsModule.instrument({
      name: 'NgRx Demo App',
      logOnly: environment.production
    })
  ],

  entryComponents: [CourseDialogComponent]
})
export class TodoModule { }
