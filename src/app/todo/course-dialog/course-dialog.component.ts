import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material";
import { Component, OnInit, Input, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'course-dialog',
  templateUrl: './course-dialog.component.html',
  styleUrls: ['./course-dialog.component.scss']
})
export class CourseDialogComponent implements OnInit {
  public dialogTitle = "Create new task";
  public title: string;
  public description: string;
  public form: FormGroup;
  public users
  public publicid;
  public unAssign;




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
    //console.log(Object.values(this.data.users))
    this.users = Object.values(this.data.users);
    this.unAssign = { user: "UnAssign" };
    this.form = this.formBuilder.group({
      title: [this.data.title, Validators.required],
      description: [this.data.description, Validators.required],
      user: null,

    });
    this.form.get('user').patchValue(this.data.userData);
    this.form.valueChanges.subscribe(value => {
      console.log('has changed:', value.user)

    });
  }

  close(): void {
    this.dialogRef.close({ data: false });
  }

  save() {


    this.dialogRef.close({ "title": this.form.get("title").value, "description": this.form.get("description").value, "userId": this.form.get("user").value.id, "user": this.form.get("user").value.user });



  }


}