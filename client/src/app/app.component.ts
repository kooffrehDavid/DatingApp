import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NavComponent } from './nav/nav.component';
import { AccountService } from './service/account.service';
import { User } from './models/user';
import { HomeComponent } from './home/home.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CommonModule,NavComponent,HomeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'client';
  users: any;

  constructor( private http: HttpClient, private accountService:AccountService) {


  }
  ngOnInit(): void {
// this.getUser();
this.setCurrentUser();
  }
//   getUser(){
//  this.http.get("https://localhost:5001/api/users").subscribe(val => this.users = val)
//   console.log(this.users);
//   }
setCurrentUser(){
  const userSrting=  localStorage.getItem('user');
  if(!userSrting) return;
  const user: User = JSON.parse(userSrting);
  this.accountService.setCurrentUser(user);
}
}
