
import { MatDialog, MatDialogConfig } from "@angular/material";
import { Component, Output, EventEmitter } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { CourseDialogComponent } from '../course-dialog/course-dialog.component';
import { Store, select } from '@ngrx/store';
import { deleteTask, updateArrays, createNewTask, updateTask } from '../todo.actions';
import { AppState } from 'src/app/app-state';
import * as selectors from '../todo.selectors';
import { ActivatedRoute } from '@angular/router';

/**
 * @title Drag&Drop connected sorting
 */
@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent {
  @Output() showButton = false;
  id;
  todo = [
    // { title: 'Get to work', description: 'Get to work' },
    // { title: 'Pick up groceries', description: 'Pick up groceries' },
    // { title: 'go home', description: 'Get to work' },
    // { title: 'Fall asleep', description: 'Get to work' },


  ];

  done = [
    // { title: 'Get to work', description: 'Get to work' },
    // { title: 'Pick up groceries', description: 'Pick up groceries' },
    // { title: 'go home', description: 'Get to work' },
    // { title: 'Fall asleep', description: 'Get to work' },

  ];
  users = {};
  username;
  constructor(private dialog: MatDialog, private store: Store<AppState>, private route: ActivatedRoute) {
    this.route.params.subscribe(params => {
      // console.log(params) //log the entire params object
      this.id = params['id']//log the value of id
    });
    console.log(this.id)
    if (!!this.id) {
      this.store.select(selectors.selectDoneListForUser, { id: this.id }).subscribe((done) => {
        this.done = done;

      });

      this.store.select(store => store.users.entities[this.id]).subscribe(user => {
        this.username = user.user;
      })





      this.store.select(selectors.selectTodoListForUser, { id: this.id }).subscribe((todo) => {
        this.todo = todo;

      });
    } else {
      this.store.select(selectors.selectTodoList).subscribe((todo) => {
        this.todo = todo;

      });

      this.store.select(selectors.selectDoneList).subscribe((done) => {
        this.done = done;

      });
    }
    this.store.select(select => select.users.entities).subscribe(entities => {
      this.users = entities
      // console.log(this.users)
    })



  }
  // @Output() data = new EventEmitter()
  // public sendData(data) {
  //   this.data.emit(data);
  // }

  remove(event) {
    if (event.typeOfList == "done") {
      let result = this.done.slice(0);
      result.splice(event.index, 1);
      //console.log(result)
      // this.store.dispatch(deleteTask({ todo: { done: result, todo: this.todo } }))
      this.store.dispatch(deleteTask({ index: event.index, typeOfList: "done" }))

    } else {
      let result = this.todo.slice(0);
      result.splice(event.index, 1);
      //console.log(result)
      this.store.dispatch(deleteTask({ index: event.index, typeOfList: "todo" }))
      //this.store.dispatch(deleteTask({ todo: { todo: result, done: this.done } }))
      // this.todo.splice(event.index, 1);
    }
  }


  drop(event: CdkDragDrop<string[]>, type: String) {

    if (type == 'todo' && event.previousContainer === event.container) {
      let newArry = this.todo.slice(0)
      let element = this.todo[event.previousIndex];
      newArry.splice(event.previousIndex, 1);
      newArry.splice(event.currentIndex, 0, element);
      console.log("1")
      this.store.dispatch(updateArrays({ todo: { todo: newArry, done: this.done } }))
      // console.log("todo", event.container.id, event.previousIndex, event.currentIndex)
    } else if (type == 'done' && event.previousContainer === event.container) {
      let element = this.done[event.previousIndex];
      let newArry = this.done.slice(0)
      newArry.splice(event.previousIndex, 1);
      newArry.splice(event.currentIndex, 0, element);
      this.store.dispatch(updateArrays({ todo: { todo: this.todo, done: newArry } }))
      console.log("2")
    } else if (type == 'todo' && event.container.id < event.previousContainer.id) {
      let newArryDone = this.done.slice(0)
      let newArryTodo = this.todo.slice(0)
      newArryTodo.splice(event.currentIndex, 0, this.done[event.previousIndex]);
      newArryDone.splice(event.previousIndex, 1);
      this.store.dispatch(updateArrays({ todo: { todo: newArryTodo, done: newArryDone } }))
      console.log("3")
    } else if (type == 'done' && event.container.id > event.previousContainer.id) {
      let newArryDone = this.done.slice(0)
      let newArryTodo = this.todo.slice(0)
      newArryDone.splice(event.currentIndex, 0, this.todo[event.previousIndex]);
      newArryTodo.splice(event.previousIndex, 1);
      this.store.dispatch(updateArrays({ todo: { todo: newArryTodo, done: newArryDone } }))
      console.log("4")
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
  openDialog(event = { description: "", title: "", edit: false, index: 0, typeOfList: undefined }): void {
    //console.log(event)
    if (Object.keys(this.users).length == 0) {
      //console.log("Object is empty")
    }
    const dialogRef = this.dialog.open(CourseDialogComponent, {
      width: '350px',
      data: { description: event.description, title: event.title, edit: event.edit, users: this.users }
    });
    dialogRef.afterClosed().subscribe(
      data => {
        if (data.data == false) {
          // console.log(data)
          return;
        }
        console.log("Dialog output:", data)
        if (event.edit == true) {
          let newData = { ...data, index: event.index, typeOfList: event.typeOfList }
          console.log(newData, "newData")
          this.store.dispatch(updateTask({ data: newData }))
        } else {
          this.store.dispatch(createNewTask({ data: data }))
        }

      }

    );

  }

}

