import { Component, OnInit } from '@angular/core';
import { User } from '../models/user.model';
import { UserService } from '../services/user.service';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  users: User[] = [];
  firstNameUserObject = JSON.parse(localStorage.getItem('firstName'));
  firstNameUser: string;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.firstNameUser = this.firstNameUserObject.firstName;
    
    this.userService.getAll().subscribe(res => {
      this.users = res.data.users;
    });

  }
}
