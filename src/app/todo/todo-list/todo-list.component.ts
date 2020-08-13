
import { MatDialog, MatDialogConfig } from "@angular/material";
import { Component, Output, EventEmitter } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

/**
 * @title Drag&Drop connected sorting
 */
@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent {
  constructor(private dialog: MatDialog) { }
  @Output() data = new EventEmitter()
  public sendData(data) {
    this.data.emit(data);
  }

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

  drop(event: CdkDragDrop<string[]>) {
    console.log(event.container)
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }
  }


}

