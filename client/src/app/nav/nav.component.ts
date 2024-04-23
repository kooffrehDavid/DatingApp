import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AccountService } from '../service/account.service';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
 model:any ={};
 loggedIn = false;
  constructor(private accountService: AccountService) { }

  ngOnInit() {
  }
login(){
  this.accountService.login(this.model).subscribe({
    next: value => {
      console.log(value);
    },
    error: error => console.log(error),

  });
}
}
