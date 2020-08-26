
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material";
import { Component, OnInit, Input, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { v4 as uuid } from 'uuid';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {
  dialogTitle = "Create new user";
  user: string;
  email: string;
  form: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data) {
    if (this.data.edit == true) {
      this.dialogTitle = "Edit user info";
    }

  }

  ngOnInit() {
    this.form = this.formBuilder.group({
      user: [this.data.user, Validators.required],
      email: [this.data.email, [Validators.required, Validators.email]]

    });
  }
  close(): void {
    this.dialogRef.close({ data: false });
  }

  save() {
    console.log(this.form.get("user").value)
    console.log(this.form.get("email").value)
    //console.log("id", this.data.id)

    this.dialogRef.close({ "user": this.form.get("user").value, "email": this.form.get("email").value, "id": uuid(), edit: this.data.edit });



  }
}
