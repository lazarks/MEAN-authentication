import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

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

  constructor(private _auth: AuthService) {}

  ngOnInit(): void {}

  registerUser() {
    // console.log(this.registerUserData);
    this._auth.register(this.registerUserData).subscribe(
      (res) => console.log(res),
      (err) => console.log(err)
    );
  }
}
