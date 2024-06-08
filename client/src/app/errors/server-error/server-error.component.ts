import { NgIf } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-server-error',
  standalone: true,
  imports: [NgIf],
  templateUrl: './server-error.component.html',
  styleUrl: './server-error.component.css'
})
export class ServerErrorComponent {
  //error: any;
 router = inject(Router)
  navigation = this.router.getCurrentNavigation();
  error = this.navigation?.extras?.state?.['error'];
 constructor() {

 }
}
