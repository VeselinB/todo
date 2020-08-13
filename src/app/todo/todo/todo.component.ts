import { Component, OnInit, Input, Output } from '@angular/core';
import { MatDialogConfig, MatDialog } from '@angular/material';
import { CourseDialogComponent } from '../course-dialog/course-dialog.component';
import { EventEmitter } from 'protractor';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {
  @Input() data;
  @Output() newData = new EventEmitter()

  constructor(private dialog: MatDialog) {
    console.log(this.data)
  }
  ngOnInit() {

  }

  openDialog(): void {

    const dialogRef = this.dialog.open(CourseDialogComponent, {
      width: '350px',
      data: { description: this.data.description, title: this.data.title, edit: true }
    });
    dialogRef.afterClosed().subscribe(
      data => console.log("Dialog output:", data)
    );

  }


}



