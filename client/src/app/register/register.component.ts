import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AccountService } from '../service/account.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
model: any= {}
constructor(private accountService: AccountService, private toastr: ToastrService) {

}
register(){
  this.accountService.register(this.model).subscribe({
     next: _ => console.log("somthing"),
  error: error => this.toastr.error(error.error)}

  )
}
cancel(){
  console.log("canceled")
}

}
