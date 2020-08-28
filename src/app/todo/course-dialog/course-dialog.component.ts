import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material";
import { Component, OnInit, Input, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

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
  users = [{ user: "george" }]
  id;



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
    console.log(Object.values(this.data.users))
    this.users = Object.values(this.data.users);
    this.form = this.formBuilder.group({
      title: [this.data.title, Validators.required],
      description: [this.data.description, Validators.required],
      user: "",

    });
  }

  close(): void {
    this.dialogRef.close({ data: false });
  }

  save() {
    // console.log(this.form.get("title").value)
    // console.log(this.form.get("description").value)
    // console.log(this.id)
    // console.log( this.form.get("user").value.id)

    this.dialogRef.close({ "title": this.form.get("title").value, "description": this.form.get("description").value, "userId": this.form.get("user").value.id, "user": this.form.get("user").value.user });



  }
}