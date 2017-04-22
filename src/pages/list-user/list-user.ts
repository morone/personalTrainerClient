import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { UserService } from '../service/user-service';

@Component({
  selector: 'page-list-user',
  templateUrl: 'list-user.html',
  providers: [UserService]
})

export class ListUser {

  users: Array<any>;

  constructor(public navCtrl: NavController, private userService: UserService) {
  	this.userService.listUsers().subscribe(
    data => {
      this.users = data[0]['users'];
      console.log(this.users);
    },
    err => {
      console.log(err);
    },
    () => console.log('User Search Complete')
  );
  }


}

