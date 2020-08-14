import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {
  @Input() data;
  @Input() typeOfList;
  @Input() index;
  @Input() showButton;
  @Output() newData = new EventEmitter()
  @Output() removeTask = new EventEmitter()

  constructor() {
    console.log(this.data)
  }
  ngOnInit() {

  }
  remove() {
    // console.log(this.index, this.typeOfList)
    this.removeTask.next({ index: this.index, typeOfList: this.typeOfList })
  }
  openDialog() {
    console.log("test")
    this.newData.emit({ description: this.data.description, title: this.data.title, edit: true, typeOfList: this.typeOfList, index: this.index })
  }
  // openDialog(): void {

  //   const dialogRef = this.dialog.open(CourseDialogComponent, {
  //     width: '350px',
  //     data: { description: this.data.description, title: this.data.title, edit: true }
  //   });
  //   dialogRef.afterClosed().subscribe(
  //     data => console.log("Dialog output:", data)
  //   );

  // }


}



