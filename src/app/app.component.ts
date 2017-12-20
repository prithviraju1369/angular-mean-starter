import { Component, OnInit } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  todos: Array<any>;
  todo: String='';

  constructor(private http: Http) {

  }

  ngOnInit() {
    this.getAllTodos();
  }

  saveTodo(){
    let self=this;
    if (self.todo && self.todo.trim() !=''){
      let result = this.http.post(`/meanapi/todo`, { 'title': self.todo})
        .map((res: Response) => res.json())
        .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
      result.subscribe((x) => {
        if (x) {
          self.todo='';
          self.getAllTodos();
        }
      }, (err) => {
        console.log('error while Posting to API')
      })
    }
  }

  getAllTodos() {
    let self = this;
    let result = this.http.get('/meanapi/todo')
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
    result.subscribe((x) => {
      if (x && x.length>0) {
        self.todos = x;
      }
    }, (err) => {
      console.log('error while fetching from API')
    })
  }

}
