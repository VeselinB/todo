import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseDialogComponent } from '../todo/course-dialog/course-dialog.component';



@NgModule({
  declarations: [CourseDialogComponent],
  imports: [
    CommonModule
  ],
  exports: [CourseDialogComponent],
  entryComponents: [CourseDialogComponent]
})
export class SharedModuleModule { }
