import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from 'src/app/Models/UserModel';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private userService: UserService) {

    const user = new User();
    user.nombre = 'Junior';
    user.apellido = 'Wong';
    user.email = 'fcolanw@gmail.com';

    this.userService.getUserName();
    this.userService.addUser(user);
  }

  ngOnInit(): void {
  }

}
