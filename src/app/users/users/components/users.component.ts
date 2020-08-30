import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app-state';
import * as Actions from '../users.actions'
import { v4 as uuid } from 'uuid';
import { Users, selectAll } from '../user.reducer';
import { Observable } from 'rxjs';
import { updateTask, createNewTask } from 'src/app/todo/todo.actions';
import { CourseDialogComponent } from 'src/app/todo/course-dialog/course-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from './dialog/dialog.component';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  public users
  @ViewChild('callAPIDialog', { static: true }) callAPIDialog: TemplateRef<any>;
  constructor(public store: Store<AppState>, private dialog: MatDialog) {
    //this.store.dispatch(Actions.createUser({ user: { user: "Test", email: "uuu", id: uuid() } }))
    console.log("test")

    this.store.select(store => store.users).subscribe(store => {
      this.users = Object.values(store.entities)

    })
  }

  ngOnInit() {
  }


  remove(id) {

    let dialogRef = this.dialog.open(this.callAPIDialog);
    dialogRef.afterClosed().subscribe(result => {

      if (result !== undefined) {
        if (result === 'yes') {

          this.store.dispatch(Actions.removeUser({ id: id }))
          console.log('User clicked yes.');
        } else if (result === 'no') {

          //  console.log('User clicked no.');
        }
      }
    })

  }
  openDialog(user = { user: "", email: "", edit: false, id: "" }): void {
    console.log(user)
    let editable = false;
    if (!!user.user) {
      editable = true;
    }
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '350px',
      data: { user: user.user, email: user.email, edit: editable, id: user.id, }
    });
    dialogRef.afterClosed().subscribe(
      data => {
        if (data.data == false) {
          // console.log(data)
          return;
        }
        console.log("Dialog output:", data)
        if (data.edit == true) {


          delete data["edit"];


          this.store.dispatch(Actions.updateUser({ update: data }))

        } else {
          this.store.dispatch(Actions.createUser({ user: { user: data.user, email: data.email, id: data.id } }))

        }

      }

    );
  }
}
