import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/material/material.module';
import { RouterModule, Route } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { reducer } from './user.reducer';
import { UserComponent } from './components/user.component'
import { CourseDialogComponent } from 'src/app/todo/course-dialog/course-dialog.component';
import { SharedModuleModule } from 'src/app/shared-module/shared-module.module';
import { DialogComponent } from './components/dialog/dialog.component';
const routes: Route[] = [
  { path: '', component: UserComponent },

];


@NgModule({
  declarations: [UserComponent, DialogComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    MaterialModule,
    CommonModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature('users', reducer),
  ],
  entryComponents: [DialogComponent]

})


export class UsersModule { }
