import { Component } from '@angular/core';

//Interface
import { TaskList } from '../../model/task-list';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent {
  public taskList: Array<TaskList> = [];

  constructor() { }

  ngOnInit(): void {

    this.taskList = [
      {
        task: "New task 1",
        checked: true
      },
      {
        task: "New task 2",
        checked: false
      }
    ]
  }
}
