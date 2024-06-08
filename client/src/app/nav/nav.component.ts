import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AccountService } from '../service/account.service';
import { NgIf, AsyncPipe, TitleCasePipe } from '@angular/common';
import { Router, RouterLink, RouterLinkActive } from '@angular/router'
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [FormsModule,NgIf,AsyncPipe,RouterLink,RouterLinkActive,TitleCasePipe],
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
 model:any ={};
loggedIn = false;

  constructor(public accountService: AccountService, private router: Router,private toastr: ToastrService) { }

  ngOnInit() {

  }

login(){
  this.accountService.login(this.model).subscribe({
    next: _ => this.router.navigateByUrl('/members'),
    

  });
}
logout(){
  this.accountService.logout();
   this.router.navigateByUrl('/')
}
}
