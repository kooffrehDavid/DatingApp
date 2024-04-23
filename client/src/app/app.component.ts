import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgFor } from '@angular/common';
import { NavComponent } from './nav/nav.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,NgFor,NavComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'client';
  users: any;

  constructor( private http: HttpClient) {


  }
  ngOnInit(): void {
 this.http.get("https://jsonplaceholder.typicode.com/users").subscribe(val => this.users = val)
 console.log(this.users);

  }

}
