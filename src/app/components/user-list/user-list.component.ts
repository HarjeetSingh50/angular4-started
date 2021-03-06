import { Component, OnInit } from '@angular/core';
import { User } from '../../objects/user';
import {UserService} from '../../services/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users : User[] = [];
  selectedUser: User;
    
  constructor( private userService: UserService ) { 
    this.users = userService.getAll();
  }

  ngOnInit() {
  }
  
  selectUser(user:User){
    this.selectedUser = user;
  }
}
