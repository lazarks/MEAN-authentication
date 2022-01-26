import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginUserData: any = {};

  constructor(private _auth: AuthService, private _router: Router) {}

  ngOnInit(): void {}

  loginUser() {
    // console.log(this.loginUserData);
    this._auth.login(this.loginUserData).subscribe(
      (res) => {
        console.log(res);
        localStorage.setItem('token', res.token);
        this._router.navigate(['/special']);
      },
      (err) => console.log(err)
    );
  }
}
