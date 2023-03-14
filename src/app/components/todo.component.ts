import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  todoForm!: FormGroup
  taskArray!: FormArray

  constructor(private fb: FormBuilder) {

  }

  ngOnInit(): void {
    this.todoForm = this.createTodoForm()
  }

  private createTodoForm(): FormGroup {
    this.taskArray = this.fb.array([])
    return this.fb.group({
      taskName: this.fb.control(''),
      name: this.fb.control(''),
      tasks: this.taskArray
    })
  }

  // create the group, then add group to array
  addTask() {
    const newTask = this.fb.group({
      description: this.fb.control<string>(''),
      dueDate: this.fb.control<Date>(new Date())
    })
    this.taskArray.push(newTask)
  }

  deleteTask(index: number) {
    this.taskArray.removeAt(index)
  }

  saveTodo() {
    const todo = this.todoForm.value
    console.info(todo)
  }
}
