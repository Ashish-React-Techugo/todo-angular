import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/Todo';
@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  todos:Todo[]
  constructor() {
    this.todos=[
      {
        sno:1,
        title:"This is title",
        desc:"Description",
        active:true
      },
      {
        sno:2,
        title:"This is title",
        desc:"Description",
        active:true
      },
      {
        sno:3,
        title:"This is title",
        desc:"Description",
        active:true
      },
      {
        sno:4,
        title:"This is title",
        desc:"Description",
        active:true
      }
    ]
   }

  ngOnInit(): void {
  }
  deleteTodo(todo:Todo){
    const index=this.todos?.indexOf(todo);
    this.todos?.splice(index,1)
    console.log(index)
  }
  addTodo(todo:Todo){
    console.log(todo);
    this.todos.push(todo);
  }
  toggleTodo(todo:Todo){
    const index=this.todos?.indexOf(todo);
    this.todos[index].active=!this.todos[index].active
    console.log(todo)
  }
}
