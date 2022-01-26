import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private _apiUrl = 'http://localhost:3000/api';

  constructor(private _http: HttpClient, private _router: Router) {}

  register(user: any) {
    return this._http.post<any>(`${this._apiUrl}/register`, user);
  }

  login(user: any) {
    return this._http.post<any>(`${this._apiUrl}/login`, user);
  }

  loggedIn() {
    return !!localStorage.getItem('token'); // (*)
  }

  getToken() {
    return localStorage.getItem('token');
  }

  logout() {
    localStorage.removeItem('token');
    this._router.navigate(['/events']);
  }
}
