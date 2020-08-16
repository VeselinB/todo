import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material";
import { Component, OnInit, Input, Inject } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'course-dialog',
  templateUrl: './course-dialog.component.html',
  styleUrls: ['./course-dialog.component.scss']
})
export class CourseDialogComponent implements OnInit {
  dialogTitle = "Create new task";
  title: string;
  description: string;
  form: FormGroup;





  constructor(
    private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<CourseDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data
  ) {
    if (this.data.edit == true) {
      this.dialogTitle = "Edit task";
    }
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      title: this.data.title,
      description: this.data.description,

    });
  }

  close(): void {
    this.dialogRef.close({ data: false });
  }

  save() {
    console.log(this.form.get("title").value)
    console.log(this.form.get("description").value)

    this.dialogRef.close({ "title": this.form.get("title").value, "description": this.form.get("description").value });



  }
}