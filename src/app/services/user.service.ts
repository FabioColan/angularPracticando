import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../Models/UserModel';

@Injectable(
  {
    providedIn: 'root'
  }
)

export class UserService {

  constructor(private http: HttpClient) { }

  getUserName() {

    this.http.get('http://localhost:49185/api/User/1212')
      .subscribe(resp => {
        console.log(resp);
      });
  }

  addUser(user: User) {

    const data = new User();
    data.nombre =  user.nombre;
    data.apellido = user.apellido;
    data.email = user.email;

    this.http.post('http://localhost:49185/api/User/adduser', data)
      .subscribe( resp => {
        console.log(resp);
      });
  }
}

