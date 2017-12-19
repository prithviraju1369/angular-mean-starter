import { Component, OnInit } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title: string;

  constructor(private http: Http) {

  }

  ngOnInit() {
    this.getHello();
  }

  getHello() {
    let self = this;
    let result = this.http.get('/meanapi/hello')
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
    result.subscribe((x) => {
      if (x && x.text) {
        self.title = x.text;
      }else{
        self.title = 'Hello from Local, Insert a record into mongo collection';
      }
    }, (err) => {
      console.log('error while fetching from API')
    })
  }

}
