import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Todo } from 'src/app/Todo';
@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {
  desc:string
  title:string
  @Output() todoAdd:EventEmitter<Todo> = new EventEmitter()
  
  constructor() { }

  ngOnInit(): void {
  }
  onSubmit(){
    const todo={
      sno:8,
      title:this.title,
      desc:this.desc,
      active:true
    }
    console.log(this.desc)
    this.todoAdd.emit(todo)
  }
  
}
