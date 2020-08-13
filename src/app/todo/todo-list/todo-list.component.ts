
import { MatDialog, MatDialogConfig } from "@angular/material";
import { Component, Output, EventEmitter } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { CourseDialogComponent } from '../course-dialog/course-dialog.component';
import { Store, select } from '@ngrx/store';
import { getTodoTasks } from '../todo.actions';
/**
 * @title Drag&Drop connected sorting
 */
@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent {
  constructor(private dialog: MatDialog, private store: Store) {

    this.store.select('todo').subscribe(data => {
      this.todo = data.todo;
    });
  }
  // @Output() data = new EventEmitter()
  // public sendData(data) {
  //   this.data.emit(data);
  // }
  @Output() showButton = false;
  todo = [
    { title: 'Get to work', description: 'Get to work' },
    { title: 'Pick up groceries', description: 'Pick up groceries' },
    { title: 'go home', description: 'Get to work' },
    { title: 'Fall asleep', description: 'Get to work' },


  ];

  done = [
    { title: 'Get to work', description: 'Get to work' },
    { title: 'Pick up groceries', description: 'Pick up groceries' },
    { title: 'go home', description: 'Get to work' },
    { title: 'Fall asleep', description: 'Get to work' },

  ];

  remove(event) {
    if (event.typeOfList == "done") {
      this.done.splice(event.index, 1);
    } else {
      this.todo.splice(event.index, 1);
    }
  }


  drop(event: CdkDragDrop<string[]>) {
    if (event.container.id == "cdk-drop-list-0" && event.previousContainer === event.container) {

      let element = this.todo[event.previousIndex];
      this.todo.splice(event.previousIndex, 1);
      this.todo.splice(event.currentIndex, 0, element);
      // console.log("todo", event.container.id, event.previousIndex, event.currentIndex)
    } else if (event.container.id == "cdk-drop-list-1" && event.previousContainer === event.container) {
      let element = this.done[event.previousIndex];
      this.done.splice(event.previousIndex, 1);
      this.done.splice(event.currentIndex, 0, element);
    } else if (event.container.id == "cdk-drop-list-0" && event.previousContainer.id == "cdk-drop-list-1") {

      this.todo.splice(event.currentIndex, 0, this.done[event.previousIndex]);
      this.done.splice(event.previousIndex, 1);
    } else if (event.container.id == "cdk-drop-list-1" && event.previousContainer.id == "cdk-drop-list-0") {
      this.done.splice(event.currentIndex, 0, this.todo[event.previousIndex]);
      this.todo.splice(event.previousIndex, 1);

    }

    //console.log(event.container)
    if (event.previousContainer === event.container) {
      //  moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {


      // transferArrayItem(
      //   event.previousContainer.data,
      //   event.container.data,
      //   event.previousIndex,
      //   event.currentIndex);
    }

  }
  openDialog(event = { description: "", title: "", edit: false }): void {
    console.log(event)
    const dialogRef = this.dialog.open(CourseDialogComponent, {
      width: '350px',
      data: { description: event.description, title: event.title, edit: event.edit }
    });
    dialogRef.afterClosed().subscribe(
      data => console.log("Dialog output:", data)
    );

  }

}

