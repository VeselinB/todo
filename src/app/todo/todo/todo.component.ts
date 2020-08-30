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

  }
  ngOnInit() {

  }
  remove() {
    // console.log(this.index, this.typeOfList)
    this.removeTask.next({ index: this.index, typeOfList: this.typeOfList })
  }
  openDialog() {

    this.newData.emit({ description: this.data.description, title: this.data.title, edit: true, typeOfList: this.typeOfList, index: this.index, userId: this.data.userId })
  }



}



