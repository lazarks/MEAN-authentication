import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  registerUserData = {
    email: '',
    password: '',
  };

  constructor() {}

  ngOnInit(): void {}

  registerUser() {
    console.log(this.registerUserData);
  }
}
