import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Task } from '../../models/tasks.models';

@Component({
  selector: 'app-tasks',
  imports: [FormsModule, CommonModule],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css'
})
export class TodoComponent {
[x: string]: any;
  tasks: Task[] = [];
  newTask: string = '';


  AddTask(){
    if (this.newTask) {
      const task: Task = {
        id: this.tasks.length + 1,
        title: this.newTask,
        completed: false
      };

      this.tasks.push(task);
      this.newTask = '';
    }
  }
  get numberTasks(): number {
  return this.tasks.length;
}

deleteTask(task: Task) {
  this.tasks = this.tasks.filter(t => t.id !== task.id);
}
}
