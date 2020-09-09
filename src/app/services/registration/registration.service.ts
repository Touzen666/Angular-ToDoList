import { User } from './../../model/user';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class RegistrationService {
  selectedUser: User = {
    name: '',
    email: '',
    password: '',
    age: 0,
  };
  apiUrl: 'https://api-nodejs-todolist.herokuapp.com/user';
  constructor(private http: HttpClient) {}

  postUser(user: User) {
    return this.http.post(this.apiUrl + '/register', user);
  }

  postRegister() {
    return {
      name: 'Muhammad Nur Aleeei',
      email: 'muh.nurali4ee3@gmail.com',
      password: '12345678',
      age: 24,
    };
  }
}
